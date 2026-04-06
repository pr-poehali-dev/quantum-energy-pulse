import { useState } from "react"
import Icon from "@/components/ui/icon"

interface CatalogProps {
  cart: number[]
  onToggleCart: (id: number) => void
}

const catalogItems = [
  { id: 1, name: "Кресло-качалка Волна", category: "Кресла", price: 45000, image: "https://cdn.poehali.dev/files/864989a2-a36a-4421-82ad-7bc86017db3f.jpg", material: "Берёза, чёрная покраска" },
  { id: 2, name: "Лаунж-кресло Спираль", category: "Кресла", price: 38000, image: "https://cdn.poehali.dev/files/29255f8c-3140-4b10-b9ff-8f68d3044328.jpg", material: "Фанера берёза, натуральный" },
  { id: 3, name: "Кресло-качалка Белая", category: "Кресла", price: 42000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/b2cc2bff-f014-4db3-96e6-975d1874d116.jpg", material: "Фанера, белая покраска" },
  { id: 4, name: "Лаунж-кресло Натур", category: "Кресла", price: 35000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/329cfef4-76b7-47ed-a919-63b526bec06f.jpg", material: "Берёза натуральная" },
  { id: 5, name: "S-кресло Изгиб", category: "Кресла", price: 41000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/e6f0ae7a-e812-4748-84b8-6dcb7fc2e353.jpg", material: "Берёза натуральная" },
  { id: 6, name: "Кресло руководителя", category: "Кресла", price: 65000, image: "https://cdn.poehali.dev/files/06b26d33-421b-4009-8ab5-f306cdd3f91f.jpg", material: "Берёза + чёрная кожа" },
  { id: 7, name: "Журнальный стол Акула", category: "Столы", price: 78000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/93572380-500f-4fe3-832d-60734b471a26.jpg", material: "Берёза + стекло" },
  { id: 8, name: "Панно Орнамент", category: "Декор", price: 25000, image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bc30c011-3e69-4ee4-8162-b3480708cef6.jpg", material: "Фанера, лазерная резка" },
]

const categories = ["Все", "Кресла", "Столы", "Декор"]

function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU").replace(/,/g, " ") + " ₽"
}

export function Catalog({ cart, onToggleCart }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState("Все")

  const filtered = activeCategory === "Все" ? catalogItems : catalogItems.filter((i) => i.category === activeCategory)

  return (
    <section id="catalog" className="py-20 md:py-28 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Наши работы</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Каталог</h2>
          </div>

          {cart.length > 0 && (
            <div className="flex items-center gap-4 bg-white border border-stone-200 rounded-lg px-5 py-3 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-stone-700">
                <Icon name="ShoppingBag" size={16} />
                <span>Корзина: <strong>{cart.length}</strong> {cart.length === 1 ? "товар" : cart.length < 5 ? "товара" : "товаров"}</span>
              </div>
              <a
                href="#contact"
                className="text-sm font-medium bg-stone-900 text-white px-4 py-2 rounded hover:bg-stone-700 transition-colors"
              >
                Оформить заявку
              </a>
            </div>
          )}
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
