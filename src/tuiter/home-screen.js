import React from "react";
import TuitList from "./tuits/TuitsList";
import WhatsHappening from "./whats-happening";

function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <WhatsHappening/>
      <TuitList/>
    </div>
  )
 }
 export default HomeScreen;