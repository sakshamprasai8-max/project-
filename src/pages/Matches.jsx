import { useState, useEffect } from 'react'

const KICKOFF_DATE = new Date('2026-10-28T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = KICKOFF_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    started: false,
  }
}

function Matches() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-950 to-blue-950 text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-300 mb-2 text-center">
        Matches
      </h1>
      <p className="text-white/70 text-center mb-10">
        {timeLeft.started
          ? "The tournament has kicked off! 🏏"
          : "Countdown to Kickoff — October 28, 2026"}
      </p>

      {!timeLeft.started && (
        <div className="flex justify-center gap-4 mb-16">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-white/5 border border-yellow-300/20 rounded-xl px-6 py-4 text-center min-w-[90px]"
            >
              <p className="text-4xl font-extrabold text-yellow-300">
                {String(unit.value).padStart(2, '0')}
              </p>
              <p className="text-sm text-white/60 mt-1">{unit.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Fixtures</h2>
        <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
          <p className="text-white/70">
            Match fixtures will be announced closer to the tournament. Check back soon!
          </p>
          <p className="text-yellow-300 font-semibold mt-3">Status: TBD</p>
        </div>
      </div>
    </div>
  )
}

export default Matches