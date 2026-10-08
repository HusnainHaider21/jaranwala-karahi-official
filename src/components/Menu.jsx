import MenuCard from "./MenuCard"
export default function Menu({ items, onOrder }) {
  return (
    <section id="menu" className="py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-4xl font-black text-center mb-10">Hamara Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map(item => <MenuCard key={item.id} item={item} onOrder={onOrder} />)}
      </div>
    </section>
  )
}