import React from 'react'
import "../styles/TopDealsMobile.css"
import { Link } from 'react-router-dom'

const TopDealsMobile = () => {

  return (
    <div className='mainMobileDeal'>
        <h2 
           style={{fontWeight:"bolder",
           margin:"0px 0px 24px",
           padding: "0px 10px 2px 0px",
           color: "black"
           }}>
            Top Deals on Mobiles
        </h2>
        <div className='MobileDealPic'>
            
                <div className="mobileCard">
                    <img  src="https://www.reliancedigital.in/medias/Samsung-M14-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MDkwOXxpbWFnZS9qcGVnfGltYWdlcy9oMmMvaDZjLzEwMTE1MjA2ODA3NTgyLmpwZ3xmMTkwOTE5YWFjYmQ1ODJmYzhhMDIwOWIyZTA4MDkwZGEwY2U2MjQwNjcwZmEyYzk4MzI5MzI4N2UzM2U4ZDU3" alt="mobile" />
                </div>
                <div className="mobileCard">
                    <img src="https://www.reliancedigital.in/medias/Redmi-A2-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1MDU3NHxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDU4LzEwMTE0Njk4MjQ4MjIyLmpwZ3xiMGFlZWQwZTgyNTg2YTIxN2ZiNWM5MjZhNDFlM2E3YjEwZDRhMWI2OGFiOGNjOTA4MzcxNDk3ZTQzMWIyYjYw" alt="mobile" />
                </div>
                <div className="mobileCard">
                    <img src="https://www.reliancedigital.in/medias/Realme-C55-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w1NTM4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2YvaDIzLzEwMTE0Njk4MzEzNzU4LmpwZ3xhMmFmOTY2NjIwMWM2MDg2MzJjYTkzMTQ3N2VmMWJlMGQyMmExY2Y0MzEzZjE4NTRhZTNjYmFmMTYxYjRjMmU3" alt="mobile" />
                </div>
                <div className="mobileCard">
                    <img src="https://www.reliancedigital.in/medias/1-GDOE-Banners-340x255px.jpg?context=bWFzdGVyfGltYWdlc3w0NjA5NnxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaDA5LzEwMTEyOTIxNjY1NTY2LmpwZ3wwZDU3ZjA4MzIwNjA2MGNhMzRiMzQ5YTVkYTM2NDZiNjEzNWZiYjBkZjU2NzA4MTk5NjBlMzc4MmQzN2M3NzU3" alt="mobile" />
                </div>
            
        </div>
    </div>
  )
}

export default TopDealsMobile