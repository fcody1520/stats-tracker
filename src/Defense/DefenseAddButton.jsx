import { useState } from "react";
import axios from "axios";


export default function DefenseAddButton(){
    
    const [isMakingNewDefRow, setIsMakingNewDefRow] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [flagpullsInput, setFlagpullsInput] = useState('')
    const [sacksInput, setSacksInput] = useState('')
    const [interceptionsInput, setInterceptionsInput] = useState('')
    const [knockdownsInput, setKnockdownsInput] = useState('')
    const [defTDsInput, setDefTDsInput] = useState('')

    function onAddClickHandler(){
        setIsMakingNewDefRow(true)
    }

    function onCancelClickHandler(){
        setIsMakingNewDefRow(false)
    }

    function onSaveClickHandler(){
        let defMaBod = {
            name: nameInput,
            flagpulls: +flagpullsInput,
            sacks: +sacksInput,
            interceptions: +interceptionsInput,
            knockdowns: +knockdownsInput,
            defTDs: +defTDsInput
        }

        // axios here
    }


    return(
        <>
            { isMakingNewDefRow
                ?
                <div>
                    <span className="addspan">
                        <button
                            className={"defensebutton"}
                            onClick={onSaveClickHandler}
                        >
                            Save
                        </button>
                        <button 
                            className={"defensebutton"}
                            onClick={onCancelClickHandler}
                        >
                            Cancel
                        </button>
                    </span>
                    <span  className="addspan">
                        <input 
                        placeholder="Player Name here"
                        value={nameInput}
                        type="text" 
                        onChange={(e) => setNameInput(e.target.value)}
                        />
                    </span>
                    <span  className="addspan">
                        <input 
                        type="number" 
                        placeholder="Flagpulls"
                        className={"numnum"}
                        value={flagpullsInput}
                        onChange={(e) => setFlagpullsInput(e.target.value)}
                        />
                    </span>
                    <span  className="addspan">
                    <input 
                        type="number" 
                        placeholder="Sacks"
                        className={"numnum"}
                        value={sacksInput}
                        onChange={(e) => setSacksInput(e.target.value)}
                        />
                    </span>
                    <span  className="addspan">
                    <input 
                        type="number" 
                        placeholder="Interceptions"
                        className={"numnum"}
                        value={interceptionsInput}
                        onChange={(e) => setInterceptionsInput(e.target.value)}
                        />
                    </span>
                    <span  className="addspan">
                    <input 
                        type="number" 
                        placeholder="Knockdowns"
                        className={"numnum"}
                        value={knockdownsInput}
                        onChange={(e) => setKnockdownsInput(e.target.value)}
                        />
                    </span>
                    <span  className="addspan">
                    <input 
                        type="number" 
                        placeholder="Def. TD's"
                        className={"numnum"}
                        value={defTDsInput}
                        onChange={(e) => setDefTDsInput(e.target.value)}
                        />
                    </span>
                </div>
                :<button onClick={onAddClickHandler} className={"defensebutton"}>
                Add Player
                </button>
                
            }
        
        </>
    )
}