import { Link } from 'react-router-dom'
import trophyImg from '../assets/trophy.webp'
import ticketImg from '../assets/ticket.webp'
import pointsImg from '../assets/points.webp'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-2">
              Welcome to
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white-100 mb-4">
              Nepal Premier League 🏏
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
              Festival of the Himalayas — Nepal's biggest cricket carnival
            </p>
            <Link
              to="/matches"
              className="inline-block bg-emerald-500 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-emerald-400 transition"
            >
              View Fixtures
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <img src={trophyImg} alt="Nepal Premier League" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Tickets section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white-700 mb-4">
              Get Your Tickets
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Secure your seat and be part of the action live
            </p>
            <Link
              to="/tickets"
              className="inline-block bg-emerald-500 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-emerald-400 transition"
            >
              View Tickets
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <img src={ticketImg} alt="NPL Tickets" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Points table section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white-400 mb-4">
              Check the Standings
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              See how your favorite team is performing this season
            </p>
            <Link
              to="/points-table"
              className="inline-block bg-emerald-500 text-gray-950 font-bold px-6 py-3 rounded-full hover:bg-emerald-400 transition"
            >
              View Points Table
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <img src={pointsImg} alt="NPL Points Table" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home