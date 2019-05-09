import React, { Component } from 'react'
import Members from '../component/members/members'
import axios from 'axios'
import './membersContainer.css'

export default class PhotoContainer extends Component {
    state = {
        userData: [],
        hover: [false],
        opacity: "opacity:0;"
    }
    textHover = () => {
        this.setState({opacity:"opacity:1;"})
    }
    textHoverOff = () => {
        this.setState({opacity:"opacity:0;"})
    }
    componentWillMount() {
        axios.get("https://back.projectsago.com/post/api/users/")
        .then(res => {
            const userData = res.data
            this.setState({ userData })
            console.log(userData)
        })
    }
  render() {
    return (
      <div>
        <Members></Members>
        <div className="userGroup">
                {this.state.userData.map(data=>
                <div className="userCard">
                    <img className="userImg"src={data.image_thumbnail}alt="" />
                    <div className="hoverBox" width="500px" >
                        <p className="userData" >
                            {data.me}
                        </p>
                    </div>
                    <h1 className="nickName">
                        {data.nickname}
                    </h1>
                </div>)}
        </div>
      </div>
    )
  }
}
