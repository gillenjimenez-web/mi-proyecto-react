import React, { useState } from 'react';

// Moví los datos fuera de la función para que el código sea más limpio y eficiente
const products = [
  { id: 1, name: 'Anillo Luna', price: 120000, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500' },
  { id: 2, name: 'Collar Estrella', price: 185000, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500' },
  { id: 3, name: 'Pendientes Flor', price: 95000, image: 'https://images.unsplash.com/photo-1630030532634-217016db99d3?w=500' },
  { id: 4, name: 'Pulsera Zen', price: 150000, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500' },
];

function App() {
  const [cart, setCart] = useState([]);

  // Funciones de lógica
  const addToCart = (p) => setCart([...cart, p]);
  const remove = (idx) => setCart(cart.filter((_, i) => i !== idx));
  const total = cart.reduce((s, item) => s + item.price, 0);

  return (
    <div className="pb-20 md:pb-0 font-sans selection:bg-gray-200">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Usamos la clase font-title que definimos en el index.html */}
          <h1 className="font-title text-xl tracking-[0.3em] uppercase">Plata</h1>
          <nav className="hidden md:flex space-x-8 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="#products" className="hover:text-black transition-colors">Colección</a>
            <a href="#cart" className="hover:text-black transition-colors">Bolsa ({cart.length})</a>
          </nav>
        </div>
      </header>

      {/* Hero - Usamos la clase hero-bg definida en el <style> de index.html */}
      <section id="home" className="hero-bg h-[80vh] flex items-center justify-center pt-16 text-white text-center">
        <div className="bg-black/10 p-8 backdrop-blur-[2px]">
          <h2 className="font-title text-4xl md:text-5xl mb-6 tracking-[0.5em] uppercase">Elegancia Pura</h2>
          <p className="text-sm tracking-[0.2em] font-light uppercase">Joyas de autor en plata de ley</p>
        </div>
      </section>

      {/* Catálogo */}
      <section id="products" className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {products.map(p => (
            <div key={p.id} className="group text-center">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 border border-gray-100">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={p.name} 
                />
              </div>
              <h3 className="font-title text-[10px] tracking-widest uppercase mb-2">{p.name}</h3>
              <p className="text-xs font-light text-gray-500 mb-4">${p.price.toLocaleString()}</p>
              <button 
                onClick={() => addToCart(p)} 
                className="text-[9px] uppercase tracking-[0.2em] border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
              >
                Añadir
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Carrito */}
      <section id="cart" className="py-24 bg-gray-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="font-title text-xl mb-12 tracking-[0.4em] uppercase">Tu Bolsa</h2>
          {cart.length === 0 ? (
            <p className="text-[10px] uppercase tracking-widest text-gray-400">Tu bolsa está vacía</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between text-[10px] uppercase tracking-widest border-b border-gray-200 py-3">
                  <span>{item.name} — ${item.price.toLocaleString()}</span>
                  <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600">×</button>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-10">
            <p className="text-2xl font-light mb-8 text-gray-800">${total.toLocaleString()}</p>
            <button className="inline-block text-[10px] uppercase tracking-[0.3em] text-gray-900 relative pb-1 group overflow-hidden">
              Proceder al pago seguro
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-900 transform translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 py-4 flex justify-around z-50">
        <a href="#home" className="text-[8px] uppercase tracking-widest">Inicio</a>
        <a href="#products" className="text-[8px] uppercase tracking-widest text-gray-500">Joyas</a>
        <a href="#cart" className="text-[8px] uppercase tracking-widest text-black font-bold">Bolsa ({cart.length})</a>
      </nav>
    </div>
  );
}

export default App;