import React, { useState } from "react";

const TrafficLight = () => {
    // useState
    const [active, setActive] = useState();

    //functions

    const handleColor= (color) => {
        setActive(color);
    };
   
    return (
        <main>
          <div className="p-box"></div>
          <div className="box-light">
            <div
              className={`red ${active == "red" ? "light-on" : ""}`}
              onClick={() => handleColor("red")}
            ></div>
            <div
              className={`yellow ${active == "yellow" ? "light-on" : ""}`}
              onClick={() => handleColor("yellow")}
            ></div>
            <div
              className={`green ${active == "green" ? "light-on" : ""}`}
              onClick={() => handleColor("green")}
            ></div>
          </div>
        </main>
      );
    };

export default TrafficLight;
