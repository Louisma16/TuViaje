import Alpaka from "/src/assets/images/alpaca.png";


function Login() {
  const touristImage = "https://images.rappi.com/web/travel/MX/2024/Vacas+last+minute/MX_BANNER_HOME_VACAS_mobile.png";
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${touristImage})` }}
        aria-label="Imagen de lugar turístico"
      />

      <div className="md:w-1/2 flex items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Iniciar sesión</h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="usuario" className="block text-sm font-medium text-slate-700">
                Usuario
              </label>
              <input
                id="usuario"
                name="usuario"
                type="text"
                placeholder="Escribe tu usuario"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="*******"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-1/2 rounded-lg bg-orange-600 text-white py-2 font-semibold hover:bg-orange-700 transition"
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                className="w-1/2 rounded-lg border border-orange-600 text-orange-600 py-2 font-semibold hover:bg-indigo-50 transition"
              >
                Registrarse
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <img src={Alpaka} alt="Alpaca" className="mx-auto h-32 rounded-lg object-cover" />
            <p className="mt-2 text-sm text-slate-500">Alpaca te da la bienvenida a TuViaje</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login