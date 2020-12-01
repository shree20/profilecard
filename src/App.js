import { useEffect } from "react";
import { barchart } from "./charts/horizontalbarchart";
import { linechart } from "./charts/linechart";

function App() {

useEffect(()=>{

  linechart()
  barchart()

}, [])

  return (
    <div className="row">
    
    <div className="content-section">

      <div data-username="piotrl" className="gh-profile-card">
        <div className="profile">
          <img src="/images/player.png" className="avatar" alt="" />

          <div>
            <p className="name">David Ford</p>
            <p className="location">Rye Golf Club (Old), UK</p>
          </div>

          <div className="row">
            <div className="column left border-right">
              <p className="columnheads">Quality</p>


              <div className="innerrow">
                <div className="column">
                  <p className="numbers">80 </p>
                </div>
                <div className="column left ">
                  <p className="arrows">&#x25B2;</p>
                </div>
                <div className="html column left">

                  <svg className="imgsvg" width="30" height="16" xmlns="http://www.w3.org/2000/svg">
                    <g>

                      <circle className="circle_animation" r="10" cy="1" cx="18" strokeWidth="3" stroke="#F43168"
                        fill="none"></circle>
                    </g>
                  </svg>
                </div>




              </div>
            </div>
            <div className="column middle border-right">
              <p className="columnheads">Handicap</p>
              <p className="numbers">PRO</p>
            </div>
            <div className="column right">
              <p className="columnheads">SG Total</p>

              <div className="innerrow">
                <div className="column">
                  <p className="numbers">4.14</p>
                </div>
                <div className="column left">
                  <p className="arrows">&#x25BC;</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="languages"></ul>
          <div id="barchart">
          </div>
          <ul className="languages">
            <li><span className="activity">Latest Activity:</span>
              <span className="Anumbers"> 68 (-4), The Shire, UK
              </span>
            </li>
          </ul>
          <ul className="languages"></ul>

          <div id="linechart" className="linediv">
          </div>
        </div>



      </div>
    </div>
  </div>
 
  );
}

export default App;
