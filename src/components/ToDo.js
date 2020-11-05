import React, { Component } from "react";
import "../profile.css";
import Popup from "./Popup";
import PopupChat from "./PopupChat";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showChat: false,
        }
    }

    render() {
        // const uid = this.props.match.params.profileId;
        const { showModal } = this.state;
        const { showChat } = this.state;
        const id = this.props.profileId;
        const data = this.props.userdata[id-1];
        return (
            <div className="maindiv">
                <div className="profile">
                    <div className="profile__titlebar_left">
                        <span className="profile__text">ToDo</span>
                    </div>
                    <div className="profile__titlebar_right">
                        <button className="profile__info" style={{ color: "#545454" }} onClick={() => this.setState({ showModal: !showModal })}>
                            <img src={data.profilepicture} alt="user dp" style={{ width: "35px", height: "35px", marginRight: "10px", objectFit: "cover" }} />
                            &nbsp;&nbsp;
                            <div className="profile__buttontext"> {data.name} </div>
                        </button>
                        {this.state.showModal ? (
                            <Popup userdata={this.props.userdata} profileId={this.props.profileId}/>
                        ) : null}
                    </div>
                </div>
                <hr style={{ width: "90%", marginTop: "32px" }} />
                <div className="coming_soon_text">
                    <p>COMING SOON</p>
                </div>
                <div className="chat__box">
                    <button className="chat__head" onClick={() => this.setState({ showChat: !showChat })}>
                        <span className="chat__head__text">Chats</span>
                        {this.state.showChat ? (
                            <PopupChat />
                        ) : null}
                    </button>
                </div>
            </div>
        )
    }
}

export default ToDo;