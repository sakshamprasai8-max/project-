import { useState } from 'react'
import teams from '../data/teams'
import { Link } from 'react-router-dom'

function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(teams[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-950 to-blue-950 text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-300 mb-8 text-center">
        NPL Teams
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Cards grid */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {teams.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className={`bg-gradient-to-br ${team.color} rounded-xl p-4 text-left shadow-lg hover:scale-105 transition transform ${
                selectedTeam.id === team.id ? 'ring-4 ring-yellow-300' : ''
              }`}
            >
              {team.logo && (
                <img src={team.logo} alt={team.name} className="w-12 h-12 object-contain mb-2" />
              )}
              <p className="font-bold text-sm">{team.name}</p>
              <p className="text-xs text-white/70 mb-2">{team.region}</p>
              <Link
                to={`/teams/${team.id}/players`}
                onClick={(e) => e.stopPropagation()}
                className="text-xs underline text-yellow-200 hover:text-yellow-300"
              >
                View Players →
              </Link>
            </button>
          ))}
        </div>

        {/* Description panel */}
        <div className="bg-gray-900/70 rounded-xl p-8 shadow-2xl border border-yellow-300/20">
          <div className="flex items-center gap-4 mb-4">
            {selectedTeam.logo && (
              <img src={selectedTeam.logo} alt={selectedTeam.name} className="w-20 h-20 object-contain" />
            )}
            <h2 className="text-3xl font-bold text-yellow-300">{selectedTeam.name}</h2>
          </div>
          <p className="text-base text-white/60 mb-4">{selectedTeam.region}</p>
          <p className="text-lg mb-3">
            <span className="font-semibold text-yellow-300">Captain:</span> {selectedTeam.captain}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold text-yellow-300">Coach:</span> {selectedTeam.coach}
          </p>
          <p className="text-lg text-white/80 leading-relaxed">{selectedTeam.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Teams