import './App.css';
import React from "react";
function App() {
  return (
        <div class="Menu">
        <h2>longo</h2>
        <h6>AUTOPLAZA</h6>
        <p><img src={'/iconDashboard.png'} alt={'icon'}/>&nbsp;
        Dashboard</p>
        <p1>Car Pricing</p1><br/><br/>
        <p><img src={'/PlusCircle.png'} alt={'icon'}/>&nbsp;Request</p>
        <p><img src={'/Union.png'} alt={'icon'}/>&nbsp;Allocation</p>
        <p><img src={'/Pricing.png'} alt={'icon'}/>&nbsp;Pricing</p><br/><br/>

        <p1>Managment</p1>
        <p><img src={'/User.png'} alt={'icon'}/>&nbsp; User </p>
        <p><img src={'/Setting.png'} alt={'icon'}/>&nbsp; Setting</p>


    </div>
  );
}

export default App;
