import React from 'react';
import tangedco1 from '../../pages/Asserts/tangedco.png';
import tangedco2 from '../../pages/Asserts/pay.png';
const Home = () => (
    
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={tangedco1} class="d-block w-100" alt="..." width="300" height="300" />
                </div>

                <div class="carousel-item">
                    <img src={tangedco2} class="d-block w-100" alt="..." width="300" height="300" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>

   
);

export default Home