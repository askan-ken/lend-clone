import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-days">
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Senin
        </button>
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Selasa
        </button>
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Rabu
        </button>
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Kamis
        </button>
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Jum'at
        </button>
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Sabtu
        </button>
        <button>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
          Minggu
        </button>
      </div>
      <div className="home-main">
        <div className="main-left">
          <div className="left-trending">
            <div className="trending-card">
              <div className="card-top">
                <div className="star">
                  <span class="material-symbols-outlined">star</span>
                  8.90
                </div>
                <h1><a href="">Benriya Saitou - San, Isekai Ni Iku</a></h1>
              </div>
              <div className="card-bot">
                <p>Isekai</p>
                <p>Summary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
