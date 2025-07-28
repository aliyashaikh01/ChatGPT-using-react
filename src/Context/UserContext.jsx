import { useState } from 'react'
import React,{createContext} from 'react'
import main from '../gemini'
export const dataContext = createContext()

function UserContext(props) {
const [input, setInput] = useState("")
const [showResult, setShowResult]= useState(false)
const [loading, setLoading]= useState(false)
const [resultData,setResultData]= useState("")
// const [recentPrompt, setRecentPrompt]= useState("")
const [promptHistory, setPromptHistory] = useState([]);
const [prevPrompt,setPrevPrompt] = useState([])

async function send(input){
    setResultData("")
    setShowResult(true)
    setRecentPrompt(input)
    setLoading(true)
    setPrevPrompt(prev => [input,...prev])
    
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
     setPromptHistory
    }
  return (
    <>
    <dataContext.Provider value={data} >
        {props.children}
    </dataContext.Provider>
    </>
  )
}

export default UserContext;