import { useState } from "react";
import axios from "axios";

export default function DefenseRow(props){

    let [isEditing, setIsEditing] = useState(false)
    let [newData, setNewData] = useState({
        name: props.name,
        flagpulls: props.flagpulls, 
        sacks: props.sacks,
        interceptions: props.interceptions,
        knockdowns: props.knockdowns,
        defTDs: props.defTDs,
        id: props.id
    })


    function handleDefEditClick(){
        setIsEditing(!isEditing)
    }

    async function handleDefDeleteClick(){
        const userConfirmed = window.confirm('Are you sure you want to delete this defensive player?');

        if (userConfirmed){
            try {
                let response = await axios.delete(`/defensive-players/${props.id}`);
                props.setTableData(response.data);
            } catch (error) {
                console.error('Error deleting defensive player:', error);
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
                        <DefEditSaveButton
                        newData={newData}
                        id={props.id}
                        setTableData={props.setTableData}
                        setIsEditing={setIsEditing}
                        />
                    </td>
                    <td>
                        <DefNameEditingField
                        setNewData={setNewData}
                        newData={newData}
                        name={props.name}
                        />
                    </td>
                    <td>
                        <FlagPullEditingfield
                        setNewData={setNewData}
                        newData={newData}
                        flagpulls={props.flagpulls}
                        />
                    </td>
                    <td>
                        <SacksEditingField
                        setNewData={setNewData}
                        newData={newData}
                        sacks={props.sacks}
                        />
                    </td>
                    <td>
                        <IntEditingField
                        setNewData={setNewData}
                        newData={newData}
                        interceptions={props.interceptions}
                        />
                    </td>
                    <td>
                        <KnockdownEditingField
                        setNewData={setNewData}
                        newData={newData}
                        knockdowns={props.knockdowns}
                        />
                    </td>
                    <td>
                        <DefTDEditingField
                        setNewData={setNewData}
                        newData={newData}
                        defTDs={props.defTDs}
                        />
                    </td>
                </tr>
                :
                <tr>
                    <td>
                        <button className={"defensebutton"}
                        onClick={handleDefEditClick}
                        >Edit</button>
                        <button className={"defensebutton"}
                        onClick={handleDefDeleteClick}
                        >Delete</button>
                    </td>
                    <td>
                        {props.name}
                    </td>
                    <td>
                        {props.flagpulls}
                    </td>
                    <td>
                        {props.sacks}
                    </td>
                    <td>
                        {props.interceptions}
                    </td>
                    <td>
                        {props.knockdowns}
                    </td>
                    <td>
                        {props.defTDs}
                    </td>
                </tr>
            }
        </>
    )


}

function DefEditSaveButton(props){
    const {id, newData, setTableData, setIsEditing}= props;

    async function onSaveClick(){
        try {
            const response = await axios.put(`/edit-D-player/${id}`, newData);
            setTableData(response.data);
            setIsEditing(false);
        }catch(error){
            console.error("error updating player:", error)
        }
    }

        return (
            <>
                <button onClick={onSaveClick}>Save</button>
            </>
        )
}

function DefNameEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.name)

    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, name: evt.target.value})
    }

    return (
        <>
            <input type="text" value={currentValue} onChange={onChangeHandler} />
        </>
    )

}

function FlagPullEditingfield(props){
    const [currentValue, setCurrentValue] = useState(props.flagpulls)

    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, flagpulls: evt.target.value})
    }

    return (
        <>
            <input className={"numnum"} value={currentValue} onChange={onChangeHandler} type="text" />
        </>
    )
}

function SacksEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.sacks)

    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, sacks: evt.target.value})
    }

    return (
        <>
            <input className={"numnum"} value={currentValue} onChange={onChangeHandler} type="text" />
        </>
    )
}

function IntEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.interceptions)

    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, interceptions: evt.target.value})
    }

    return (
        <>
            <input className={"numnum"} value={currentValue} onChange={onChangeHandler} type="text" />
        </>
    )
}

function KnockdownEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.knockdowns)

    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, knockdowns: evt.target.value})
    }

    return (
        <>
            <input className={"numnum"} value={currentValue} onChange={onChangeHandler} type="text" />
        </>
    )
}

function DefTDEditingField(props){
    const [currentValue, setCurrentValue] = useState(props.defTDs)

    function onChangeHandler(evt){
        setCurrentValue(evt.target.value)
        props.setNewData({...props.newData, defTDs: evt.target.value})
    }

    return (
        <>
            <input className={"numnum"} value={currentValue} onChange={onChangeHandler} type="text" />
        </>
    )
}