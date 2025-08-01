import { useState } from 'react'
import React,{createContext} from 'react'
import main from '../gemini'
export const dataContext = createContext()

function UserContext({children}) {
const [input, setInput] = useState("")
const [showResult, setShowResult]= useState(false)
const [loading, setLoading]= useState(false)
const [resultData,setResultData]= useState("")
const [recentPrompt, setRecentPrompt]= useState("")
const [promptHistory, setPromptHistory] = useState([]);
const [selectedPrompt, setSelectedPrompt] = useState("");
// const [prevPrompt,setPrevPrompt] = useState([])

function newChat(){
  setShowResult(false);
  setLoading(false)
}

async function send(input, fromHistory = false){
    setResultData("")
    setShowResult(true)
    setRecentPrompt(input)
    setLoading(true)

    if (!fromHistory) {
    setPromptHistory(prev => {
      if (prev.includes(input)) return prev;
      return [input, ...prev];
    });
  }            //three dots in js is known as the spread syntax, and it is commonly used to make shallow copies of js objects. It does this by taking in an iterable and expanding it into its individual elememts.
    
    let Response=await main(input)
    setResultData(Response.split(/\*\*|###|---|\*/));           
    setLoading(false)
    setInput("")
}    
    const data= {
     input,
     setInput,   
     send,
     loading,
     setLoading,
     showResult,
     setShowResult,
     resultData,
     setResultData,
     recentPrompt,
     setRecentPrompt,
     promptHistory,
     selectedPrompt,
     setSelectedPrompt,
     newChat
    }
  return (
    <>
    <dataContext.Provider value={data} >
        {children}
    </dataContext.Provider>
    </>
  )
}

export default UserContext;