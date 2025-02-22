"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const frames = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frame6-1%201-8ng0ilv6qoJnEvCfEspzGEmgs0lfjz.svg", // Frame 6
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207-D1H9QvUrzJX0vIBQwGzCKDAQqni3Sd.svg", // Frame 7
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%208-2FhbK8x2YPLTDiXngpqrnEb70CKTQY.svg", // Frame 8
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%209-CxpxxWvU0t8As4DvWmqkG3uOmil1GI.svg", // Frame 9
]

export default function WalkingAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length)
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const nextFrame = (currentFrame + 1) % frames.length

  return (
    <div className="relative w-full h-[300px] overflow-hidden" style={{ backgroundColor: "#FC0300" }}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-[30%] -translate-y-1/2" // top-1/2 から top-[30%] に変更
      >
        <div className="relative w-[200px] h-[200px]">
          <img
            key={`current-${frames[currentFrame]}`}
            src={frames[currentFrame] || "/placeholder.svg"}
            alt={`Walking frame ${currentFrame + 6}`}
            className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300"
            style={{
              opacity: 1,
              isolation: "isolate",
            }}
          />
          <img
            key={`next-${frames[nextFrame]}`}
            src={frames[nextFrame] || "/placeholder.svg"}
            alt={`Walking frame ${nextFrame + 6}`}
            className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300"
            style={{
              opacity: 0.2,
              isolation: "isolate",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

