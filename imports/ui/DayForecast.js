import React, { Component } from 'react';
import './DayForecast.css';
export default class DayForecast extends Component {
  
  renderForecast(){
    const name = this.props.report.dayName;
    const minTemp = this.props.report.minTemp;
    const maxTemp = this.props.report.maxTemp;
    const status = this.props.report.status;
    var image = '';
    console.log("Nice Day");
    if(status == "Mostly sunny"){
       image = <img src="./sunny.png" className="card-img-top" alt="Sunny day"></img>
    }else if(status == "Nice day"){
      console.log("Nice Day");
      image = <img src="./sunny.png" className="card-img-top" alt="Nice day"></img>
    }else if(status == "Spring like"){
      image = <img src="./spring.png" className="card-img-top" alt="Spring day"></img>
    }else if(status == "Rain showers"){
      image = <img src="./rain-shower.png" className="card-img-top" alt="rain shower day"></img>
    }else if(status == "Warm pm shower"){
      image = <img src="./hot.png" className="card-img-top" alt="Warm day"></img>
    }else if(status == "Brigth colder"){
      image = <img src="./bright-colder.png" className="card-img-top" alt="bright colder day"></img>
    }else{
      image = <img src="./sunny.png" className="card-img-top" alt="Chilly day"></img>
    }

    return (
      <div className="card">
            {image}
            <div className="card-body">
              <h5>{name}</h5>
              <div className="row">
                <div className="col-6"><h6>Max temp:</h6></div>
                <div className="col-6">{maxTemp}</div>
              </div>
              <div className="row">
                <div className="col-6"><h6>Min temp:</h6></div>
                <div className="col-6">{minTemp}</div>
              </div>
            </div>
            
      </div>
    )
  }

  render() {
    return (
      <div className="col-sm">
        {this.renderForecast()}
      </div>
    );
  }
}