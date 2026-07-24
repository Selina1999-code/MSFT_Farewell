import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { takeaways } from '../data.js'

export default function Takeaways() {
  const [packed, setPacked] = useState([])
  const [isOver, setIsOver] = useState(false)
  const suitcaseRef = useRef(null)

  const isPacked = (id) => packed.includes(id)

  const pack = (id) => setPacked((p) => (p.includes(id) ? p : [...p, id]))
  const toggle = (id) =>
    setPacked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const overSuitcase = (point) => {
    const box = suitcaseRef.current?.getBoundingClientRect()
    if (!box || !point) return false
    return point.x >= box.left && point.x <= box.right && point.y >= box.top && point.y <= box.bottom
  }

  // Live feedback while dragging a card across the suitcase.
  const handleDrag = (info) => setIsOver(overSuitcase(info.point))

  // When a card is dropped over the suitcase, pack it.
  const handleDragEnd = (id, info) => {
    if (overSuitcase(info.point)) pack(id)
    setIsOver(false)
  }

  const remaining = takeaways.filter((t) => !isPacked(t.id))
  const allPacked = remaining.length === 0

  return (
    <section className="section takeaways" id="takeaways" aria-label="Things I'm taking with me">
      <div className="container">
        <p className="eyebrow">The time capsule</p>
        <h2 className="section-title">Things I’m taking with me.</h2>
        <p className="section-sub">
          Drag each card into the suitcase — or press <kbd>Enter</kbd> on one to pack it.
        </p>

        <div className="pack-area">
          {allPacked && <SparkleBurst />}
          <div className="cards-tray" aria-label="Lessons and values to pack">
            <AnimatePresence>
              {remaining.map((t) => (
                <motion.button
                  key={t.id}
                  layout
                  className="take-card"
                  drag
                  dragSnapToOrigin
                  dragElastic={0.35}
                  whileDrag={{ scale: 1.08, zIndex: 5, cursor: 'grabbing' }}
                  onDrag={(e, info) => handleDrag(info)}
                  onDragEnd={(e, info) => handleDragEnd(t.id, info)}
                  onClick={() => pack(t.id)}
                  aria-label={`${t.label}. Pack into suitcase.`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="take-icon" aria-hidden="true">
                    {t.icon}
                  </span>
                  <span className="take-label">{t.label}</span>
                </motion.button>
              ))}
            </AnimatePresence>
            {allPacked && (
              <motion.p
                className="tray-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Packed and ready. On to the next chapter. ✨
              </motion.p>
            )}
          </div>

          <motion.div
            ref={suitcaseRef}
            className={`suitcase ${packed.length ? 'has-items' : ''} ${isOver ? 'is-over' : ''}`}
            animate={packed.length ? { scale: [1, 1.03, 1] } : {}}
            transition={{ duration: 0.35 }}
            aria-label="Suitcase"
          >
            <div className="suitcase-handle" aria-hidden="true" />
            <div className="suitcase-body">
              <span className="suitcase-corner tl" aria-hidden="true" />
              <span className="suitcase-corner tr" aria-hidden="true" />
              <span className="suitcase-corner bl" aria-hidden="true" />
              <span className="suitcase-corner br" aria-hidden="true" />
              <span className="suitcase-hint" aria-hidden="true">
                {packed.length ? '' : isOver ? 'Release to pack' : 'Drop here'}
              </span>
              <div className="packed-items">
                <AnimatePresence>
                  {packed.map((id) => {
                    const t = takeaways.find((x) => x.id === id)
                    return (
                      <motion.button
                        key={id}
                        layout
                        className="packed-chip"
                        onClick={() => toggle(id)}
                        aria-label={`${t.label} is packed. Remove from suitcase.`}
                        initial={{ opacity: 0, scale: 0.4, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        title="Click to unpack"
                      >
                        <span aria-hidden="true">{t.icon}</span> {t.label}
                      </motion.button>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// A one-shot radial burst of sparkles for the "all packed" moment.
function SparkleBurst() {
  const bits = Array.from({ length: 18 }, (_, i) => {
    const angle = (i / 18) * Math.PI * 2
    const dist = 60 + Math.random() * 70
    return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, delay: Math.random() * 0.2 }
  })
  return (
    <div className="sparkle-burst" aria-hidden="true">
      {bits.map((b, i) => (
        <motion.span
          key={i}
          className="sparkle"
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: b.x, y: b.y, opacity: 0, scale: 0.2 }}
          transition={{ duration: 1.1, delay: b.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

