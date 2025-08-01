import { useEffect } from "react";
import React,{useState} from 'react';
import { ImSun } from "react-icons/im";
import "./Darkmode.css";
import { BsMoonStars } from "react-icons/bs";

function Darkmode() {
    const [mode, setMode]= useState("darkmode");
    function toggle(){
        if(mode==="darkmode"){
            setMode("lightmode")
        }
        else{
            setMode("darkmode")
        }
    }
    useEffect(()=>{
        document.body.className=mode
    },[mode])
  return (
    <button className="darkmodebtn" onClick={() =>{
        toggle()
        console.log(mode);
    }}>{mode === "darkmode"?<ImSun />:<BsMoonStars />}
</button>
  )
}

export default Darkmode