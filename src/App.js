import './App.css';
import React from "react";
function App() {
      return (
          <div style={{
                display: 'flex'
          }}>
                <div class="Menu" style={{width: 236}}>
                      <h2>longo</h2>
                      <h6>AUTOPLAZA</h6>
                      <a href="Dashboard"><img src={'/iconDashboard.png'} alt={'icon'}/>&nbsp; Dashboard</a><br/><br/>
                      <p1>Car Pricing</p1> <br/><br/>
                      <a href="Request"><img src={'/PlusCircle.png'} alt={'icon'}/>&nbsp;Request</a><br/><br/>
                      <a href="Allocation"><img src={'/Union.png'} alt={'icon'}/>&nbsp;Allocation</a><br/><br/>
                      <a href="Pricing"><img src={'/Pricing.png'} alt={'icon'}/>&nbsp;Pricing</a><br/><br/>
                      <p1>Managment</p1><br/><br/>
                      <a href="User"><img src={'/User.png'} alt={'icon'}/>&nbsp; User </a><br/><br/>
                      <a href="Setting"><img src={'/Setting.png'} alt={'icon'}/>&nbsp; Setting</a>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: 'calc(100vw - 300px)', marginTop: 88, padding: 10}}>
                      <div class="Api" style={{display:"flex", justifyContent: 'space-between'}}>
                            <div><span>Pricing</span> &nbsp;<span style={{color:"#B840D6"}}> 169</span></div>
                            <div>Bid made &nbsp;<span style={{color:"#FC66FF"}}> 169</span></div>
                            <div>Estimating &nbsp;<span style={{color:"#FFBF14"}}> 24</span></div>
                            <div>Published &nbsp;<span style={{color:"#FFBF14"}}> 235 </span></div>
                            <div>Purchased &nbsp; <span style={{color:"#14C7FF"}}> 254 </span></div>
                            <div>Verified &nbsp; <span style={{color:"#909598"}}> 563 </span></div>
                            <div>Archived &nbsp; 563</div>
                      </div>
                      <div class="admin" style={{display:"flex", justifyContent: 'space-between',}}>
                            <div><img src={'/noti.png'} alt={'icon'}/></div>
                            <div><img src={'/member.png'} alt={'icon'}/></div>
                            <div>Admin</div>
                      </div>
                      <br/><br/>
                      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                  <h1>User List</h1>
                            </div>
                            <div>
                                  <button className="Add-User"> + ADD USER
                                  </button>
                            </div>
                      </div>
                      <table id="table">
                            <tr>
                                  <th>Name</th>
                                  <th style={{width: 450}}>Email</th>
                                  <th style={{width: 180}}>Destination country</th>
                                  <th>Role</th>
                            </tr>
                            <tr>
                                  <td>K D H</td>
                                  <td>KDH@Gmail.com</td>
                                  <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div><span>UK</span></div>
                                        <button><img src={'/country.png'} alt={'icon'}/></button>
                                  </td>
                                  <td>Sourcing manager</td>
                            </tr>
                            <tr>
                                  <td>Berglunds</td>
                                  <td>Christina</td>
                                  <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div><span>sweden</span></div>
                                        <button><img src={'/country.png'} alt={'icon'}/></button>
                                  </td>
                                  <td>main</td>
                            </tr>
                            <tr>
                                  <td>H D K</td>
                                  <td>Hdk@gmail.com</td>
                                  <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div><span>US</span></div>
                                        <button><img src={'/country.png'} alt={'icon'}/></button>
                                  </td>
                                  <td>SP</td>
                            </tr>
                      </table>
                </div>
          </div>
      );
}
export default App;
