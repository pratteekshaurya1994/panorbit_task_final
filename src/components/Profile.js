import React, { Component } from "react";
import UserProfile from "./UserProfile";
import Post from "./Post";
import Gallery from "./Gallery";
import ToDo from "./ToDo";
import "../profile.css";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: [],
            profileId: "",

        }
    }

    static getDerivedStateFromProps(nextProps, state) {
        state.profileData = nextProps.location.state.profileData;
        return null;
    }

    selectedComponent = (e) => {
        e.preventDefault();
        
        this.setState({
            component: e.target.name,
        });
    };

    render() {

        let pageRender = null;
        switch (this.state.component) {
            case "profile":
                pageRender = <UserProfile userdata={this.state.profileData} profileId={this.props.match.params.profileId} />;
                break;
            case "post":
                pageRender = <Post userdata={this.state.profileData} profileId={this.props.match.params.profileId} />;
                break;
            case "gallery":
                pageRender = <Gallery userdata={this.state.profileData} profileId={this.props.match.params.profileId} />;
                break;
            case "todo":
                pageRender = <ToDo userdata={this.state.profileData} profileId={this.props.match.params.profileId} />;
                break;
            default:
                pageRender = <UserProfile userdata={this.state.profileData} profileId={this.props.match.params.profileId} />;
        }
    
        return (
            <div className="profile">
                {/* for sidebar*/}
                <div className="profile__sidebar">
                    <button
                        className="profile__firstoption sidebar_common" name="profile" onClick={this.selectedComponent}> Profile </button>
                    <button
                        className="profile__secondoption sidebar_common" name="post" onClick={this.selectedComponent}>Post</button>
                    <button
                        className="profile__thirdoption sidebar_common" name="gallery" onClick={this.selectedComponent}>Gallery</button>
                    <button
                        className="profile__fourthoption sidebar_common" name="todo" onClick={this.selectedComponent}>ToDo</button>
                </div>

                {/* for middle sec */}
                <div className="profile__name">{pageRender}</div>
            </div>
        )
    }
}

export default Profile;