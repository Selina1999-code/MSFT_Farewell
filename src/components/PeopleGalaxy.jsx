import { useMemo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { messages } from '../data.js'

function initials(name) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase()
}

// Deterministic golden-angle spiral so the map looks like a galaxy
// and every star keeps a stable home.
const GOLDEN = Math.PI * (3 - Math.sqrt(5))
function useGalaxyLayout(items) {
  return useMemo(() => {
    const n = items.length
    return items.map((m, i) => {
      const angle = i * GOLDEN
      const rNorm = Math.sqrt((i + 0.6) / n)
      const radius = 6 + rNorm * 42 // percent from center
      return {
        ...m,
        i,
        x: 50 + radius * Math.cos(angle),
        y: 50 + radius * Math.sin(angle),
        size: 9 - rNorm * 3, // crisp points — inner stars a touch larger
        twinkle: 2.4 + (i % 5) * 0.6,
        drift: 5 + (i % 7) * 1.3, // gentle floating cadence
      }
    })
  }, [items])
}

export default function PeopleGalaxy() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(null)
  const stars = useGalaxyLayout(messages)

  const q = query.trim().toLowerCase()
  const matchCount = q ? stars.filter((s) => s.name.toLowerCase().includes(q)).length : stars.length

  return (
    <section className="section galaxy" id="constellation" aria-label="The people — memory galaxy">
      <div className="container">
        <p className="eyebrow">The memory galaxy</p>
        <h2 className="section-title">
          <span className="gradient-text">People</span> who made these four years.
        </h2>
        <p className="section-sub">
          Every star is someone I want to thank. Search a name to find their light — or wander the
          galaxy and tap any star to read their note. There are so many more people I owe thanks
          to — I simply ran out of time, so this list can't hold everyone who shaped these years.
        </p>

        {/* Search */}
        <div className="galaxy-search">
          <span className="gs-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for your name…"
            aria-label="Search for a person by name"
            className="gs-input"
          />
          {query && (
            <button className="gs-clear" onClick={() => setQuery('')} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
        <p className="galaxy-count" role="status" aria-live="polite">
          {q
            ? `${matchCount} ${matchCount === 1 ? 'match' : 'matches'} for “${query}”`
            : 'Drag to drift through the galaxy · tap a star to open a note'}
        </p>

        {/* Map */}
        <div className="galaxy-map">
          <div className="galaxy-haze" aria-hidden="true" />
          <div className="galaxy-dust" aria-hidden="true" />
          <div className="galaxy-vignette" aria-hidden="true" />
          <span className="galaxy-shooting" aria-hidden="true" />
          <motion.div
            className="galaxy-field"
            drag
            dragConstraints={{ left: -120, right: 120, top: -90, bottom: 90 }}
            dragElastic={0.12}
          >
            {stars.map((s) => {
              const isMatch = q && s.name.toLowerCase().includes(q)
              const isDim = q && !isMatch
              return (
                <motion.button
                  key={s.name}
                  className={`gx-star ${isMatch ? 'is-hit' : ''} ${isDim ? 'is-dim' : ''}`}
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  onClick={() => setActive(s)}
                  aria-label={`${s.name}. Open note.`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(s.i * 0.03, 0.8), type: 'spring', stiffness: 140, damping: 14 }}
                  whileHover={{ scale: 1.4, zIndex: 6 }}
                  whileTap={{ scale: 1.15 }}
                >
                  <motion.span
                    className="gx-orb"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: s.drift, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.span
                      className="gx-dot"
                      style={{ width: s.size, height: s.size }}
                      animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.12, 1] }}
                      transition={{ duration: s.twinkle, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="gx-spikes" aria-hidden="true" />
                    </motion.span>
                  </motion.span>
                  <span className="gx-name">{s.name}</span>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {active && <NoteCard person={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function NoteCard({ person, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="card-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Note for ${person.name}`}
    >
      <motion.div
        className="person-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="card-close" onClick={onClose} aria-label="Close note">
          ×
        </button>
        <div className="card-avatar" aria-hidden="true">
          {person.photo ? <img src={person.photo} alt="" /> : <span>{initials(person.name)}</span>}
        </div>
        <h3 className="card-name">{person.name}</h3>
        {person.extra && <p className="card-role">{person.extra}</p>}
        <p className="card-message">{person.note}</p>
      </motion.div>
    </motion.div>
  )
}
