import { useState } from "react"
import axios from 'axios'

export default function OffenseRow (props){
    
    let [isEditing, setIsEditing] = useState(false)
    let [newData, setNewData] = useState({
        name: props.name,
        receptions: props.receptions,
        yards: props.yards,
        touchdowns: props.touchdowns,
        drops: props.drops,
        conversions: props.conversions,
        id: props.id
    })


    const YPC = props.yards / props.receptions
    
    function handleOffEditClick(){
        setIsEditing(!isEditing)
    }

    async function handleOffDeleteClick() {
        const userConfirmed = window.confirm('Are you sure you want to delete this offensive player?');
    
        if (userConfirmed) {
            try {
                let response = await axios.delete(`/offensive-players/${props.id}`);
                props.setTableData(response.data);
            } catch (error) {
                console.error('Error deleting offensive player:', error);
            }
        } else {
            console.log('Deletion canceled by user');
        }
    }
    
    

    return (
        <> 
            { isEditing
                ? <tr>
                    <td>
                        <OffEditSaveButton
                        newData={newData}
                        id={props.id}
                        setTableData={props.setTableData}
                        setIsEditing={setIsEditing}
                        />
                    </td>
                    <td>
                        <OffNameEditingField
                        setNewData={setNewData}
                        newData={newData}
                        name={props.name}
                        />
                    </td>
                    <td>
                        <RecEditingField
                        setNewData={setNewData}
                        newData={newData}
                        receptions={props.receptions}
                        />
                    </td>
                    <td>
                        <YardsEditingField
                        setNewData={setNewData}
                        newData={newData}
                        yards={props.yards}
                        />
                    </td>
                    <td>
                        Calculating...
                    </td>
                    <td>
                        <TDEditingField
                        setNewData={setNewData}
                        newData={newData}
                        touchdowns={props.touchdowns}
                        />
                    </td>
                    <td>
                        <DropsEditingField
                        setNewData={setNewData}
                        newData={newData}
                        drops={props.drops}
                        />
                    </td>
                    <td>
                        <ConversionEditingField
                        setNewData={setNewData}
                        newData={newData}
                        conversions={props.conversions}/>
                    </td>
            </tr>
                :  
                    <tr>
                        <td>
                            <button className={"offensebutton"}
                            onClick={handleOffEditClick}
                            >Edit</button>
                            <button onClick={handleOffDeleteClick} className={"offensebutton"}>Delete</button>
                        </td>
                        <td>
                            {props.name}
                        </td>
                        <td>
                            {props.receptions}
                        </td>
                        <td>
                            {props.yards}
                        </td>
                        <td>
                            {YPC.toFixed(3)}
                        </td>
                        <td>
                            {props.touchdowns}
                        </td >
                        <td>
                            {props.drops}
                        </td>
                        <td>
                            {props.conversions}
                        </td>
                    </tr>
            }
        </>
    )
}

function OffEditSaveButton(props){
    
   const {id, newData, setTableData, setIsEditing} = props 

async function onSaveClick() {
    try {
        const response = await axios.put(`/edit-player/${id}`, newData);
        setTableData(response.data);
        setIsEditing(false);
    } catch (error) {
        console.error("Error updating player:", error);
    }
}
 
    
    return (
        <>
            <button onClick={onSaveClick}>Save</button>
        </>
    )
}

function OffNameEditingField(props){
    
    const [currentValue, setCurrentValue] = useState(props.name)
    
    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, name: evt.target.value})
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
        props.setNewData({...props.newData, receptions: evt.target.value})
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
        props.setNewData({...props.newData, yards: evt.target.value})
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
        props.setNewData({...props.newData, touchdowns: evt.target.value})
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
        props.setNewData({...props.newData, drops: evt.target.value})
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
        props.setNewData({...props.newData, conversions: evt.target.value})
    }


    return (
        <>
            <input className={"numnum"} type={"number"} value={currentValue} onChange={onChangeHandler}/>
        </>
    )   
}