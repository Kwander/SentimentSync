import { useState } from "react";
import "./result.css"

export default function Result(){
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")
    function load(){
        document.querySelector(".loader-cont").style.display = "flex";
        document.getElementById("check").style.display = "none";
        try{
            fetch("https://work-6fh9.onrender.com/getdata")
            .then(response => response.json())
            .then(res =>{
                if (res.length > 0){
                    
                    const data = res[0].data;
                    if (data.breakup === true){
                        document.getElementById("datadisplay").innerHTML = "";
                        setTimeout(() => {
                            document.getElementById("datadisplay").innerHTML = "sorry to hear that, but Your girlfriend clicked on the break up button";
                        }, 2000);
                    }
                    else{
                        setTimeout(() => {
                            document.getElementById("tit").style.display = "block";
                        }, 1900);
                        setValue1(data.sliderA);
                        setValue2(data.sliderB);
                        setValue3(data.sliderC);
                    }
                }
                else{
                    document.getElementById("datadisplay").innerHTML = "";
                    setTimeout(()=>{
                        document.getElementById("datadisplay").innerHTML = "I found no data saved, no one voted on the feelings page !";
                    },2000)
                }
            }) 
        }
        catch(err){
            console.error(err);
        }
        setTimeout(()=>{
            document.querySelector(".loader-cont").style.display = "none";
            let inputs = document.querySelectorAll(".inp");
            inputs.forEach(input =>{
                input.style.display = "flex";
            })

        },2000)

        
    }
    
    return(
        <div>
            <div className="loader-cont">
                <span id="loader" className="loader"></span>
            </div>
            <video src="./material/resultbg.mp4" id="bg" autoPlay muted loop></video>
            <h1 style={{marginTop:'35px', color:"white"}}>Results</h1>
            <button onClick={load} id="check" style={{background:"gray", color:"white", position:"absolute", left:"49%", top:'50%',padding:"20px", transform:"translate(-49%,-50%)"}}>Check results</button>
            <div id="datadisplay">
                <h2 id="tit" style={{display:"none"}}>Here are the results saved !</h2>
                <div className="inp">
                    <h3>Trust</h3>
                    <input type="range" name="" id="sliderA" max={5} min={0} value={value1}/>
                </div>
                <div className="inp">
                    <h3>Love</h3>
                    <input type="range" className="inp" name="" id="sliderB" max={5} min={0} value={value2}/>
                </div>
                <div className="inp">
                    <h3>Pride</h3>
                    <input type="range" className="inp" name="" id="sliderC" max={5} min={0} value={value3}/>
                </div>
            </div>
        </div>
    )
}