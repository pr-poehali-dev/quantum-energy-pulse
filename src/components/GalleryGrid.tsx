const images = [
  { src: "https://cdn.poehali.dev/files/864989a2-a36a-4421-82ad-7bc86017db3f.jpg", alt: "Кресло-качалка Волна чёрная" },
  { src: "https://cdn.poehali.dev/files/29255f8c-3140-4b10-b9ff-8f68d3044328.jpg", alt: "Лаунж-кресло Спираль натуральный" },
  { src: "https://cdn.poehali.dev/files/ef654d05-5ae9-41e8-aa92-fdbf266e2afa.jpg", alt: "Кресло тёмное дерево" },
  { src: "https://cdn.poehali.dev/files/06b26d33-421b-4009-8ab5-f306cdd3f91f.jpg", alt: "Кресло руководителя дерево и кожа" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bc30c011-3e69-4ee4-8162-b3480708cef6.jpg", alt: "Панно деревянное настенный декор" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/93572380-500f-4fe3-832d-60734b471a26.jpg", alt: "Журнальный стол стекло и дерево" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/b2cc2bff-f014-4db3-96e6-975d1874d116.jpg", alt: "Кресло-качалка белая" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/329cfef4-76b7-47ed-a919-63b526bec06f.jpg", alt: "Лаунж-кресло натуральный" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/e6f0ae7a-e812-4748-84b8-6dcb7fc2e353.jpg", alt: "S-кресло изгиб натуральный" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/0ac0aaa4-cf7b-4727-a906-fa263f03972f.jpg", alt: "Кресло-качалка классика чёрное" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/4244c604-4853-4b00-ac4d-36dbe9c69648.jpg", alt: "Кресло-качалка с дугой и шнуром" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/58f17fb8-5608-481b-af12-2f53e5ebff47.jpg", alt: "Рабочий стол Z-форма белый" },
  { src: "https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/bd1ca32e-af04-416b-abee-591033c14311.jpg", alt: "Деревянная скамья рейки" },
]

export function GalleryGrid() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Портфолио</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Реализованные проекты</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Смотреть
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}