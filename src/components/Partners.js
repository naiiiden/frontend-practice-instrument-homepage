import airbnb from "../images/airbnb.png";
import airbnb__black from "../images/airbnb_black.png";
import better from "../images/better.png";
import better__black from "../images/better_black.png";
import dropbox from "../images/dropbox.png";
import dropbox__black from "../images/dropbox_black.png";
import ebay from "../images/ebay.png";
import ebay__black from "../images/ebay_black.png";
import facebook from "../images/facebook.png";
import facebook__black from "../images/facebook_black.png";
import google from "../images/google.png";
import google__black from "../images/google_black.png";
import dwell from "../images/dwell.png";
import dwell__black from "../images/dwell_black.png";
import intercom from "../images/intercom.png";
import intercom__black from "../images/intercom_black.png";
import linkedin from "../images/linkedin.png";
import linkedin__black from "../images/linkedin_black.png";
import mercy_corps from "../images/mercy_corps.png";
import mercy_corps__black from "../images/mercy_corps_black.png";
import netflix from "../images/netflix.png";
import netflix__black from "../images/netflix_black.png";
import new_knowledge from "../images/new_knowledge.png";
import new_knowledge__black from "../images/new_knowledge_black.png";
import nike from "../images/nike.png";
import nike__black from "../images/nike_black.png";
import one_medical from "../images/one_medical.png";
import one_medical__black from "../images/one_medical_black.png";
import patagonia from "../images/patagonia.png";
import patagonia__black from "../images/patagonia_black.png";
import path from "../images/path.png";
import path__black from "../images/path_black.png";
import samsung from "../images/samsung.png";
import samsung__black from "../images/samsung_black.png";
import sonos from "../images/sonos.png";
import sonos__black from "../images/sonos_black.png";
import specialized from "../images/specialized.png";
import specialized__black from "../images/specialized_black.png";
import spotify from "../images/spotify.png";
import spotify__black from "../images/spotify_black.png";
import stumptown from "../images/stumptown.png";
import stumptown__black from "../images/stumptown_black.png";
import tumblr from "../images/tumblr.png";
import tumblr__black from "../images/tumblr_black.png";
import umpqua from "../images/umpqua.png";
import umpqua__black from "../images/umpqua_black.png";
import xbox from "../images/xbox.png";
import xbox__black from "../images/xbox_black.png";
import yeti from "../images/yeti.png";
import yeti__black from "../images/yeti_black.png";
import youtube from "../images/youtube.png";
import youtube__black from "../images/youtube_black.png";
import levi from "../images/levi.png";
import levi__black from "../images/levi_black.png";

const Partners = ({ darkMode }) => {
    return (
        <div className="absolute--fix">

        <div className="partners--container">
            <div className="row row1">
                <img src={darkMode ? levi : levi__black} alt="" className="img"/>
                <img src={darkMode ? airbnb : airbnb__black} alt="" className="img img11"/>
                <img src={darkMode ? better : better__black} alt="" className="img img12"/>
                <img src={darkMode ? dropbox : dropbox__black} alt="" className="img img13"/>
                <img src={darkMode ? ebay : ebay__black} alt="" className="img img14"/>
                <img src={darkMode ? facebook : facebook__black} alt="" className="img img15"/>
                <img src={darkMode ? google : google__black} alt="" className="img img16"/>
                <img src={darkMode ? dwell : dwell__black} alt="" className="img img17"/>
                <img src={darkMode ? intercom : intercom__black} alt="" className="img img18"/>            
            </div>
            <div className="row row2">
                <img src={darkMode ? linkedin : linkedin__black} alt="" className="img imgrow2"/>
                <img src={darkMode ? mercy_corps : mercy_corps__black} alt="" className="img img21 imgrow2"/>
                <img src={darkMode ? netflix : netflix__black} alt="" className="img img22 imgrow2"/>
                <img src={darkMode ? new_knowledge : new_knowledge__black} alt="" className="img img23 imgrow2"/>
                <img src={darkMode ? nike : nike__black} alt="" className="img img24 imgrow2"/>
                <img src={darkMode ? one_medical : one_medical__black} alt="" className="img img25 imgrow2"/>
                <img src={darkMode ? patagonia : patagonia__black} alt="" className="img img26 imgrow2"/>
                <img src={darkMode ? path : path__black} alt="" className="img img27 imgrow2"/>
                <img src={darkMode ? samsung : samsung__black} alt="" className="img img28 imgrow2"/>
            </div>
            <div className="row row3">
                <img src={darkMode ? sonos : sonos__black} alt="" className="img imgrow3"/>
                <img src={darkMode ? specialized : specialized__black} alt="" className="img img31 imgrow3"/>
                <img src={darkMode ? spotify : spotify__black} alt="" className="img img32 imgrow3"/>
                <img src={darkMode ? stumptown : stumptown__black} alt="" className="img img33 imgrow3"/>
                <img src={darkMode ? tumblr : tumblr__black} alt="" className="img img34 imgrow3"/>
                <img src={darkMode ? umpqua : umpqua__black} alt="" className="img img35 imgrow3"/>
                <img src={darkMode ? xbox : xbox__black} alt="" className="img img36 imgrow3"/>
                <img src={darkMode ? yeti : yeti__black} alt="" className="img img37 imgrow3"/>
                <img src={darkMode ? youtube : youtube__black} alt="" className="img img38 imgrow3"/>
            </div>
        </div>
        </div>
    )
}

export default Partners;