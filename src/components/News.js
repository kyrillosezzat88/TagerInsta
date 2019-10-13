import React from 'react';
import Navbar from './Navbar';
import youtube from '../images/youtube.png'
const News = ()=>{
    return(
        <div className="News">
            {/*Navbar */}
            <Navbar back={'/Home'}/>
            {/*Start Content Page */}
            <div className='content'>
                <div className="container">
                    <h5>What the News</h5>
                    <p>Follow the page to see our last others and updats</p>
                   <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h5 className="mb-0 d-flex justify-content-between align-items-center">
                            <div>
                                <button className="btn d-block">Run Sevice</button>
                                <span>2019-07-3 13:55:20</span>
                                <p>auto Like and views</p>
                            </div>
                            <img src={youtube} />
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <div className='w-100 d-flex justify-content-center align-items-center'><img src={youtube} /></div>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/*End Content Page */}
        </div>
    )
}
export default News;