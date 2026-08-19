import { useState } from 'react'
import pointsTable from '../data/pointsTable'

const seasons = [2026, 2025, 2024]

function PointsTable() {
  const [selectedSeason, setSelectedSeason] = useState(2026)

  const seasonData = pointsTable[selectedSeason]
  const standings = [...seasonData.standings].sort((a, b) => b.points - a.points)
  const champion = seasonData.champion

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-950 to-blue-950 text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-300 mb-2 text-center">
        Points Table
      </h1>
      <p className="text-white/60 text-center mb-6">
        {selectedSeason === 2026
          ? 'Standings will update once the tournament begins'
          : `Final standings — NPL ${selectedSeason}`}
      </p>

      <div className="flex justify-center gap-3 mb-8">
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              selectedSeason === season
                ? 'bg-yellow-300 text-gray-950'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {season}
          </button>
        ))}
      </div>

      {champion && (
        <div
         className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg relative"
          style={{
            backgroundImage: seasonData.bannerImg ? `url(${seasonData.bannerImg})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black/50 p-12 flex items-center justify-center gap-6 min-h-[280px]">
            {champion.logo && (
              <img
                src={champion.logo}
                alt={champion.name}
                className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(253,224,71,0.6)]"
              />
            )}
            <div className="text-center">
              <p className="text-sm text-yellow-300 uppercase tracking-wide">
                {selectedSeason} Champions
              </p>
              <p className="text-2xl font-extrabold text-white">{champion.name}</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-yellow-300/30 text-yellow-300 text-sm uppercase">
              <th className="py-3 px-3">#</th>
              <th className="py-3 px-3">Team</th>
              <th className="py-3 px-3 text-center">P</th>
              <th className="py-3 px-3 text-center">W</th>
              <th className="py-3 px-3 text-center">L</th>
              <th className="py-3 px-3 text-center">NRR</th>
              <th className="py-3 px-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
            <tr
              key={team.id}
              className={`border-b border-white/10 hover:bg-white/5 transition ${
                champion && team.id === champion.id ? 'bg-yellow-300/10' : ''
              }`}
            >
                <td className="py-3 px-3 text-white/60">{index + 1}</td>
               <td className="py-3 px-3 flex items-center gap-3">
                  {team.logo && (
                    <img src={team.logo} alt={team.name} className="w-8 h-8 object-contain" />
                  )}
                  <span className={`font-semibold ${champion && team.id === champion.id ? 'text-yellow-300' : ''}`}>
                    {team.name}
                  </span>
                  {champion && team.id === champion.id && <span title="Champion">🏆</span>}
                </td>
                <td className="py-3 px-3 text-center">{team.played}</td>
                <td className="py-3 px-3 text-center">{team.won}</td>
                <td className="py-3 px-3 text-center">{team.lost}</td>
                <td className="py-3 px-3 text-center">{team.nrr.toFixed(2)}</td>
                <td className="py-3 px-3 text-center font-bold text-yellow-300">{team.points}</td>
              </tr>
            ))}
          </tbody>  
        </table>
      </div>
    </div>
  )
}

export default PointsTable