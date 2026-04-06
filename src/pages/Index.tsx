import { useState } from "react"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Catalog } from "../components/Catalog"
import { WhyUs } from "../components/WhyUs"
import { HowWeWork } from "../components/HowWeWork"
import { Philosophy } from "../components/Philosophy"
import { GalleryGrid } from "../components/GalleryGrid"
import { Reviews } from "../components/Reviews"
import { ForWhom } from "../components/ForWhom"
import { CustomProject } from "../components/CustomProject"
import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"
import { StickyOrder } from "../components/StickyOrder"

export default function Index() {
  const [cart, setCart] = useState<number[]>([])

  const handleToggleCart = (id: number) => {
    setCart((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Catalog cart={cart} onToggleCart={handleToggleCart} />
      <WhyUs />
      <HowWeWork />
      <Philosophy />
      <GalleryGrid />
      <Reviews />
      <ForWhom />
      <CustomProject />
      <FAQ />
      <Footer />
      <StickyOrder />
    </main>
  )
}
