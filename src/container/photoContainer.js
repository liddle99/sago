    import React, { Component } from 'react'
    import axios from 'axios'
    import Photo from './../component/photo/photo'
    import Header from './../component/header/header'
    import './photoContainer.css'

    export default class PhotoContainer extends Component { 
        state = {
            images: []
        }
        componentDidMount = () => {
            window.addEventListener('scroll', this.handleOnScroll)
        }
        componentWillUnmount = () => {
            window.removeEventListener('scroll', this.handleOnScroll)
        }
        componentWillMount() {
            
        axios.get('https://back.projectsago.com/post/api/all/')
        .then(res => {
            const images = res.data.results
                if(res !== null){   
                    this.setState({ images });
                }
                else{
                    console.log('fuck you sungyu')
                }
            })
        
        }

        
        handleOnScroll = async () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
            if (scrollHeight - innerHeight - scrollTop < 1) {
                axios.get('https://back.projectsago.com/post/api/all/?page=2')
                .then(res => {
                    const {images} = this.state
                    if(images.length < 12){
                    const newData = res.data.results
                    Object.keys(newData).map((res) => images.push(newData[res]))
                    if(res !== null){
                        this.setState({ images })
                    }
                    else{
                        console.log('object')
                    }
                }
                }) 
        }
    }

    render() {
        const {images} =this.state
        const list = Object.keys(images).map((res,index) => <Photo key={index} photo={images[res].photo_thumbnail}/>)
        return (
        <div>
            <Header/>
            <div className="scroll">
            {list}
            </div>
        </div>
        )
    }
}