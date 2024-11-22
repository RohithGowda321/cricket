import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <div className="cards-container">
        <div className="card card-2"></div>
      </div>
      <div className="live-feed">
        <iframe
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          height="520"
          src="https://cdn.crichdplays.ru/embed2.php?id=willow"
          name="iframe_a"
          scrolling="no"
          width="640"
          title="Live Feed"
        >
          Your Browser Does Not Support Iframe
        </iframe>
      </div>
    </div>
  );
};

export default App;
