import { useState } from "react"

export function CustomProject() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setName("")
    setPhone("")
    setComment("")
  }

  return (
    <section id="contact" className="relative py-24 md:py-36 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bc30c011-3e69-4ee4-8162-b3480708cef6.jpg"
          alt="Деревянное панно фон"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-5">Индивидуальный заказ</p>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-5 text-balance">
            Создадим уникальное изделие под ваш интерьер
          </h2>
          <p className="text-white/60 text-lg">
            От идеи до готового решения — сопровождаем на каждом этапе
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Спасибо!</h3>
              <p className="text-white/70">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 951 846 62 04"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Опишите вашу идею</label>
                <textarea
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Кресло-качалка из берёзы, размер XL, натуральное масло..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/60 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-stone-900 font-semibold py-3.5 rounded-lg transition-colors duration-200 text-sm tracking-wide mt-2"
              >
                Рассчитать проект
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}