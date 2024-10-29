import "./feelings.css"
import Background from "./bg"
import { useEffect, useState } from "react"
import UploadData from "./upload"

function Slider(title, slider, setSlider, id){
    return(
        <div className="slidercont" style={{borderBottom: "1px solid gray", paddingBottom:"40px", marginBottom:'40px'}}>
            <div>
                <h3 style={{textTransform: "capitalize", textAlign: "left", color:"#fff"}}>{title}</h3>
                <p style={{color:"#fff"}}>How would you rate your {title} towards your lover</p>
            </div>
            <div style={{display: "flex",flexDirection:"column", gap: '15px',justifyContent:"center",alignItems:"center"}}>
                <input type="range" value={slider} className="slider" id={id} max={10} min={0} style={{width:"300px"}} onChange={(e)=>{
                    document.getElementById("loader").style.display = "block"
                    document.querySelectorAll(".lower-opa").forEach(element =>{
                        element.style.opacity = 0.2;
                    })

                    setSlider(e.target.value); 
                    Check();
                    setTimeout(() => {
                        document.querySelectorAll(".lower-opa").forEach(element =>{
                            element.style.opacity = 1;
                        })
                        document.getElementById("loader").style.display = "none"
                    }, 1000);
                }}/>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:'310px',marginLeft:"8px"}} className="indicators">
                    <p>0</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                </div>
            </div>
        </div>
    )
}
async function load(setValue1,setValue2,setValue3){
    document.querySelectorAll(".lower-opa").forEach(element =>{
        element.style.opacity = 0.2;
    })
    try{
        await fetch("https://kevinbackapp-mgbvdmym.b4a.run/getdata")
        .then(response => response.json())
        .then(res =>{
            if (res.length > 0){
                const data = res[0].data;
                setValue1(data.sliderA);
                setValue2(data.sliderB);
                setValue3(data.sliderC);
                
            }
            else{
                setValue1("")
                setValue2("")
                setValue3("")
            }
        }) 
    }
    catch(err){
        alert("error with the data, if the problem persits contact the provider")
        window.location.href = "/home";
    }
    finally{
        setTimeout(() => {
            document.querySelectorAll(".lower-opa").forEach(element =>{
                element.style.opacity = 1;
            })
            document.getElementById("loader").style.display = "none"
        }, 1000);
    }
}


async function Check(){


    let slider1 = document.querySelectorAll(".slider")[0].value;
    let slider2 = document.querySelectorAll(".slider")[1].value;
    let slider3 = document.querySelectorAll(".slider")[2].value;
    
    if (slider1 === "0" || slider1 === "1"|| slider2 === "0" || slider2 === "1" || slider3 === "0" ||slider3 === "1"){
        document.getElementById("breakup").style.opacity = "1";
    }
    else{
        document.getElementById("breakup").style.opacity = "0";
    }
    await UploadData(slider1,slider2,slider3);
}

export default function Feelings(){
    const [slider1, setSlider1] = useState("5")
    const [slider2, setSlider2] = useState("5")
    const [slider3, setSlider3] = useState("5")


    useEffect(()=>{
        load(setSlider1,setSlider2,setSlider3);
    },[])
    return(
        <section className="section">
            <div className="loader" id="loader"></div>  
            <nav>
                <a href="/home" className=" lower-opa">Home</a>
                <a href="/feelings" className=" lower-opa">Feelings</a>
            </nav>
            <div className="sliders lower-opa" style={{width:'60%', position:"relative", left:"50%", transform:"translateX(-50%)", marginBottom:"150px"}}>

                
                {Slider('trust', slider1, setSlider1, "id1")}
                {Slider('love', slider2, setSlider2, "id2")}
                {Slider('pride', slider3,setSlider3, "id3")}

            </div>
            <div>
                <img src="https://clientdemand.onrender.com/material/feelingspoem.jpg" className="poemm lower-opa" alt="" 
/>
            </div>
            <button id="breakup" onClick={async ()=>{
                await UploadData(slider1,slider2,slider3, true);
                }} style={{opacity: "0", position:"absolute", right:"50px", bottom:"50px", backgroundColor:"red", color:"white", zIndex:"10"}}>Break up</button>
        </section>
    )
}