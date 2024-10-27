import "./feelings.css"
import Background from "./bg"
import { useState } from "react"
import { UploadData } from "./upload"

function Slider(title, slider, setSlider){
    return(
        <div className="slidercont" style={{borderBottom: "1px solid gray", paddingBottom:"40px", marginBottom:'40px'}}>
            <div>
                <h3 style={{textTransform: "capitalize", textAlign: "left"}}>{title}</h3>
                <p>How would you rate your {title} towards your lover</p>
            </div>
            <div style={{display: "flex", gap: '15px',}}>
                <p>0</p>
                <input type="range" value={slider} className="slider" max={5} min={0} onChange={(e)=>{setSlider(e.target.value); Check();}}/>
                <p>5</p>
            </div>
        </div>
    )
}

function Check(){
    let slider1 = document.querySelectorAll(".slider")[0].value;
    let slider2 = document.querySelectorAll(".slider")[1].value;
    let slider3 = document.querySelectorAll(".slider")[2].value;
    
    if (slider1 === "0" || slider1 === "1"|| slider2 === "0" || slider2 === "1" || slider3 === "0" ||slider3 === "1"){
        document.getElementById("breakup").style.opacity = "1";
    }
    else{
        document.getElementById("breakup").style.opacity = "0";
    }
}

export default function Feelings(){
    const [slider1, setSlider1] = useState(3)
    const [slider2, setSlider2] = useState(3)
    const [slider3, setSlider3] = useState(3)

    return(
        <>
            <Background/>
            <nav>
                <a href="/home">Home</a>
                <a href="/feelings">Feelings</a>
            </nav>
            <div className="sliders" style={{width:'60%', position:"relative", left:"50%", transform:"translateX(-50%)", marginBottom:"150px"}}>
                
                {Slider('trust', slider1, setSlider1)}
                {Slider('love', slider2, setSlider2)}
                {Slider('pride', slider3,setSlider3)}
                <button 
                type="submit" 
                id="save"
                
                onClick={()=>{
                    UploadData(slider1,slider2,slider3)
                }}>Save</button>

            </div>
            <div>
                <img src="./material/feelingspoem.jpg" alt="" 
                style={{
                    width : "50%",
                    borderRadius:"15px"
                }}/>
            </div>
            <button id="breakup" onClick={()=>{window.location.href = '/break'}} style={{opacity: "0", position:"absolute", right:"50px", bottom:"50px", backgroundColor:"red", color:"white", zIndex:"10"}}>Break up</button>
        </>
    )
}