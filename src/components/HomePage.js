import React, { Component } from "react";
import axios from "axios";
import "../App.css"
import { Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        }

    }

    componentDidMount() {
        axios.get("https://panorbit.in/api/users.json").then((response) => {
            const userDataList = response.data.users;
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
                <div>
                    <div key={index} style={{ height: "50px", marginTop: "10px" }}>
                        <Link to={{ pathname: `/profile/${user.id}`, state: { profileData: userData }, }} className="a_tag">
                            <img src={user.profilepicture} alt="User Avatar" style={{ width: "35px", height: "35px", float: "left", objectFit: "cover" }} />
                            <p style={{ paddingLeft: "10%", paddingTop: "10px" }}>{user.name}</p>
                        </Link>
                    </div>
                    <hr style={{borderTop: "1px solid #d3d4d8", width: "100%", marginLeft: "0px"}}/>
                </div>
            )
        })
        return (
            <div className="App">
                <div className="user">
                    <div className="userTop">
                        <span className="userTitle">
                            <p>Selettct An Account</p>
                        </span>
                    </div>
                    <div className="userBottom">
                        <div className="userGrid">
                            {userGrid}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;


