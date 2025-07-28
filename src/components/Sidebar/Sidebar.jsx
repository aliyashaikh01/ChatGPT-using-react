// import React, { useContext, useState } from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaPlus } from "react-icons/fa";
// import { TbMessages } from "react-icons/tb";
// import "./Sidebar.css";
// import { dataContext } from '../../Context/UserContext';

// function Sidebar() {
//   const [extend, setExtend] =useState(false)
//   const {sent, prevPrompt} = useContext(dataContext)
//   return (
//     <div className='sidebar'>
//         <GiHamburgerMenu id="ham" onClick={()=>{
//           setExtend(prev => !prev)
//         } }/>
//         <div className="newchat">
//           <FaPlus />
//           {extend ? <p>New Chat</p> : null}
//         </div>
//         {prevPrompt.map((item,index)=>{
//           return(
//           <div className="messages">
//           <TbMessages/>
//           {extend ? <p>{item}</p> : null}
//         </div>)
//         })}
        
//     </div>
//   )
// }

// export default Sidebar;

import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import "./Sidebar.css";
import { dataContext } from '../../Context/UserContext';

function Sidebar() {
  const [extend, setExtend] = useState(false);
  const { promptHistory } = useContext(dataContext);

  return (
    <div className='sidebar'>
      <GiHamburgerMenu id="ham" onClick={() => setExtend(prev => !prev)} />

      <div className="newchat">
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>

      {promptHistory.map((item, index) => (
        <div className="messages" key={index}>
          <TbMessages />
          {extend ? <p>{item}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
