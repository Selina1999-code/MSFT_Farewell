import { useState } from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../data.js'

export default function Timeline() {
  const [openYear, setOpenYear] = useState(timeline[0]?.year)

  return (
    <section className="section timeline" id="timeline" aria-label="Four-year timeline of lessons">
      <div className="container">
        <p className="eyebrow">Four years, in lessons</p>
        <h2 className="section-title">What each year quietly taught me.</h2>
        <p className="section-sub">Select a year to bring its lesson into focus.</p>

        <div className="timeline-track" role="tablist" aria-label="Years">
          {timeline.map((item, i) => {
            const isOpen = item.year === openYear
            return (
              <motion.div
                key={item.year}
                className={`tl-item ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <button
                  className="tl-marker"
                  role="tab"
                  aria-selected={isOpen}
                  aria-controls={`panel-${item.year}`}
                  id={`tab-${item.year}`}
                  onClick={() => setOpenYear(item.year)}
                >
                  <span className="tl-dot" aria-hidden="true" />
                  <span className="tl-year">{item.year}</span>
                  {item.label && <span className="tl-label">{item.label}</span>}
                </button>

                <motion.div
                  id={`panel-${item.year}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${item.year}`}
                  className="tl-panel"
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="tl-lesson">
                    <span className="tl-quote" aria-hidden="true">
                      “
                    </span>
                    {item.lesson}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
