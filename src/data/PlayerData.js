import { useEffect, useState } from "react"

const StatsDataHandle = (id) => {
  const [stats, setStats] = useState(null)

  useEffect( () => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`https://data.nba.net/data/10s/prod/v1/2021/players/${id}_profile.json`)
        const data = await response.json()
        setStats(data.league.standard.stats)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData(id)
  },[id])

  return { stats }
}

export default StatsDataHandle
