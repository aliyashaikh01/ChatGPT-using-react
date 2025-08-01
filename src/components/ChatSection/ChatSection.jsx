import React, { useContext } from 'react';
import "./ChatSection.css";
import Darkmode from '../Darkmode/Darkmode';
import { IoSendSharp } from "react-icons/io5";
import { dataContext } from '../../Context/UserContext';
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";



function chatSection() {

let {send, input, setInput, showResult, resultData, recentPrompt, loading}=useContext(dataContext)

  return (
    <div className="chatsection">
    <div className="topsection">
  {!showResult? <div className="heading">
  <span> HELLO ALIYA</span>
  <span>I'm your Assistant</span>
  <span>What can I help with?</span>
</div> : <div className='result'>
  <div className="userbox">
    <img src={user} alt="" width={"50 px"} />
    <p>{recentPrompt}</p>
  </div>                                                     
  <div className="aibox">
    <img src={ai} alt="" width={"40px"} />
    {loading?<div className="loader">
      <hr />
      <hr />
      <hr />
    </div>
    :
    <p>{resultData}</p>}
  </div>
  </div>}    

    </div>
    <div className="bottomsection">

<input 
  onChange={(e) => setInput(e.target.value)} 
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey && input.trim() !== "") {
      e.preventDefault(); // prevent line break
      send(input);
    }
  }}
  type="text" 
  placeholder="Ask anything" 
  value={input}
/>




{input?<button id="sendbtn"onClick={()=> {
  send(input)
}}><IoSendSharp /></button>:null}

<Darkmode/>
    </div>
    </div>
  )
}

export default chatSection;