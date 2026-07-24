import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { people } from '../data.js'

function initials(name) {
  const clean = name.replace(/placeholder\s*—?\s*/i, '').trim()
  const parts = clean.split(/\s+/)
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase()
}

export default function Constellation() {
  const [active, setActive] = useState(null)

  return (
    <section className="section constellation" id="constellation" aria-label="The people">
      <div className="container">
        <p className="eyebrow">The constellation</p>
        <h2 className="section-title">
          Every star here is someone who made the four years brighter.
        </h2>
        <p className="section-sub">
          Tap a star to read a note. Use <kbd>Tab</kbd> to move between people and{' '}
          <kbd>Enter</kbd> to open their message.
        </p>

        <div className="sky" role="list" aria-label="Coworkers to remember">
          {/* Shooting stars sweeping across the sky */}
          {[0, 1].map((n) => (
            <motion.span
              key={`shoot-${n}`}
              className="shooting-star"
              aria-hidden="true"
              style={{ top: `${12 + n * 22}%` }}
              initial={{ x: '-20%', opacity: 0 }}
              animate={{ x: '130%', opacity: [0, 1, 0] }}
              transition={{
                duration: 1.1,
                delay: 3 + n * 5,
                repeat: Infinity,
                repeatDelay: 9,
                ease: 'easeIn',
              }}
            />
          ))}

          {/* Decorative connecting lines between the stars */}
          <svg className="sky-lines" aria-hidden="true" preserveAspectRatio="none">
            {people.map((p, i) => {
              const next = people[(i + 1) % people.length]
              return (
                <line
                  key={p.id}
                  x1={`${p.x}%`}
                  y1={`${p.y}%`}
                  x2={`${next.x}%`}
                  y2={`${next.y}%`}
                />
              )
            })}
          </svg>

          {people.map((p, i) => (
            <motion.button
              key={p.id}
              role="listitem"
              className="star-node"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onClick={() => setActive(p)}
              aria-label={`${p.name}${p.role ? ', ' + p.role : ''}. Open personal message.`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 120, damping: 12 }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
            >
              <span className="star-halo" aria-hidden="true" />
              <span className="star-dot">
                {p.photo ? (
                  <img src={p.photo} alt="" className="star-photo" />
                ) : (
                  <span className="star-initials">{initials(p.name)}</span>
                )}
              </span>
              <span className="star-name">{p.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <PersonCard person={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function PersonCard({ person, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
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
      aria-label={`Message for ${person.name}`}
    >
      <motion.div
        className="person-card"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="card-close" onClick={onClose} aria-label="Close message">
          ×
        </button>
        <div className="card-avatar" aria-hidden="true">
          {person.photo ? (
            <img src={person.photo} alt="" />
          ) : (
            <span>{initials(person.name)}</span>
          )}
        </div>
        <h3 className="card-name">{person.name}</h3>
        {person.role && <p className="card-role">{person.role}</p>}
        <p className="card-message">{person.message}</p>
      </motion.div>
    </motion.div>
  )
}
