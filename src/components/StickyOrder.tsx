import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

export function StickyOrder() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="flex items-center gap-2.5 bg-stone-900 hover:bg-amber-400 text-white hover:text-stone-900 font-semibold text-sm px-5 py-3.5 rounded-full shadow-xl transition-all duration-300"
      >
        <Icon name="ShoppingBag" size={16} />
        Заказать
      </a>
    </div>
  )
}
