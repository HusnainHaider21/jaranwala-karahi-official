export default function Navbar({ name, phone }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 md:px-12 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-orange-600 tracking-tight">{name}</h1>
      <a 
        href={`https://wa.me/${phone}`}
        target="_blank"
        className="bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
      >
        WhatsApp
      </a>
    </nav>
  )
}