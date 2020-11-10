'use strict';
import React from 'react'
import ImageSlide from './carousel/ImageSlide'
import Arrow from './carousel/Arrow'
import '../css/index.css'

export default class Carousel extends React.Component {

    constructor (props) {
            super(props);
            
            this.state = {
                currentImageIndex: 0
            };
            
            this.nextSlide = this.nextSlide.bind(this);
            this.previousSlide = this.previousSlide.bind(this);
        }
        
        previousSlide () {
            const lastIndex = this.state.currentImageIndex - 1;
           console.log(lastIndex);
                       const shouldResetIndex = this.state.currentImageIndex === 0;
            const index =  shouldResetIndex ? lastIndex : this.state.currentImageIndex - 1;
            
            this.setState({
                currentImageIndex: index
            });
        }
        
        nextSlide () {
                       console.log(this.props.projects.length);
             const shouldResetIndex = (this.state.currentImageIndex + 1) > (this.props.projects.length-1); 
            const index =  shouldResetIndex ? 0 : this.state.currentImageIndex + 1;
            console.log(index);
            this.setState({
                currentImageIndex: index
            });
        }
        
        render () {
            return (
                <div className="carousel">
                    <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
                    <ImageSlide project={ this.props.projects[this.state.currentImageIndex] } />
                    <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
                </div>
            );
        }
    

    
  }

