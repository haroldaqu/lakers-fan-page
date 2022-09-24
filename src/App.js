import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Roster from './pages/roster/Roster';
import Schedule from './pages/schedule/Schedule';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState(null)
  const [profile, setProfile] = useState(null)
  const [schedule, setSchedule] = useState(null)
  const [boxScore, setBoxScore] = useState(null)

  // const totalDaysInSeason = [...Array(211).keys()].map(x => { return {homeStartDate: x + 20211001} })

  const statsDataHandle = async (id) => {
    try {
      const response = await fetch(`https://data.nba.net/data/10s/prod/v1/2021/players/${id}_profile.json`)
      const data = await response.json()
      setData(data.league.standard.stats)
    } catch (error) {
      console.log(error)
    }
  }

  const profileDataHandle = async (id) => {
    try {
      const response = await fetch(`https://data.nba.net/data/10s/prod/v1/2021/players.json`)
      const data = await response.json()
      const profile = await data.league.standard.filter(player => player.teamId === id && player.firstName !== 'Mason')     
      setProfile(profile)
    } catch (error) {
      console.log(error)
    }
  }

  const scheduleDataHandle = async () => {
    try {
      const response = await fetch(`https://data.nba.net/data/10s/prod/v1/2021/teams/lakers/schedule.json`)
      const data = await response.json()
      setSchedule(data.league.standard)
    } catch (error) {
      console.log(error)
    }
  }

  const boxScoreDataHandle = async (date, id) => {
    try {
      const response = await fetch(`https://data.nba.net/data/10s/prod/v1/${date}/${id}_mini_boxscore.json`)
      const data = await response.json()
      // console.log(data.basicGameData)
      setBoxScore(data.basicGameData)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    profileDataHandle('1610612747')
    scheduleDataHandle()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/roster' element={
            <Roster 
              data={ data }  
              profile={ profile } 
              statsDataHandle={statsDataHandle}/>
            }/>
          <Route path='/schedule' element={
            <Schedule  
              schedule={schedule} 
              boxScoreDataHandle={boxScoreDataHandle}
              boxScore={boxScore}
            />}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
