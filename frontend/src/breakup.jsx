import { Breakup } from "./upload"


export default function BreakUp(){
    window.onload = Breakup;
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:'center',flexDirection:"column",height:"100%",width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",  backgroundImage:"url('http://localhost:5173/src/material/gradientblack.avif')", position:"absolute",top:'50%',left:"50%",transform:"translate(-50%,-50%)"}}>
            <audio src="http://localhost:5173/src/material/breakSound.m4a" autoPlay loop></audio>
            <h1 style={{color:"white",}}>Break Up</h1>
            <h3 style={{color:"white",}}>We officially broke up</h3>
            <h4 style={{color:"white",}}>You just don't appriciate me, while i did all of this just for you</h4>
            <img src="http://localhost:5173/src/material/crack.png"/>
        </div>
    )
}