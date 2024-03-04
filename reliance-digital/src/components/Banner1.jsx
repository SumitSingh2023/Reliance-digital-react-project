import React from 'react'
import { Link } from 'react-router-dom'

const Banner1 = () => {
  return (
    <div>
        <Link to="./banner">
            <img style={{width:"100%",height:"205px",marginTop:"3px"}} src="https://www.reliancedigital.in/medias/Ajio-Coupon-Communication-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjMyMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2gzNy8xMDExNTYxMzE5NjMxOC5qcGd8MTYzOTAzOGFmN2Q0N2JiNGIxYTgzYThhZDcxMjU2OWE5MTAyN2UyZmJjYmRkN2MzZGM5NzhiNjllM2FmYTEyNg" alt="banner1" />
            
        </Link>

    </div>
  )
}

export default Banner1