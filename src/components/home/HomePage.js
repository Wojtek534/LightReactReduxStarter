import React from 'react';
// import components
import IntroSection from './presentation/IntroSection';

class HomePage extends React.Component {
  render()
  {
    return (
      <div id="home">
        <div className="page-section">
          <div className="col-md-4">
            <div className="section">
              <div className="container">
                sample text
              </div>
              <div className="container">
                2nd sample
              </div>
            </div>
          </div>
        </div>
        <IntroSection/>
      </div>
    )
  }
}
export default HomePage;
