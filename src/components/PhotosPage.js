import AppBanner from './AppBanner'
import '../style/photos-style.css'
import skyline from '../images/skyline.jpeg'
import headshot from '../images/headshot-min.jpg'
import Carousel from 'react-bootstrap/Carousel';
import barcelona from '../images/barcelona.jpeg'
import parkguell from '../images/park-guell-barcelona.jpeg'
import grancanaria from '../images/gran-canaria-statue.jpeg'
import royalpalace from '../images/royal-palace-madrid.jpeg'
import stmartinsbridge from '../images/stmartins-bridge-toledo.jpeg'
import granvia from '../images/madrid.jpeg'
import pr from '../images/pr.JPG'
import sedona from '../images/sedona.jpeg'
import grandcanyon from '../images/grand-canyon.jpeg'
import whitehouse from '../images/white-house.jpeg'
import boston from '../images/boston.JPG'
import lakgeorge from '../images/lake-george.JPG'

export default function PhotosPage(){
    return(
        <div style={{height:'100%'}}>
            <div class= 'intro'>I'm really passionate about travelling, so I decided to 
            showcase some of my most notable and favorite moments and places!</div>
                <div class='flex'> 
                    <div class="polaroid">
                        <img class = 'image' src={skyline} alt="NYC Skyline - Gantry Plaza State Park" />
                        <div class="container">
                            <p>NYC Skyline - Gantry Plaza State Park</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={barcelona} alt="Downtown Barcelona, Spain"/>
                        <div class="container">
                            <p>Downtown Barcelona, Spain</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={parkguell} alt="Park Guell, Barcelona, Spain" />
                        <div class="container">
                            <p>Park Guell, Barcelona, Spain</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={grancanaria} alt="Los Marteles Special Nature Reserve, Gran Canaria, Spain" />
                        <div class="container">
                            <p>Los Marteles Special Nature Reserve, Gran Canaria, Spain</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={royalpalace} alt="Royal Palace of Madrid, Madrid, Spain" />
                        <div class="container">
                            <p>Royal Palace of Madrid, Madrid, Spain</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={stmartinsbridge} alt="St. Martin's Bridge, Toledo, Spain" />
                        <div class="container">
                            <p>St. Martin's Bridge, Toledo, Spain</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={granvia} alt="Gran Via, Madrid, Spain" />
                        <div class="container">
                            <p>Gran Via, Madrid, Spain</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={pr} alt="Rincon, Puerto Rico"/>
                        <div class="container">
                            <p>Rincon, Puerto Rico</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={sedona} alt="Sedona, Arizona" />
                        <div class="container">
                            <p>Sedona, Arizona</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={grandcanyon} alt="Grand Canyon, Arizona" />
                        <div class="container">
                            <p>Grand Canyon, Arizona</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={boston} alt="Boston, Massachusetts" />
                        <div class="container">
                            <p>Boston, Massachusetts</p>
                        </div>
                    </div>

                    <div class="polaroid">
                        <img class='image' src={lakgeorge} alt="Lake George, New York" />
                        <div class="container">
                            <p>Lake George, New York</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}