import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    question: "Откуда вы и работаете ли с другими городами?",
    answer:
      "Мастерская РОДМА находится в Енакиево, ДНР. Мы отправляем изделия по всей России и СНГ транспортными компаниями. Доставка надёжно упакованных изделий — наш стандарт.",
  },
  {
    question: "Сколько времени занимает изготовление?",
    answer:
      "Срок зависит от сложности изделия. Стул или небольшой декор — от 2 до 4 недель. Кресло или стол — от 4 до 6 недель. Индивидуальные проекты обсуждаются отдельно. Мы всегда держим вас в курсе процесса.",
  },
  {
    question: "Можно ли заказать изделие по индивидуальным размерам?",
    answer:
      "Да, это наш основной формат работы. Мы адаптируем размеры, породу дерева, цвет покраски или отделку масло/воск под ваш проект. Присылайте референсы и параметры — сделаем расчёт.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Берёзовая фанера ФСФ и ФК высшего сорта, массив дуба, ясеня, берёзы. Покраска — профессиональная акриловая или масляная пропитка. Никаких ДСП и МДФ в несущих конструкциях.",
  },
  {
    question: "Есть ли у вас готовые изделия или только под заказ?",
    answer:
      "Бывают наличные позиции — уточняйте при обращении. Основной формат — изготовление под заказ, это позволяет выбрать материал и параметры. Напишите нам — расскажем, что есть сейчас.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Напишите нам — опишите, что хотите: функция изделия, примерные размеры, материал, цвет. Мы пришлём расчёт стоимости и сроки. Задаток — 50% от суммы, остаток — перед отправкой.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Icon
                  name="Plus"
                  size={24}
                  className={`text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
