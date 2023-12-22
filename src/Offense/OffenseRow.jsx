import { useState } from "react"

export default function OffenseRow (props){
    
    let [isEditing, setIsEditing] = useState(false)
    
    const YPC = props.yards / props.receptions
    
    function handleOffEditClick(){
        setIsEditing(!isEditing)
    }
// 1:55:23 in zoom video 
    return (
        <> 
            { isEditing
                ? <tr>
                    <td>
                    <OffEditSaveButton/>
                    </td>
                    <td>
                    <OffNameEditingField/>
                    </td>
                    <td>
                    <RecEditingField/>
                    </td>
                    <td>
                    <YardsEditingField/>
                    </td>
                    <td>
                    <TDEditingField/>
                    </td>
                    <td>
                    <DropsEditingField/>
                    </td>
                    <td>
                    <ConversionEditingField/>
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
        
        </>
    )
}

function OffNameEditingField(){
    return (
        <>
        
        </>
    )
}

function RecEditingField(){
    return (
        <>
        
        </>
    )
}

function YardsEditingField(){
    return (
        <>
        
        </>
    )
}

function TDEditingField(){
    return (
        <>
        
        </>
    )  
}

function DropsEditingField(){
    return (
        <>
        
        </>
    )  
}

function ConversionEditingField(){
    return (
        <>
        
        </>
    )   
}