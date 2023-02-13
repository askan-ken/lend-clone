import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-days">
        <div className="home-day">
          <div className="home-day-text">
            <h1>Monday</h1>
          </div>
        </div>
        <div className="home-day">
          <div className="home-day-text">
            <h1>Tuesday</h1>
          </div>
        </div>
        <div className="home-day">
          <div className="home-day-text">
            <h1>Wednesday</h1>
          </div>
        </div>
        <div className="home-day">
          <div className="home-day-text">
            <h1>Thursday</h1>
          </div>
        </div>
        <div className="home-day">
          <div className="home-day-text">
            <h1>Friday</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home