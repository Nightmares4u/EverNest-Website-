"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "framer-motion"

type CounterProps = {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function Counter({ to, suffix = "", prefix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [val, setVal] = useState(0)
  const [blurring, setBlurring] = useState(true)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
      onComplete: () => setBlurring(false),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span
      ref={ref}
      className="tabular-nums transition-all duration-500"
      style={{
        filter: blurring && inView ? "blur(6px)" : "blur(0)",
        opacity: inView ? 1 : 0,
      }}
    >
      {prefix}{val}{suffix}
    </span>
  )
}
