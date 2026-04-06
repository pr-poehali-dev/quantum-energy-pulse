import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Параметрический дизайн",
    description:
      "Каждое изделие рождается из математической точности — слои фанеры или массива складываются в органичные формы, которые невозможно повторить традиционными методами.",
  },
  {
    title: "Ручная доводка",
    description:
      "После фрезерного станка каждое изделие проходит через руки мастера: шлифовка, сборка, финишная пропитка маслом или покраска — без компромиссов.",
  },
  {
    title: "Натуральное дерево",
    description:
      "Берёза, дуб, ясень — мы работаем только с проверенными породами. Фанера высшего сорта и массив без скрытых дефектов, выбранный вручную.",
  },
  {
    title: "Индивидуальный заказ",
    description:
      "Стандартных размеров нет — только ваши. Цвет, порода, габариты, комплектация адаптируются под интерьер и желание заказчика.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наша философия</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Дерево с
              <br />
              <HighlightedText>характером</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/files/29255f8c-3140-4b10-b9ff-8f68d3044328.jpg"
                alt="Параметрическое кресло из дерева — вид в интерьере"
                className="opacity-90 relative z-10 w-full rounded-sm object-cover aspect-[4/3]"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              РОДМА — мастерская из Енакиево. Мы создаём мебель и декор методом параметрического фрезерования: это когда форма рассчитывается на компьютере, а жизнь ей даёт мастер.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
