import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { hero, site } from '../data.js'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}
const rise = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 62,
  left: Math.random() * 100,
  size: Math.random() * 2.4 + 0.8,
  delay: Math.random() * 5,
  dur: Math.random() * 3 + 2,
}))

const TREES = Array.from({ length: 26 }, (_, i) => ({
  left: (i / 26) * 100 + (Math.random() * 3 - 1.5),
  height: 40 + Math.random() * 55,
  opacity: 0.85 + Math.random() * 0.15,
}))

const FIREFLIES = Array.from({ length: 14 }, () => ({
  left: Math.random() * 100,
  bottom: Math.random() * 34,
  dur: 4 + Math.random() * 4,
  delay: Math.random() * 6,
  dx: Math.random() * 30 - 15,
}))

export default function Hero() {
  const ref = useRef(null)

  // Scroll-based depth parallax.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yPlanet = useTransform(scrollYProgress, [0, 1], [0, 140])
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, 60])
  const yForest = useTransform(scrollYProgress, [0, 1], [0, -30])
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 120])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse parallax — one shared pointer signal, layers multiply it differently.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })

  const planetX = useTransform(sx, (v) => v * -24)
  const planetY = useTransform(sy, (v) => v * -14)
  const moonX = useTransform(sx, (v) => v * -14)
  const moonY = useTransform(sy, (v) => v * -8)
  const mtnFarX = useTransform(sx, (v) => v * -8)
  const mtnNearX = useTransform(sx, (v) => v * -16)
  const forestX = useTransform(sx, (v) => v * -26)

  const handleMouse = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }

  return (
    <header ref={ref} className="hero" aria-label="Introduction" onMouseMove={handleMouse}>
      <div className="hero-scene" aria-hidden="true">
        <div className="sky-gradient" />

        <div className="starfield">
          {STARS.map((s) => (
            <motion.span
              key={s.id}
              className="sky-star"
              style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
              animate={{ opacity: [0.1, 1, 0.1] }}
              transition={{ duration: s.dur, delay: s.delay, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Big planet */}
        <motion.div className="planet" style={{ y: yPlanet, x: planetX }}>
          <motion.div className="planet-inner" style={{ y: planetY }}>
            <div className="planet-glow" />
            <div className="planet-body" />
            <div className="planet-ring" />
          </motion.div>
        </motion.div>

        {/* Distant moon */}
        <motion.div className="moon" style={{ x: moonX, y: moonY }} />

        {/* Layered mountains */}
        <motion.svg
          className="layer mountains-far"
          style={{ y: yMountains, x: mtnFarX }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,320 L0,180 L220,90 L420,190 L640,80 L880,200 L1120,110 L1440,210 L1440,320 Z" />
        </motion.svg>
        <motion.svg
          className="layer mountains-near"
          style={{ y: yMountains, x: mtnNearX }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,320 L0,230 L180,150 L360,250 L560,150 L760,260 L980,170 L1200,250 L1440,190 L1440,320 Z" />
        </motion.svg>

        {/* Autumn forest */}
        <motion.div className="forest" style={{ y: yForest, x: forestX }}>
          <div className="forest-fog" />
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="forest-hills">
            <path d="M0,220 L0,120 Q360,40 720,110 T1440,90 L1440,220 Z" />
          </svg>
          <div className="trees">
            {TREES.map((t, i) => (
              <span
                key={i}
                className="tree"
                style={{ left: `${t.left}%`, height: `${t.height}px`, opacity: t.opacity }}
              />
            ))}
          </div>
        </motion.div>

        {/* Fireflies */}
        <div className="fireflies">
          {FIREFLIES.map((f, i) => (
            <motion.span
              key={i}
              className="firefly"
              style={{ left: `${f.left}%`, bottom: `${f.bottom}%` }}
              animate={{ y: [0, -30, 0], x: [0, f.dx, 0], opacity: [0, 1, 0] }}
              transition={{ duration: f.dur, delay: f.delay, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="hero-vignette" />
      </div>

      {/* Copy */}
      <motion.div
        className="hero-inner container"
        style={{ y: yCopy, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="eyebrow" variants={rise}>
          A farewell time capsule · {site.authorName}
        </motion.p>
        <motion.h1 className="hero-title" variants={rise}>
          Farewell <span className="gradient-text">Galaxy</span>
        </motion.h1>
        <motion.p className="hero-lede" variants={rise}>
          {hero.headline}
        </motion.p>
        <motion.div variants={rise}>
          <a className="btn btn-primary" href="#constellation">
            {hero.cta}
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
        <motion.p className="hero-signature" variants={rise}>
          {site.authorName} · {site.years}
        </motion.p>
      </motion.div>

      <motion.div
        className="hero-scroll"
        aria-hidden="true"
        style={{ opacity: fade }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span />
      </motion.div>
    </header>
  )
}
