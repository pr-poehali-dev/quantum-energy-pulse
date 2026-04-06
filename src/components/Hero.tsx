import { useEffect, useState, useRef } from "react"

const slides = [
  {
    image: "https://cdn.poehali.dev/files/06b26d33-421b-4009-8ab5-f306cdd3f91f.jpg",
    title: "Мебель рождённая из дерева",
    subtitle: "Параметрическое фрезерование · Ручная работа",
  },
  {
    image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bc30c011-3e69-4ee4-8162-b3480708cef6.jpg",
    title: "Декоративные панно",
    subtitle: "Арт-объекты для интерьера",
  },
  {
    image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/93572380-500f-4fe3-832d-60734b471a26.jpg",
    title: "Столы и журнальные столики",
    subtitle: "Стекло и дерево — баланс форм",
  },
  {
    image: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/b2cc2bff-f014-4db3-96e6-975d1874d116.jpg",
    title: "Кресла-качалки",
    subtitle: "Комфорт и эстетика в каждом изгибе",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    if (transitioning || index === current) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 400)
  }

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleDotClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    goTo(index)
    startTimer()
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-amber-300/80 mb-6">
          Мастерская параметрической мебели
        </p>
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.05] mb-6 text-balance transition-all duration-500 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          {slides[current].title}
        </h1>
        <p
          className={`text-lg md:text-xl text-white/70 mb-12 transition-all duration-500 delay-75 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          {slides[current].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalog"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 font-medium text-sm tracking-wide hover:bg-amber-200 transition-colors duration-300"
          >
            Смотреть каталог
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/60 text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-colors duration-300"
          >
            Заказать
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
