import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] font-semibold'
      : 'text-white hover:text-green-400'

  return (
    <nav className="bg-gray-950 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-green-400">Nepal Premier League 🏏</h1>
      <div className="flex gap-6 items-center">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/teams" className={linkClass}>Teams</NavLink>
        <NavLink to="/matches" className={linkClass}>Matches</NavLink>
        <NavLink to="/tickets" className={linkClass}>Tickets</NavLink>
        <NavLink to="/points-table" className={linkClass}>Points Table</NavLink>
      </div>
    </nav>
  )
}

export default Navbar