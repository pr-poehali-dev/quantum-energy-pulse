import Icon from "@/components/ui/icon"

const reasons = [
  {
    icon: "Hammer",
    title: "Ручная работа",
    description: "Без массового производства — каждое изделие уникально",
  },
  {
    icon: "Ruler",
    title: "Индивидуальные размеры",
    description: "Адаптируем под любой проект и интерьер",
  },
  {
    icon: "Palette",
    title: "Подбор материалов",
    description: "Выбор породы, цвета, отделки — под ваш вкус",
  },
  {
    icon: "Clock",
    title: "До 15 рабочих дней",
    description: "Соблюдаем сроки и держим вас в курсе",
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description: "Карты, счёт, договор — как вам удобнее",
  },
  {
    icon: "Truck",
    title: "Доставка и монтаж",
    description: "Отправляем по России и СНГ, помогаем с установкой",
  },
]

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-amber-50/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Наши преимущества</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Почему выбирают нас</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-7"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mb-5">
                <Icon name={reason.icon} size={24} className="text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
