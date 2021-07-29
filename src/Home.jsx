import React from 'react';
import "./Home.css";
import { AiFillPlayCircle } from "react-icons/ai";
const Home = () => {
    return (
        <div>
             <div class="container mt-1" id="homeid">
    <div class="row">
        <div class="col-12 col-md-6">
             <h1><b>Don't worry.</b></h1>
             <h1><b>We are here for</b> </h1>
                <h1 className="heading"> <b>every solution.</b>
             </h1>
            <p >
                Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf</p>
             <p>moon.Actually beard single-origin coffee, twee 90's PBR Echo Park
           </p>
           
           <button class="btn btn-primary" type="submit"><b>Get started</b></button>
           <button className="btn" id="button" type="submit"><AiFillPlayCircle/><b> Watch video</b></button>
 </div>
        <div class="col-6 col-md-4">
            <figure>
                <img src="https://i.ibb.co/JKZV2Mc/Remini20210729134239076-2.png" alt="" width="600px" height="600px"/>
            </figure>
        </div>
      </div>
    </div>
    <div className="container">
        <div class="row">
        <p id="integrations">Integrations  </p>
            <figure className="figure">
                <img  className="image" id="image0" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" width="100px" height="50px"/>
                <img  className="image"id="image1" src="https://www.darklightdesign.com/media/13568/northern-logo.png" width="100px" height="50px"/>
                <img className="image" id="image2" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" width="100px" height="40px"/>
                <img className="image" id="image3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Skrill_primary_logo_RGB.svg/1280px-Skrill_primary_logo_RGB.svg.png" width="90px" height="35px"/>

            </figure>
       
        
        </div>
    </div>
    
        </div>
    );
};

export default Home;