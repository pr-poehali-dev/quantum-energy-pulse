const steps = [
  {
    number: "01",
    title: "Заявка",
    description: "Пишете нам, описываете идею",
  },
  {
    number: "02",
    title: "Дизайн и 3D",
    description: "Подбираем форму, материал, визуализируем",
  },
  {
    number: "03",
    title: "Согласование",
    description: "Утверждаем макет и стоимость",
  },
  {
    number: "04",
    title: "Производство",
    description: "Фрезеруем, собираем, шлифуем вручную",
  },
  {
    number: "05",
    title: "Доставка",
    description: "Упаковываем и доставляем к вам",
  },
]

export function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-stone-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-4">Процесс</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Как мы работаем</h2>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute top-[28px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-stone-700 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border-2 border-amber-400 bg-stone-900 flex items-center justify-center mb-6 shrink-0">
                  <span className="text-amber-400 font-semibold text-sm">{step.number}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 bg-stone-900 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 font-semibold text-xs">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-stone-700 my-2" />
                )}
              </div>
              <div className={`pb-8 ${i === steps.length - 1 ? "" : ""}`}>
                <h3 className="text-base font-semibold mb-1 pt-2.5">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
