import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from './DayForecast.js';

 
class MonthForecast extends Component {

    
  renderDays() {
    return this.props.forecast.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row text-center bg-success">
          <div className="col-sm">
            Month Forecast by Day      
          </div>
        </div>
        <div className="row">
          {this.renderDays()}
        </div>
      </div>
    );
  }
}
  export default withTracker(() => {
    return {
      forecast: Forecast.find({}).fetch(),
    };
  })(MonthForecast);