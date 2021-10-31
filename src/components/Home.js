import Carousel from './Home/MyCarousel';
import Navbars from "./Navbars";
import MyFooter from './Home/MyFooter';
import BodySectionOne from './Home/StudentReviews';
import BodySectionTwo from './Home/BestStudents';
import TrendingTechs from './Home/TrendingTechs';
import PlacementStudent from './Home/PlacementStudent'

const Home = () =>{
    return (   
     <>
          <Navbars/>
            <div className='container-fluid' style={{backgroundColor: 'rgba(224, 224, 224, 0.904)'}}>
                
                <Carousel /> <br /> <br /> <br />
                <PlacementStudent/>
                {/* <BodySectionTwo /> <br /><br /><br /> <br /> */}
                <br/>
                <TrendingTechs />

                {/* <BodySectionOne /> <br /><br /><br /> */}
                <MyFooter />

            </div>
            
        </>
    )
};

export default Home;