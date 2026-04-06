import { useState } from "react"
import Icon from "@/components/ui/icon"

export interface CartItem {
  id: number
  name: string
  price: number
  material: string
  image: string
  category: string
}

interface CartDrawerProps {
  items: CartItem[]
  onRemove: (id: number) => void
}

function formatPrice(p: number) {
  return p.toLocaleString("ru-RU") + " ₽"
}

export function CartDrawer({ items, onRemove }: CartDrawerProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const total = items.reduce((s, i) => s + i.price, 0)
  const count = items.length

  const handleSend = async () => {
    if (!name || !phone) return
    setSending(true)
    await fetch("https://functions.poehali.dev/4937b347-6bda-443f-ab0b-5e4f417f68c5", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, name, phone, comment, total }),
    })
    setSending(false)
    setSent(true)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-stone-900 hover:bg-amber-400 text-white hover:text-stone-900 font-semibold text-sm px-5 py-3.5 rounded-full shadow-xl transition-all duration-300 ${count === 0 ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"}`}
      >
        <Icon name="ShoppingCart" size={16} />
        Корзина
        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {count}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
              <div>
                <h2 className="text-lg font-semibold">Корзина</h2>
                <p className="text-sm text-stone-500">{count} {count === 1 ? "позиция" : count < 5 ? "позиции" : "позиций"}</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 hover:bg-stone-100 rounded-lg transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            {sent ? (
              <div className="flex-1 flex items-center justify-center p-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                  <p className="text-stone-500 text-sm">Мы свяжемся с вами по номеру {phone}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {items.length === 0 ? (
                    <p className="text-stone-400 text-center py-12">Корзина пуста</p>
                  ) : (
                    <>
                      <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-2">Коммерческое предложение</p>
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3 items-start border border-stone-100 rounded-lg p-3">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium leading-tight">{item.name}</p>
                            <p className="text-xs text-stone-400 mt-0.5">{item.material}</p>
                            <p className="text-sm font-semibold text-stone-900 mt-1">{formatPrice(item.price)}</p>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="p-1.5 hover:bg-stone-100 rounded transition-colors flex-shrink-0"
                          >
                            <Icon name="Trash2" size={14} className="text-stone-400" />
                          </button>
                        </div>
                      ))}

                      <div className="border-t border-stone-200 pt-4 mt-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-stone-500">Итого</span>
                          <span className="text-xl font-bold">{formatPrice(total)}</span>
                        </div>
                        <p className="text-xs text-stone-400">Окончательная стоимость уточняется при заказе</p>
                      </div>

                      <div className="border-t border-stone-100 pt-4 space-y-3">
                        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium">Ваши данные</p>
                        <input
                          type="text"
                          placeholder="Ваше имя *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                        <input
                          type="tel"
                          placeholder="Телефон *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                        <textarea
                          placeholder="Комментарий к заказу (необязательно)"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          rows={2}
                          className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                        />
                      </div>
                    </>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="px-6 py-5 border-t border-stone-100 space-y-3">
                    <button
                      onClick={handleSend}
                      disabled={sending || !name || !phone}
                      className="w-full bg-stone-900 hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <>
                          <Icon name="Loader2" size={16} className="animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={16} />
                          Отправить заявку
                        </>
                      )}
                    </button>

                    <button
                      disabled
                      className="w-full border-2 border-dashed border-amber-300 text-amber-700 bg-amber-50 font-semibold py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-70"
                    >
                      <Icon name="CreditCard" size={16} />
                      Оплатить через ЮКасса
                      <span className="text-xs bg-amber-200 px-2 py-0.5 rounded-full">скоро</span>
                    </button>

                    <p className="text-xs text-stone-400 text-center">
                      Нажимая «Отправить», вы соглашаетесь на обработку персональных данных
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
