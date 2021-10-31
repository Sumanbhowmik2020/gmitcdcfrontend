import react from '../../img/react2.png';
import android from '../../img/android2.png';
import net from '../../img/net.png';
import spring from '../../img/spring.png';
function TrendingTechs() {
    return(
        <>
            <div className='container mx-auto row'>
                <div className='col'>
                    <div class="text-center" style={{}}>
                        <img class="rounded-circle" src={react} alt="" style={{width: '65%', backgroundColor: 'rgba(224, 224, 224, 0.904)'}} />
                        <div class="card-body text-center">
                            <h4 class="card-title"><span className='text-success'>49</span> <br /> Students Placed</h4>
                            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                            {/* <a href="#link" class="btn btn-primary">See Profile</a> */}
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="text-center" style={{}}>
                        <img class="rounded-circle" src={android} alt="" style={{width: '60%', backgroundColor: 'rgba(224, 224, 224, 0.904)'}} />
                        <div class="card-body text-center">
                            <h4 class="card-title"><span className='text-primary'>52</span> <br /> Students Placed</h4>
                            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                            {/* <a href="#link" class="btn btn-primary">See Profile</a> */}
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="text-center" style={{}}>
                        <img class="rounded-circle" src={net} alt="" style={{width: '65%', backgroundColor: 'rgba(224, 224, 224, 0.904)'}} />
                        <div class="card-body text-center">
                            <h4 class="card-title"><span className='text-info'>41</span> <br /> Students Placed</h4>
                            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                            {/* <a href="#link" class="btn btn-primary">See Profile</a> */}
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="text-center" style={{}}>
                        <img class="rounded-circle" src={spring} alt="" style={{width: '60%', backgroundColor: 'rgba(224, 224, 224, 0.904)'}} />
                        <div class="card-body text-center">
                            <h4 class="card-title"><span className='text-danger'>100</span> <br /> Students Placed</h4>
                            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                            {/* <a href="#link" class="btn btn-primary">See Profile</a> */}
                        </div>
                    </div>
                </div>
                
                
            </div>
        </>
    );
}

export default TrendingTechs;