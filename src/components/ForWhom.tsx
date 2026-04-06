import Icon from "@/components/ui/icon"

const audience = [
  {
    icon: "Home",
    title: "Частные клиенты",
    description: "Дома, квартиры, загородные резиденции",
  },
  {
    icon: "Building2",
    title: "Бизнес и офисы",
    description: "Переговорные, руководительские кресла, лаунж-зоны",
  },
  {
    icon: "Coffee",
    title: "Кафе и шоурумы",
    description: "Дизайнерская мебель, привлекающая гостей",
  },
  {
    icon: "Brush",
    title: "Дизайнеры и декораторы",
    description: "Воплощаем авторские концепции точно по ТЗ",
  },
]

export function ForWhom() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Аудитория</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Для кого мы работаем</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item) => (
            <div
              key={item.title}
              className="group bg-stone-50 hover:bg-stone-900 rounded-lg p-8 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 group-hover:bg-amber-400/20 rounded-lg mb-6 transition-colors duration-300">
                <Icon name={item.icon} size={24} className="text-amber-700 group-hover:text-amber-300 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground group-hover:text-stone-400 text-sm leading-relaxed transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
