export default function MenuCard({ item, onOrder }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="overflow-hidden">
        <img src={item.image} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-orange-600 font-extrabold text-xl mt-1">Rs. {item.price}</p>
        <button 
          onClick={() => onOrder(item.name)}
          className="mt-4 w-full bg-black text-white py-2.5 rounded-full font-semibold group-hover:bg-orange-600 transition-colors duration-300 cursor-pointer"
        >
          Order on WhatsApp
        </button>
      </div>
    </div>
  )
}