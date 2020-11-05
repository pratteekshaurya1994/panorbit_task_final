import React, { Component } from "react";
import "../Popup.css";
import { Link } from "react-router-dom";

class Popup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const id = this.props.profileId;
    const data = this.props.userdata[id-1];
    const rand1 = Math.floor(Math.random() * 8 + 1);
    return (
      <div className="mainbody">
        <div className="mainbody__avatar">
          <img src={data.profilepicture} alt="Avatar" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
        </div>
        <div className="mainbody__name">
          <span className="mainbody__name__text">{data.name}</span>
        </div>
        <div className="mainbody__email">{data.email}</div>
        <hr style={{borderTop: "1px solid #d3d4d8", width: "200px", marginLeft: "50px"}}/>
        <div className="mainbody__friend1">
          <img src={this.props.userdata[rand1].profilepicture} alt="Avatar" style={{ width: "30px", height: "30px", marginTop:"5px" }} />
          &nbsp;&nbsp;
          <div className="mainbody__div1">{this.props.userdata[rand1].name}</div>
        </div>
        <hr style={{borderTop: "1px solid #d3d4d8", width: "200px", marginLeft: "50px"}}/>
        <div className="mainbody__friend2">
          <img src={this.props.userdata[rand1 + 1].profilepicture} alt="Avatar" style={{ width: "30px", height: "30px", marginTop:"5px" }} />
          &nbsp;&nbsp;
          <div className="mainbody__div2">{this.props.userdata[rand1 + 1].name}</div>
        </div>
        <div className="mainbody__signout">
          <div className="mainbody__button">
            <Link to="/" style={{ textDecoration: "none" }}>
              Signout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
