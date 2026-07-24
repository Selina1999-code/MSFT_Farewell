import { useMemo } from 'react'
import { motion } from 'framer-motion'

/*
 * Ambient, site-wide atmosphere:
 *  - two slowly drifting aurora blobs (coral + magenta)
 *  - a field of warm bokeh "embers" that float upward
 * Rendered once behind everything.
 */
export default function Background() {
  const embers = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 12,
        dur: Math.random() * 14 + 14,
        drift: (Math.random() - 0.5) * 60,
        warm: Math.random() > 0.4,
      })),
    []
  )

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />

      <div className="embers">
        {embers.map((e) => (
          <motion.span
            key={e.id}
            className="ember"
            style={{
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              background: e.warm
                ? 'radial-gradient(circle, rgba(247,217,160,0.95), rgba(240,144,78,0.2) 70%)'
                : 'radial-gradient(circle, rgba(212,107,179,0.9), rgba(212,107,179,0.1) 70%)',
            }}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{
              y: '-15vh',
              x: [0, e.drift, 0],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: e.dur,
              delay: e.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  )
}
