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
import { CartDrawer } from "../components/CartDrawer"
import type { CartItem } from "../components/CartDrawer"

const allItems: CartItem[] = [
  { id: 1, name: "Кресло-качалка Волна", category: "Кресла", price: 45000, image: "https://cdn.poehali.dev/files/864989a2-a36a-4421-82ad-7bc86017db3f.jpg", material: "Берёза, чёрная покраска" },
  { id: 2, name: "Лаунж-кресло Спираль", category: "Кресла", price: 38000, image: "https://cdn.poehali.dev/files/29255f8c-3140-4b10-b9ff-8f68d3044328.jpg", material: "Фанера берёза, натуральный" },
  { id: 3, name: "Кресло-качалка Белая", category: "Кресла", price: 42000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/b2cc2bff-f014-4db3-96e6-975d1874d116.jpg", material: "Фанера, белая покраска" },
  { id: 4, name: "Лаунж-кресло Натур", category: "Кресла", price: 35000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/329cfef4-76b7-47ed-a919-63b526bec06f.jpg", material: "Берёза натуральная" },
  { id: 5, name: "S-кресло Изгиб", category: "Кресла", price: 41000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/e6f0ae7a-e812-4748-84b8-6dcb7fc2e353.jpg", material: "Берёза натуральная" },
  { id: 6, name: "Кресло руководителя", category: "Кресла", price: 65000, image: "https://cdn.poehali.dev/files/06b26d33-421b-4009-8ab5-f306cdd3f91f.jpg", material: "Берёза + чёрная кожа" },
  { id: 7, name: "Журнальный стол Акула", category: "Столы", price: 78000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/93572380-500f-4fe3-832d-60734b471a26.jpg", material: "Берёза + стекло" },
  { id: 8, name: "Панно Орнамент", category: "Декор", price: 25000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bc30c011-3e69-4ee4-8162-b3480708cef6.jpg", material: "Фанера, лазерная резка" },
  { id: 9, name: "Кресло-качалка Классик", category: "Кресла", price: 48000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/0ac0aaa4-cf7b-4727-a906-fa263f03972f.jpg", material: "Дерево, чёрная покраска" },
  { id: 10, name: "Кресло-качалка Дуга", category: "Кресла", price: 52000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/4244c604-4853-4b00-ac4d-36dbe9c69648.jpg", material: "Берёза + шнур" },
  { id: 11, name: "Рабочий стол Z-Form", category: "Столы", price: 55000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/58f17fb8-5608-481b-af12-2f53e5ebff47.jpg", material: "МДФ, белое + чёрная столешница" },
  { id: 12, name: "Скамья Рейки", category: "Столы", price: 18000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bd1ca32e-af04-416b-abee-591033c14311.jpg", material: "Фанера берёза, натуральный" },
]

export default function Index() {
  const [cartIds, setCartIds] = useState<number[]>([])

  const handleToggleCart = (id: number) => {
    setCartIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
  }

  const handleRemoveFromCart = (id: number) => {
    setCartIds((prev) => prev.filter((i) => i !== id))
  }

  const cartItems = allItems.filter((i) => cartIds.includes(i.id))

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Catalog items={allItems} cart={cartIds} onToggleCart={handleToggleCart} />
      <WhyUs />
      <HowWeWork />
      <Philosophy />
      <GalleryGrid />
      <Reviews />
      <ForWhom />
      <CustomProject />
      <FAQ />
      <Footer />
      <CartDrawer items={cartItems} onRemove={handleRemoveFromCart} />
    </main>
  )
}
