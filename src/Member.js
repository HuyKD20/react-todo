import './App.css';
import React from "react";
function App() {
        return (
            <div style={{
                display: 'flex'
            }}>
                <div className="Menu" style={{width: 236}}>
                    <h2>longo</h2>
                    <h6>AUTOPLAZA</h6>
                    <p><img src={'/iconDashboard.png'} alt={'icon'}/>&nbsp;
                        Dashboard</p>
                    <p1>Car Pricing</p1>
                    <br/><br/>
                    <p><img src={'/PlusCircle.png'} alt={'icon'}/>&nbsp;Request</p>
                    <p><img src={'/Union.png'} alt={'icon'}/>&nbsp;Allocation</p>
                    <p><img src={'/Pricing.png'} alt={'icon'}/>&nbsp;Pricing</p><br/><br/>
                    <p1>Managment</p1>
                    <p><img src={'/User.png'} alt={'icon'}/>&nbsp; User </p>
                    <p><img src={'/Setting.png'} alt={'icon'}/>&nbsp; Setting</p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'calc(100vw - 300px)',
                    marginTop: 88,
                    padding: 10
                }}>
                    <div className="Api" style={{display: "flex", justifyContent: 'space-between'}}>
                        <div><span>Pricing</span> &nbsp;<span style={{color: "#B840D6"}}> 169</span></div>
                        <div>Bid made &nbsp;<span style={{color: "#FC66FF"}}> 169</span></div>
                        <div>Estimating &nbsp;<span style={{color: "#FFBF14"}}> 24</span></div>
                        <div>Published &nbsp;<span style={{color: "#FFBF14"}}> 235 </span></div>
                        <div>Purchased &nbsp; <span style={{color: "#14C7FF"}}> 254 </span></div>
                        <div>Verified &nbsp; <span style={{color: "#909598"}}> 563 </span></div>
                        <div>Archived &nbsp; 563</div>
                    </div>
                <div className="Member" >
                    sadasd
                </div>
       )
}