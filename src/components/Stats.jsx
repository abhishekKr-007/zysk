import React from "react";
import './Stats.css';

function Stats() {
  return (
    <section className="stats">
      <div className="stats__title">
        <h2>Stats for Olivia Rhye</h2>
        <div className="stats__nav">
          <button>12 months</button>
          <button>30 days</button>
          <button>7 days</button>
        </div>
      </div>
      <div className="stats__chart">
        <img src="/path/to/graph.png" alt="Profile views" />
      </div>
      <div className="stats__fans">
        <h3>Biggest Fans</h3>
        <div className="fans__list">
          <div className="fan">Phoenix Baker - 24 likes</div>
          <div className="fan">Lana Steiner - 22 likes</div>
        </div>
      </div>
      <div className="stats__designers">
        <h3>Favorite Designers</h3>
        <div className="designers__list">
          <div className="designer">Andi Lane - 46 likes</div>
          <div className="designer">Kate Morrison - 40 likes</div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
