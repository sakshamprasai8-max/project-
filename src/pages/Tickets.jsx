import stadiumImg from '../assets/stadium.webp'

function Tickets() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${stadiumImg})` }}
    >
      {/* dark overlay so text stays readable over the photo */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.6)] mb-4">
          Get Your Tickets
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Secure your seat and be part of the action live at the stadium
        </p>

        <a
          href="https://khalti.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold px-8 py-4 rounded-full transition shadow-lg"
        >
          Buy Your Ticket with Khalti
        </a>

        <p className="text-white/50 text-sm mt-6">
          You'll be redirected to Khalti to complete your purchase securely.
        </p>
      </div>
    </div>
  )
}

export default Tickets