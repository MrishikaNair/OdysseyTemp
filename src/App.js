import './styles/web.css';
import './styles/navbar.css';
import Front from './assets/front.png';
import Des1 from './assets/des1.png';
import Des2 from './assets/des2.png';
import GB from './assets/girlboy.png';
import txt from './assets/odyssey_txt.png';
import{Link} from "react-router-dom";

function App() {
  return (
    
    <div class="nav">
      <img  src={Front} alt="Background" style={{ marginTop:0, position: 'absolute',float:'left' ,height: 700 }} />
      <section id="navbar">
            <br></br>
          
            <a href="#home"><button class="navbut" transition= {3}>HOME</button></a>
            <a href="#about"><button class="navbut" transition= {3}>ABOUT</button></a>
            <button class="navbut">EVENTS</button>
            <button class="navbut">SPONSERS</button>
            <button class="navbut">TEAM</button>

        
        </section>
        <div class="container" id="home">
        <img  src={txt} alt="Background" style={{ marginTop:400, position: 'absolute',float:'left' ,marginLeft:750,height: 180 }} />
        <img  src={Des1} alt="Background" style={{ marginTop:750, position: 'relative',float:'left' ,height: 700 }} />
        <img  src={GB} alt="Background" style={{ marginTop:1200, position: 'relative',marginRight:0,float:'right' ,height: 400 }} />
        <button className="recap" transition= {3} style={{ marginTop:780, position: 'absolute',float:'left' ,marginLeft:-30}}>Odyssey'20 Recap</button>
        <img  src={Des2} alt="Background" style={{ marginTop:1600, position: 'relative',marginRight:-380,float:'right' ,height: 500 }} />
        </div>
        <div class="cont">
        <div className="ab" id="about"><b>About.</b></div>
        <p className="text">IIIT Delhi's Odyssey celebrates the essence and beauty of culture and 
                            of it's arts. It celebrates the Actor, the Dancer, the Musician, the 
                            Writer and the Designer, with over 45 events and a footfall of 25,000+. 
                            Having staged popular performances like Prateek Kuhad, Gajendra Verma, 
                            Hardy Sandhu, The Local Train, Euphoria, Zakir Khan and Bhuvan Bam, 
                            Odyssey always reaches out to the youth with it's inspiring, ever 
                            growing attitude.
                            <br></br><br></br>
                            Feel the adrenaline rush, the pumping of you blood as We bring to you 
                            yet another spectacular edition of the 2 day event. Come participate, 
                            experience and feel the excitement as you watch the star with close 
                            proximity or see the different competitions. Come and make numerous and 
                            unforgettable memories and at Odyssey.</p>
        </div>
        </div>
        
        
        
  );
}

export default App;
