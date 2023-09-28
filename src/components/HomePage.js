import AppBanner from './AppBanner'
import '../style/home-page-style.css'
export default function HomePage(){
    return(
        <div class="body" >
            <div class="body-text" style={{marginTop:'10%', fontWeight: 'bolder'}}>
                Welcome!<br></br>
                This is the home page for my personal site. You can use the tabs that appear on the top right side of the taskbar to explore.
            </div>
        </div>
    );
}