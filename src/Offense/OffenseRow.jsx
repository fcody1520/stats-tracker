import { useState } from "react"

export default function OffenseRow (props){
    
    let [isEditing, setIsEditing] = useState(false)
    
    const YPC = props.yards / props.receptions
    
    return (
        <>
            { isEditing
                ? <>
                <OffEditSaveButton/>
                <OffNameEditingField/>
                <RecEditingField/>
                <YardsEditingField/>
                <TDEditingField/>
                <DropsEditingField/>
                <ConversionEditingField/>
            </>
                :  
                <>
                    <tr>
                        <td className={"fatcolumn"}>
                            <button className={"offensebutton"}>Edit</button>
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
                    
                </>
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