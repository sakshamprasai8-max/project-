import { Link } from 'react-router-dom'
import trophyImg from '../assets/trophy.webp'
import ticketImg from '../assets/ticket.webp'

function Home() {
  return (
       <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-900 to-blue-950 text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-white/90 mb-2">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.6)] mb-4">
            Nepal Premier League 🏏
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            Festival of the Himalayas — Nepal's biggest cricket carnival
          </p>
          <Link
            to="/matches"
            className="inline-block bg-yellow-300 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            View Fixtures
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-300/30">
          <img
            src={trophyImg}
            alt="Nepal Premier League"
            className="w-full h-full object-cover"
          />
        </div>
                <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-yellow-300 mb-4">
            Get Your Tickets
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Secure your seat and be part of the action live
          </p>
          <Link
            to="/tickets"
            className="inline-block bg-yellow-300 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            View Tickets
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-300/30">
          <img
            src={ticketImg}
            alt="NPL Tickets"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
    

  )
}

export default Home