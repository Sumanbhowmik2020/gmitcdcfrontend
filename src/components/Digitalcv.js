import Carousel from './Home/MyCarousel';
import Navbars from "./Navbars";
import MyFooter from './Home/MyFooter';
import BodySectionOne from './Home/StudentReviews';
import BodySectionTwo from './Home/BestStudents';
import TrendingTechs from './Home/TrendingTechs'

import Basic from './Digital_cv/Basic';
import Skill from './Digital_cv/Skill';
import Education from './Digital_cv/Education';
import { useParams } from 'react-router';

const Digitalcv = () =>{
    let {eid}=useParams();
    return (   
     < div style={{ backgroundColor: "#F0EEBA" }}>
          <Navbars/>
            <div className='container ' >
                <Basic email={eid}/>

                
            </div>
            <div className='container' >
            <Education email={eid}/>
                
            </div>

            

            <div className='container' >
                <Skill email={eid}/>
                
            </div>

            
        </div>
    )
};

export default Digitalcv;