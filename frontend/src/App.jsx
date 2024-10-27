import './App.css'
import Background from './bg';


function App() {
  document.querySelector("#bg").addEventListener("scroll",reveal);
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0;i < reveals.length; i++ ){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add("active");
      }
      else{
        reveals[i].classList.remove("active");
      }
      
    } 
    

  }



  function Expand(){
    const to_flip = document.getElementsByClassName("fa-caret-up");
    const to_show = document.getElementsByClassName("revealafterhover");
    const container = document.getElementById("info");
    for (let i = 0; i < to_flip.length; i++) {
      if (to_flip[i].classList.contains("fa-rotate-180")){
        to_flip[i].classList.remove("fa-rotate-180");
        to_show[i].style.opacity = '1';
        container.style.height = "100px";
      }
      else{
        to_flip[i].classList.toggle("fa-rotate-180");
        to_show[i].style.opacity = '0';
        container.style.height = "0px";
      }
  }
  }

  return (
    <>
      <Background/>
      <section >
        <nav>
          <a href="/home">Home</a>
          <a href="/feelings">Feelings</a>
        </nav>
        <div className='mainsect'>
          <h1>Welcome to my lover page</h1>
        </div>
        <div className='poem-sect'>
          <div>
            <img src="http://localhost:5173/src/material/poem.jpg" className='poem-img reveal' alt="" />
            <p id='text1' className='reveal'>I love you so much</p>
          </div>
          <div>
            <p id='text2' className='reveal'>I would do the impossible for you</p>
            <img src="http://localhost:5173/src/material/poem2.jpg" alt="" className='poem2-img reveal'/>
          </div>
          <img src="http://localhost:5173/src/material/heart.png" id='heart' className='reveal' alt="" />
        </div>

        <div className='info' id='info' onMouseEnter={Expand} onMouseLeave={Expand}>
          <div className='info-upperSide'>
            <h2><i className="fa fa-caret-up fa-rotate-180" style={{transition: "all 400ms"}}></i></h2>
            <h2>Did you know ?</h2>
            <h2><i className="fa fa-caret-up fa-rotate-180"  style={{transition: "all 400ms"}}></i></h2>
          </div>
          <div>
            <p className='revealafterhover'>This is the 120391th day of our relationship</p>
            <p className='revealafterhover'>I hope it lasts forever</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
