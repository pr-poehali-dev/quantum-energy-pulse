const reviews = [
  {
    text: "Заказали кресло-качалку — результат превзошёл ожидания. Качество потрясающее, доставили быстро и аккуратно.",
    name: "Марина К.",
    city: "Москва",
    stars: 5,
  },
  {
    text: "Сделали панно для ресторана — гости восхищаются. Мастера очень внимательны к деталям, всё по чертежам.",
    name: "Алексей В.",
    city: "Краснодар",
    stars: 5,
  },
  {
    text: "Офисные кресла под заказ — менеджеры довольны, дизайн выделяется. Работать с командой — одно удовольствие.",
    name: "Ольга П.",
    city: "Ростов-на-Дону",
    stars: 5,
  },
]

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Клиенты о нас</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-5">
              <div className="flex gap-1">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg leading-none">★</span>
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed text-[15px] flex-1">"{review.text}"</p>
              <div className="border-t border-stone-100 pt-4">
                <p className="font-semibold text-sm text-stone-900">{review.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{review.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
