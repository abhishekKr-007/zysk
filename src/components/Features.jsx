import React from "react";
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Analytics that feels like it's from the future</h2>
      <div className="features__list">
        <div className="feature">
          <h3>Share team inboxes</h3>
          <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className="feature">
          <h3>Deliver instant answers</h3>
          <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>
        <div className="feature">
          <h3>Manage your team with reports</h3>
          <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
