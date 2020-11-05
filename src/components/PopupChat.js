import React, { Component } from "react";
import "../PopupChat.css";
import axios from "axios";

class PopupChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        }
    }

    componentDidMount() {
        axios.get("https://panorbit.in/api/users.json").then((response) => {
            const userDataList = response.data.users;
            // console.log(userDataList);
            this.setState({
                userData: userDataList
            })
        })
    }

    render() {
        // console.log(this.state.userData);
        const { userData } = this.state;
        const userGrid = this.state.userData.map((user, index) => {
            return (
                <div key={index} style={{ height: "50px", marginTop: "10px", marginLeft: "10px" }}>
                    <div className="a_tag">
                        <img src={user.profilepicture} alt="User Avatar" style={{ width: "28px", height: "28px", float: "left", marginLeft: "10px", marginRight: "10px" }} /> 
                        <p onClick={console.log(user)} style={{ color: "#545454", fontSize: "14px", textAlign: "left", padding: "5px" }}>{user.name}</p>
                    </div>
                </div>
            )
        })
        console.log(userGrid);
        // const id = this.props.profileId;
        // const data = this.props.userdata[id - 1];
        return (
            
            <div className="chat__container">
                <div className="chat__mainbody">
                    <div className="chat__top">
                        <span className="chat__tile" style={{color: "white"}}>
                            <p>Chats</p>
                        </span>
                    </div>
                    <div className="chat__bottom">
                        <div className="chat__user__grid">
                            {userGrid}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupChat;
