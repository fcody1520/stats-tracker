import { useState } from "react"
import axios from "axios"


export default function OffAddButton ({setTableData}){
    
    const [isMakingNewOffRow, setIsMakingNewOffRow] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [receptionsInput, setReceptionsInput] = useState('')
    const [yardsInput, setYardsInput] = useState('')
    const [touchdownsInput, setTouchdownsInput] = useState('')
    const [dropsInput, setDropsInput] = useState('')
    const [conversionsInput, setConversionsInput] = useState('')

    function onAddClickHandler(){
        setIsMakingNewOffRow(true)
    }

    function onCancelClickHandler(){
        setIsMakingNewOffRow(false)
    }

    function onSaveClickHandler(){
        let offMaBod = {
            name: nameInput,
            receptions: +receptionsInput,
            yards: +yardsInput,
            touchdowns: +touchdownsInput,
            drops: +dropsInput,
            conversions: +conversionsInput
        }

        axios.post('/offensive-player', offMaBod)
        .then((response) => {
            setTableData(response.data)
            setIsMakingNewOffRow(false)
            setNameInput('')
            setReceptionsInput('')
            setYardsInput('')
            setTouchdownsInput('')
            setDropsInput('')
            setConversionsInput('')
        })
    }
    
    
    return (
        <>
            { isMakingNewOffRow
                ? <div>
                    <span  className="addspan">
                        <button 
                            className={"offensebutton"}
                            onClick={onSaveClickHandler}    
                        >
                                Save
                        </button>
                        <button 
                            onClick={onCancelClickHandler} 
                            className={"offensebutton"}>
                                Cancel
                        </button>
                    </span>
                    <span  className="addspan">
                        <input 
                            placeholder="Player Name Here"
                            value={nameInput} 
                            type="text" 
                            onChange={(e) => setNameInput(e.target.value)} 
                         />
                    </span>
                    <span  className="addspan">
                        <input 
                            type="number"
                            placeholder="Rec" 
                            className={"numnum"}
                            value={receptionsInput}
                            onChange={(e) => setReceptionsInput(e.target.value)} 
                        />
                    </span>
                    <span className="addspan">
                        <input 
                            type="number" 
                            placeholder="Yards"
                            className={"numnum"}
                            value={yardsInput} 
                            onChange={(e) => setYardsInput(e.target.value)} 
                        />
                    </span>
                    <span  className="addspan">
                        Calculating...
                    </span>
                    <span  className="addspan">
                        <input 
                            value={touchdownsInput} 
                            placeholder="TD's"
                            type="number"
                            className={"numnum"}  
                            onChange={(e) => setTouchdownsInput(e.target.value)} 
                        />
                    </span>
                    <span  className="addspan">
                        <input 
                            type="number" 
                            placeholder="Drops"
                            className={"numnum"}
                            value={dropsInput}
                            onChange={(e) => setDropsInput(e.target.value)} 
                        />
                    </span>
                    <span  className="addspan">
                        <input 
                            type="number"
                            placeholder="Conv." 
                            className={"numnum"}
                            value={conversionsInput}
                            onChange={(e) => setConversionsInput(e.target.value)} 
                        />
                    </span>
                </div>
                :<button onClick={onAddClickHandler} className={"offensebutton"}>
                Add Player
                </button>
            } 
        </>
    )
}