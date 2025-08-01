import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import "./Sidebar.css";
import { dataContext } from '../../Context/UserContext';

function Sidebar() {
  const [extend, setExtend] =useState(false);
  const { promptHistory, send, setSelectedPrompt, newChat }= useContext(dataContext);
  // const {sent, prevPrompt} = useContext(dataContext)
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id="ham" onClick={()=>{
          setExtend(prev => !prev)
        } }/>
        <div className="newchat" onClick={()=>{
          newChat();
        }}>
          <FaPlus />
          {extend ? <p>New Chat</p> : null}
        </div>
        {promptHistory.map((item, index) => (
         <div
           className="messages"
           key={index}
           onClick={() => {
             setSelectedPrompt(item);      // track selected
             send(item, true);             // true = from history
           }}
           style={{ cursor: "pointer" }}
         >
           <TbMessages />
           {extend ? <p>{item.slice(0,12)+"..."}</p> : null}
         </div>
       ))}
         
        
    </div>
  )
}

export default Sidebar;

// import React, { useContext, useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaPlus } from "react-icons/fa";
// import { TbMessages } from "react-icons/tb";
// import "./Sidebar.css";
// import { dataContext } from '../../Context/UserContext';

// function Sidebar() {
//   const [extend, setExtend] = useState(false);
//   const { promptHistory } = useContext(dataContext);

//   return (
//     <div className='sidebar'>
//       <GiHamburgerMenu id="ham" onClick={() => setExtend(prev => !prev)} />

//       <div className="newchat">
//         <FaPlus />
//         {extend ? <p>New Chat</p> : null}
//       </div>

//       {promptHistory.map((item, index) => (
//         <div className="messages" key={index}>
//           <TbMessages />
//           {extend ? <p>{item}</p> : null}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Sidebar;
