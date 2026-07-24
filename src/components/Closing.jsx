import { motion } from 'framer-motion'
import { closing, site } from '../data.js'

export default function Closing() {
  return (
    <section className="section closing" id="closing" aria-label="A closing thank you">
      <div className="closing-stars" aria-hidden="true" />
      <motion.div
        className="container closing-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow closing-eyebrow">With gratitude</p>
        <h2 className="closing-message">{closing.message}</h2>

        <div className="closing-actions">
          <a
            className="btn btn-primary"
            href={site.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            Say hello by email
          </a>
        </div>

        <p className="closing-signoff">— with love, {site.authorName}</p>
      </motion.div>
    </section>
  )
}
