import React from 'react';// Import CSS file for styling
import image from '../image.jpg';


const TwoPartComponent = () => {
   
    
    return (
        <div className="two-part-container" >
            <div className="left-part">
                <div className="moving-text-container">
                    <h5> &mdash; Hello,</h5><br></br>
                   <h2> I'm Vishal Mane </h2><br></br>
                   <p>--- Creative Software Engineer and Full Stack Developer </p>

                   <button > KNOW MORE</button>
                </div>
            </div>
            <div className="right-part">
                <div className="image-container">
                   <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default TwoPartComponent;