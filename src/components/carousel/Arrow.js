'use strict';
import React from 'react';
import '../../css/index.css'

export default class Arrow extends React.Component {
  

   
  render(){

      return (
    <div 
        className={ `slide-arrow ${this.props.direction}` } 
        onClick={ this.props.clickFunction }>
        { this.props.glyph } 
    </div>
);
 
  
  }
}


