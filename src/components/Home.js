import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from './Tracker';
import '../stylesheets/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracker: null,
    };
  }

  componentDidMount() {
    fetch('https://fierce-garden-46227.herokuapp.com/api/trackers/')
      .then((resp) => resp.json())
      .then((json) => this.setState({ tracker: json }));
  }

  render() {
    const { tracker } = this.state;

    return (
      <div className="home">
        <div className="holder">
          <div>
            <Link to="/Measurement">
              <i className="fas add-new fa-plus-circle" />
              <p className="new-track">New Measurement</p>
            </Link>
          </div>
          <div>
            <div className="circle">
              <div className="bp-fig">
                <p className="percentage">120</p>
                <p className="unit">mmHg</p>
              </div>
            </div>
            <p className="text">BP</p>
          </div>
          <div>
            <div className="circle-bg">
              <div className="bp-fig">
                <p className="percentage">12</p>
                <p className="unit">mmol/L</p>
              </div>
            </div>
            <p className="text">BG</p>
          </div>
        </div>

        <hr />
        <div>
          <h5 className="record">Health Record</h5>
          {tracker !== null && tracker.data.length > 0 ? (

            <div>
              {tracker.data.map((tracker) => (
                <Tracker tracker={tracker} key={tracker.id} />
              ))}

            </div>

          ) : (
            <p> Loading data...</p>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
