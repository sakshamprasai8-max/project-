import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Teams from '../pages/Teams'
import Matches from '../pages/Matches'
import Tickets from '../pages/Tickets'
import PointsTable from '../pages/PointsTable'

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/points-table" element={<PointsTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter