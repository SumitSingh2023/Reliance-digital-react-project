import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div position="relative">
      <button style={{position:"absolute",
          left:"0",
          top:"50%",
          width:"40px",
          height:"100px",
          background:"lightgrey",
          opacity:"0.9",
          cursor:"pointer",
          transform:"translateY(-50%)"}}   
          onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:"25px"}}/>
    </button>

    </div>
  )
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <button style={{position:"absolute",
  right:"0",
  top:"30%",
  width:"40px",
  height:"100px",
  background:"lightgrey",
  opacity:"0.9",
  cursor:"pointer",
  borderStyle:"none",
  transform:"translateY(-50%)"}}  onClick={onClick}> <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"25px"}}/></button>
};

const Offer = ()=>{
  return(
    <p style={{border:"1px solid green",borderRadius:"20px",color:"#006600",padding:"3px",fontSize:"10px",width:"100%",backgroundColor:"#e6ffe6",width:"45%",marginTop:"10px"}}>OFFERS AVAILABLE</p>
  )
}

export { SamplePrevArrow, SampleNextArrow };

// NewRangeAc.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/NewRangeAc.css"


const NewRangeAc = ({ Ac }) => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className='NewRangeAc'>

      <h2 style={{fontWeight:"bolder",
           margin:"0px 0px 24px",
           padding: "0px 10px 2px 0px",
           color: "black"}}>2024 New Range of ACs from Rs.22990* <span><button className='Ac-button'>View all</button></span></h2>

      <Slider {...settings} className='Ac-item'>
        {Ac.map((ac) => (
          <div key={ac.id} className='Ac-child-item'>

            <img src={ac.image} alt={ac.title} className='image' />

            <p className='title'>{ac.title}</p>

            <p 
              className='offerprice'>Offer Price: 
                {
                  <span 
                    style={{fontWeight:"700",
                    fontSize:"14px",
                    color:"black"}}
                  >{ac.OfferPrice}
                  </span>
                }
            </p>

            <p className='mrp'>MRP: {<s>{ac.mrp}</s>}</p>

            <p className='yousave'>You Save:{ ac.yousave}</p>

            <p className='offer'>{<Offer/>}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewRangeAc;
