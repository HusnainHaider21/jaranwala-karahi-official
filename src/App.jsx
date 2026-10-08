import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Menu from "./components/Menu"

const restaurantData = {
  name: "Butt Karahi House",
  phone: "923001234567",
  heroTitle: "Jaranwala Ki Sab Se Mazedar Chicken Karahi",
  heroSubtitle: "30 Minute Me Garma Garam Free Delivery",
}

const menuItems = [
  { id: 1, name: "Chicken Karahi Full", price: 1800, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600" },
  { id: 2, name: "Chicken Biryani", price: 450, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600" },
  { id: 3, name: "Seekh Kabab", price: 600, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600" },
  { id: 4, name: "Malai Boti", price: 900, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600" },
  { id: 5, name: "Naan Roghni", price: 80, image: "https://plus.unsplash.com/premium_photo-1670263779073-d0b7a827d823?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Cold Drink", price: 120, image: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=600" },
];

function App() {
  const orderOnWhatsApp = (itemName) => {
    const msg = `Assalam-o-Alaikum! Mujhe ${itemName} order karna hai. Address: Rail Bazar, Jaranwala`;
    window.open(`https://wa.me/${restaurantData.phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="font-sans">
      <Navbar name={restaurantData.name} phone={restaurantData.phone} />
      <Hero title={restaurantData.heroTitle} subtitle={restaurantData.heroSubtitle} onOrder={() => orderOnWhatsApp("Full Menu")} />
      <Menu items={menuItems} onOrder={orderOnWhatsApp} />
      
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 {restaurantData.name} - {restaurantData.heroSubtitle}</p>
      </footer>
    </div>
  )
}
export default App