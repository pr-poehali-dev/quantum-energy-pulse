import { useState } from "react"
import Icon from "@/components/ui/icon"
import type { CartItem } from "./CartDrawer"

interface CatalogProps {
  items: CartItem[]
  cart: number[]
  onToggleCart: (id: number) => void
}

const categories = ["Все", "Кресла", "Столы", "Декор"]

function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽"
}

export function Catalog({ items, cart, onToggleCart }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState("Все")

  const filtered = activeCategory === "Все" ? items : items.filter((i) => i.category === activeCategory)

  return (
    <section id="catalog" className="py-20 md:py-28 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Наши работы</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Каталог</h2>
          </div>
          <p className="text-sm text-stone-500 max-w-xs text-right hidden md:block">
            Добавляйте в корзину — она появится справа внизу
          </p>
        </div>

        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const inCart = cart.includes(item.id)
            return (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="text-base font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.material}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{formatPrice(item.price)}</span>
                    <button
                      onClick={() => onToggleCart(item.id)}
                      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded transition-all duration-200 ${
                        inCart
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : "bg-stone-900 text-white hover:bg-stone-700"
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Icon name="Check" size={14} />
                          В корзине
                        </>
                      ) : (
                        <>
                          <Icon name="ShoppingCart" size={14} />
                          В корзину
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
