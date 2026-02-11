function App() {
  const [count, setCount] = useState(0)

  return (
    // "bg-slate-900" pone un fondo azul oscuro casi negro
    // "min-h-screen" hace que el fondo cubra toda la pantalla
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4">
      
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>

      {/* Cambiamos el color del texto a amarillo con "text-yellow-400" */}
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">
        Vite + React
      </h1>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl text-center">
        {/* Un botón con fondo degradado de púrpura a azul */}
        <button 
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105"
          onClick={() => setCount((count) => count + 1)}
        >
          El contador es: {count}
        </button>
        
        <p className="mt-4 text-slate-400">
          Edita <code className="text-pink-400 font-mono">src/App.jsx</code> y guarda para ver los cambios.
        </p>
      </div>

      <p className="mt-8 text-sm text-slate-500 italic">
        Haz clic en los logos para aprender más.
      </p>
    </div>
  )
}