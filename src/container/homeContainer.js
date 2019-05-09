import React, { Component } from 'react'
import Header from '../component/header/header'
import axios from 'axios'
import './homeContainer.css'
import Swiper from 'react-id-swiper'

export default class Home extends Component {
  state = {
    persons: [],
  }
  componentDidMount() {
    axios.get('https://back.projectsago.com/post/api/home/')
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <div>
        <Header/>
        <Swiper {...params}>
            {this.state.persons.map(home => <img z-index='5' className='slide-image' alt='sibal' src={home.image} height="1000px"/> )}
        </Swiper>
      </div>
    )
  }
}

