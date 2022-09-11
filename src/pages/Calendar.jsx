import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../styles/modal.css'
import img1 from './happiness.png'
import img2 from './indifferent.png'
import img3 from './crying.png'
import img4 from './ffps (2).png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}
 function Calendarpg() {
  const [update,setupdate]=useState(0)
  const [value, onChange] = useState(new Date());

  const datesToAddContentTo = [12,14,16];

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return 'My content';
    }
  }
}
  return (
   
   <> <div className="cal">
    {/* <img className="cal" src={img4} /> */}
      <Calendar onChange={onChange} tileContent={tileContent} value={value} /> 
 
      </div><div>
              <Popup
                  trigger={<button className="button1"> How was your day today?</button>}
                  modal
                  nested
              >
                  {close => (
                      <div className="modal">
                          <button className="close" onClick={close}>
                              &times;
                          </button>
                          <div className="header"> Tell us more about how do You feel today?</div>
                          <div className="content">
                          </div>
                          <div className="actions">
                              <div>
                                  <img className="img1" alt='Happy' src={img1} />

                                  <img className="img1" alt='Mediocre' src={img2} />
                                  <img className="img1" alt='Sad' src={img3} />
                              </div>


                              <div>
                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(1);
                                          close();
                                      } }
                                  >
                                      Great
                                  </button>


                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(2);
                                          close();
                                      } }
                                  >
                                      Average
                                  </button>
                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(3);
                                          close();
                                      } }
                                  >
                                      Not Good
                                  </button>
                              </div>
                          </div>
                      </div>
                  )}
              </Popup>


          </div></>
  );



}
  

export default Calendarpg;
/*import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Product() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );

}
export default Product;*/