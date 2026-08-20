import { useParams, Link } from 'react-router-dom'
import teams from '../data/teams'

function TeamPlayers() {
  const { id } = useParams()
  const team = teams.find((t) => t.id === Number(id))

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>Team not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white p-8">
      <Link to="/teams" className="text-emerald-400 hover:underline mb-6 inline-block">
        ← Back to Teams
      </Link>

      <div className="flex items-center gap-4 mb-8">
        {team.logo && (
          <img src={team.logo} alt={team.name} className="w-16 h-16 object-contain" />
        )}
        <h1 className="text-4xl font-bold text-emerald-400">{team.name} — Players</h1>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl">
        {team.players.map((player, index) => (
          <li key={index} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200">
            {player}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamPlayers