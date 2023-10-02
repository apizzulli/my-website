import AppBanner from './AppBanner'
import '../style/home-page-style.css'
export default function HomePage(){
    return(
        <div class = 'body' >
            <div class = 'body-text'>
                <div style={{ height:'75%'}}></div>
                <div style={{backgroundColor:'rgba(43, 48, 53, .7)',borderRadius:'3px',paddingTop:'4%',paddingBottom:'4%',paddingLeft:'4%',paddingRight:'4%',fontSize:'14pt'}}>Welcome!<br></br>This is the home page for my personal site.<br></br> <br></br>
                If viewing on desktop, just click the page on the taskbar that you'd like to visit.<br></br><br></br>
                If viewing on a mobile device, you can use the tab that appears on the top right side of the taskbar to explore.</div>
            </div>
        </div>
    );
}