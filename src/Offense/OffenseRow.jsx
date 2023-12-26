import { useState } from "react"

export default function OffenseRow (props){
    
    let [isEditing, setIsEditing] = useState(false)
    
    const YPC = props.yards / props.receptions
    
    function handleOffEditClick(){
        setIsEditing(!isEditing)
    }

    return (
        <> 
            { isEditing
                ? <tr>
                    <td>
                        <OffEditSaveButton/>
                    </td>
                    <td>
                        <OffNameEditingField
                        name={props.name}
                        />
                    </td>
                    <td>
                        <RecEditingField
                        receptions={props.receptions}
                        />
                    </td>
                    <td>
                        <YardsEditingField
                        yards={props.yards}
                        />
                    </td>
                    <td>
                        Calculating...
                    </td>
                    <td>
                        <TDEditingField
                        touchdowns={props.touchdowns}
                        />
                    </td>
                    <td>
                        <DropsEditingField
                        drops={props.drops}
                        />
                    </td>
                    <td>
                        <ConversionEditingField
                        conversions={props.conversions}/>
                    </td>
            </tr>
                :  
                    <tr>
                        <td className={"fatcolumn"}>
                            <button className={"offensebutton"}
                            onClick={handleOffEditClick}
                            >Edit</button>
                            <button className={"offensebutton"}>Delete</button>
                        </td>
                        <td className={"fatcolumn"}>
                            {props.name}
                        </td>
                        <td className={"skinnycolumn"}>
                            {props.receptions}
                        </td>
                        <td className={"skinnycolumn"}>
                            {props.yards}
                        </td>
                        <td className={"skinnycolumn"}>
                            {YPC.toFixed(3)}
                        </td>
                        <td className={"skinnycolumn"}>
                            {props.touchdowns}
                        </td >
                        <td className={"skinnycolumn"}>
                            {props.drops}
                        </td>
                        <td className={"skinnycolumn"}>
                            {props.conversions}
                        </td>
                    </tr>
            }
        </>
    )
}

function OffEditSaveButton(){
    return (
        <>
            <button>Save</button>
        </>
    )
}

function OffNameEditingField(props){
    
    const [currentValue, setCurrentValue] = useState(props.name)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)

    }


    return (
        <>
            <input type="text" value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}

function RecEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.receptions)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        
    }


    return (
        <>
            <input className={"numnum"} type={"number"} value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}

function YardsEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.yards)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        
    }


    return (
        <>
            <input className={"numnum"} type={"number"} value={currentValue} onChange={onChangeHandler}/>
        </>
    )
}

function TDEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.touchdowns)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        
    }


    return (
        <>
            <input className={"numnum"} type={"number"} value={currentValue} onChange={onChangeHandler}/>
        </>
    ) 
}

function DropsEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.drops)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        
    }


    return (
        <>
            <input className={"numnum"} type={"number"} value={currentValue} onChange={onChangeHandler}/>
        </>
    )   
}

function ConversionEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.conversions)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        
    }


    return (
        <>
            <input className={"numnum"} type={"number"} value={currentValue} onChange={onChangeHandler}/>
        </>
    )   
}