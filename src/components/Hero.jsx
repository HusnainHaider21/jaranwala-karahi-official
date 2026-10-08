export default function Hero({ title, subtitle, onOrder }) {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 px-6 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-xl">
          {title}
        </h2>
        <p className="text-white/80 text-lg md:text-xl mt-4 mb-8">{subtitle}</p>
        
        <div className="flex gap-4 justify-center">
          <button onClick={onOrder} className="bg-orange-600 hover:bg-orange-700 hover:-translate-y-1 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all duration-300 cursor-pointer">
            Order Karein
          </button>
          <a href="#menu" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold text-lg transition-all duration-300">
            Menu Dekhein
          </a>
        </div>
      </div>
    </div>
  )
}