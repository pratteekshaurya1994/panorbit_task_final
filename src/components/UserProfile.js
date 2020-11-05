import React, { Component } from "react";
import "../UserProfile.css";
import Popup from "./Popup";
import PopupChat from "./PopupChat";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showChat: false,
      center: {
        lat: 25.574138,
        lng: 85.088848,
      },
      zoom: 11,
    };
  }

  // componentDidMount() {
  //   this.setState = ({
  //     lat: this.props.userdata[this.props.profileId].address.geo.lat
  //   })
  //   console.log(this.state.lat);
  // }

  render() {
    const { showModal } = this.state;
    const { showChat } = this.state;
    const id = this.props.profileId;
    const data = this.props.userdata[id - 1];
    return (
      <div className="maindiv">
        <div className="profile">
          <div className="profile__titlebar_left">
            <span className="profile__text">Profile</span>
          </div>
          <div className="profile__titlebar_right">
            <button
              className="profile__info"
              style={{ color: "#545454" }}
              onClick={() => this.setState({ showModal: !showModal })}
            >
              <img
                src={data.profilepicture}
                alt="user dp"
                style={{
                  width: "35px",
                  height: "35px",
                  marginRight: "10px",
                  objectFit: "cover",
                }}
              />
              <div className="profile__buttontext"> {data.name} </div>
            </button>
            {this.state.showModal ? (
              <Popup
                userdata={this.props.userdata}
                profileId={this.props.profileId}
              />
            ) : null}
          </div>
        </div>
        <div className="profile__detail">
          <div className="profile__detail__left">
            <div className="profile__basic__container profile__text__style">
              <div className="profile__image">
                <img
                  src={this.props.userdata[id - 1].profilepicture}
                  alt="Avatar"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="profile__displayname">
                <span className="profile__value">{this.props.userdata[id - 1].name}</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">Username&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].username}</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">E-mail&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].email}</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">Phone&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].phone}</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">Website&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].website}</span>
              </div>
            </div>
            <div className="profile__text__style">
              <div className="profile__displayname">
                <span className="profile__value">Company</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">Name&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].company.name}</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">catchPhrase&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].company.catchPhrase}</span>
              </div>
              <div className="profile__wrapper">
                <span className="profile__label">bs&nbsp;&nbsp;:{" "}</span>
                <span className="profile__value">{this.props.userdata[id - 1].company.bs}</span>
              </div>
            </div>
          </div>
          <div className="profile__detail__right profile__text__style">
            <div className="profile__address">Address&nbsp;:</div>
            <div className="profile__wrapper">
              <span className="profile__label">Street&nbsp;&nbsp;:{" "}</span>
              <span className="profile__value">{this.props.userdata[id - 1].address.street}</span>
            </div>
            <div className="profile__wrapper">
              <span className="profile__label">Suite&nbsp;&nbsp;:{" "}</span>
              <span className="profile__value">{this.props.userdata[id - 1].address.suite}</span>
            </div>
            <div className="profile__wrapper">
              <span className="profile__label">City&nbsp;&nbsp;:{" "}</span>
              <span className="profile__value">{this.props.userdata[id - 1].address.city}</span>
            </div>
            <div className="profile__wrapper">
              <span className="profile__label">Zipcode&nbsp;&nbsp;:{" "}</span>
              <span className="profile__value">{this.props.userdata[id - 1].address.zipcode}</span>
            </div>
            <div className="profile__map">
              <div style={{ height: "40vh", width: "100%" }} className="mapDiv">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyD8EW_cVK-yULSpfUixm818aMD9sqGdeZQ",
                  }}
                  defaultCenter={this.state.center}
                  defaultZoom={this.state.zoom}
                >
                  <AnyReactComponent
                    // lat={25.574138}
                    // lat={this.state.center.lat}
                    lat={this.props.userdata[id - 1].address.geo.lat}
                    lng={this.props.userdata[id - 1].address.geo.lng}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
            <div className="profile__direction">
              <div>
                <h6>
                  Lat: {this.props.userdata[id - 1].address.geo.lat}
                  &nbsp;&nbsp;Long:{" "}
                  {this.props.userdata[id - 1].address.geo.lng}
                </h6>
              </div>
            </div>
            <div className="chat__box">
              <button
                className="chat__head"
                onClick={() => this.setState({ showChat: !showChat })}
              >
                <span className="chat__head__text">Chats</span>
              {this.state.showChat ? <PopupChat /> : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;