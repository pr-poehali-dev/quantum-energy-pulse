export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-5">
              <span className="font-serif tracking-widest text-2xl uppercase text-white">FORMA</span>
            </a>
            <p className="text-stone-400 leading-relaxed max-w-sm text-sm">
              Мастерская параметрической мебели и декора из натурального дерева. Каждое изделие создаётся вручную под индивидуальный заказ. Енакиево, ДНР.
            </p>
            <div className="flex gap-3 mt-6">
              {["Карта", "Счёт", "Договор"].map((method) => (
                <span key={method} className="text-xs bg-stone-800 text-stone-300 border border-stone-700 rounded px-3 py-1.5">
                  {method}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest text-stone-300">Навигация</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">Каталог</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="#how" className="hover:text-white transition-colors">Как работаем</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-widest text-stone-300">Контакты</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="tel:+79518466204" className="hover:text-white transition-colors">
                  +7 951 846 62 04
                </a>
              </li>
              <li>
                <a href="https://t.me/djgorbunov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @djgorbunov (Telegram)
                </a>
              </li>
              <li>
                <span className="text-stone-500">Енакиево, ДНР</span>
              </li>
              <li>
                <span className="text-stone-500">Отправляем по России и СНГ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-stone-500">
          <p>© 2026 FORMA. Все права защищены.</p>
          <a href="#" className="hover:text-stone-300 transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
