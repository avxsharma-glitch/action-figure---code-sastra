"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const archiveFigures = [
  { image: "/images/archive-optimus-prime.png", name: "Optimus Prime", faction: "Autobot" },
  { image: "/images/archive-bumblebee.png", name: "Bumblebee", faction: "Autobot" },
  { image: "/images/archive-megatron.png", name: "Megatron", faction: "Decepticon" },
  { image: "/images/archive-starscream.png", name: "Starscream", faction: "Decepticon" },
  { image: "/images/archive-ironhide.png", name: "Ironhide", faction: "Autobot" },
  { image: "/images/archive-jazz.png", name: "Jazz", faction: "Autobot" },
  { image: "/images/archive-soundwave.png", name: "Soundwave", faction: "Decepticon" },
  { image: "/images/archive-shockwave.png", name: "Shockwave", faction: "Decepticon" },
  { image: "/images/archive-grimlock.png", name: "Grimlock", faction: "Autobot" },
  { image: "/images/archive-sideswipe.png", name: "Sideswipe", faction: "Autobot" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="characters" className="relative py-16 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#c1121f] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            THE ARCHIVE
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              BUILT FOR{" "}
            </motion.span>
            <motion.span
              className="text-[#c1121f] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              COLLECTORS
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {archiveFigures.map((figure) => (
            <motion.div
              key={figure.name}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                zIndex: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#1b1b1b] shadow-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={figure.image}
                  alt={`${figure.name} ${figure.faction} action figure`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="border-t border-white/10 px-2.5 py-2">
                <p className="text-xs font-black tracking-tight text-white">{figure.name}</p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#c1121f]">
                  {figure.faction}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#community"
            className="flex items-center gap-2 bg-[#c1121f] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Join the Community</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
