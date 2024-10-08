import React, {Component} from 'react';
//import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactSlider from "react-slick";

import './Gallery.css'
import '../../style/style.css';
import * as Constant from '../../utils/constants.js'
class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state={
      activeSlide:0,
      maxSlide:0,
      settings:{
         dots: true,
         infinite: false,
         speed: 500,
         autoPlay:false,
         slidesToShow: 2,
         slidesToScroll: 1,
         initialSlide: 0,
         afterChange: current => this.setState({ activeSlide: current })
      }
    }

  }

  componentDidMount () {
    var x = window.matchMedia("(max-width: 767px)")
    var y = window.matchMedia("(max-width: 719px)")
    var z = window.matchMedia("(max-width: 479px)")
    var w = window.matchMedia("(max-width: 419px)")
      if(x.matches || y.matches || z.matches || w.matches){
        let settings = this.state.settings;
        settings.slidesToShow=1;
        settings.slidesToScroll=1;
        this.setState({settings:settings})
      }
      var totalProducts = this.props.items && this.props.items.length;
      var noOfSlide = 1
      if(totalProducts> this.state.settings.slidesToShow){
        totalProducts = totalProducts - this.state.settings.slidesToShow;
        noOfSlide = Math.ceil(totalProducts/this.state.settings.slidesToScroll);
      }
      this.setState({maxSlide:noOfSlide})

  }

  next=()=> {
    this.slider.slickNext();
  }
  previous=()=> {
    this.slider.slickPrev();
  }


render(){
  return(
    <div className="gallery-main-section">
      <div className="prev-next-btn">
       <button className="button" onClick={this.previous}>
         <img src={this.state.activeSlide===0 ?Constant.image_path.common + "arrow-left-black.png":Constant.image_path.common + "arrow-left-red.png"}
           alt="left"
         />
       </button>
       <button className="button" onClick={this.next}>
         <img src={this.state.activeSlide===this.state.maxSlide?Constant.image_path.common + "arrow-right-black.png":Constant.image_path.common + "arrow-right-red.png"}
           alt="left"
           />
       </button>
     </div>
        <ReactSlider ref={c => (this.slider = c)} {...this.state.settings}>
           {this.props.items && this.props.items.map((item, i)=>
                   <Row key={i}>
                       <Col className="gallery-width">
                         <div className="gallery-box">
                             <img src={Constant.image_path.gallery + item}
                              className="gallery-img"
                                alt="gallery" />
                         </div>
                       </Col>
                       </Row>

              )}
        </ReactSlider>
    </div>

  )
}
}
export default Gallery;
