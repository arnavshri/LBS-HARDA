import React from 'react'
import "../.././Style/LandingPage/Quotes.scss"

function Quotes() {
    return (
        <div className='quotes'>
            <h3 className='mt-2'>We empower and inspire students, staff, faculty and administration to succeed.</h3>
            <div className="groups">

            <div className="group">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648908480/Vector_ljv8ck.png" alt="Quest"/>
                <h3>Quest for Excellence</h3>
            </div>
            <div className="group">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648908480/Icon_qdtvun.png" alt="Quest"/>
                <h3>Hooked on Respect</h3>
            </div>
            <div className="group">
                <img src="https://res.cloudinary.com/lbs-harda/image/upload/v1648908480/Group_bvubqo.png" alt="Quest"/>
                <h3>Strive for Success</h3>
            </div>
            </div>
        </div>
    )
}

export default Quotes
