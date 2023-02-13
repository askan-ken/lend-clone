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
          Senin
        </button>
        <>
          <span class="material-symbols-outlined">check_box_outline_blank</span>
        <
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
    </div>
  );
};

export default Home;
