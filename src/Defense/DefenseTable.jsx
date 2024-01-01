import DefenseRow from "./DefenseRow";
import DefenseHeader from "./DefenseHeader"
import DefenseAddButton from "./DefenseAddButton"
import axios from "axios";
import { useState,useEffect } from "react";



export default function DefenseTable(){

    const [tableData,setTableData] = useState([])


    useEffect(() => {
        axios.get('/defensive-players')
        .then((response) => {
            setTableData(response.data)
        })
    }, [])

    return (
        <>
            <table>
                <DefenseHeader/>
                    <tbody>
                        {
                            tableData.map((playerObj) => {
                                return <DefenseRow
                                    key={playerObj.id}
                                    name={playerObj.name}
                                    flagpulls={playerObj.flagpulls}
                                    sacks={playerObj.sacks}
                                    interceptions={playerObj.interceptions}
                                    knockdowns={playerObj.knockdowns}
                                    defTDs={playerObj.defTDs}
                                    id={playerObj.id}
                                    setTableData={setTableData}                                
                                />
                            })
                        }
                    </tbody>
            </table>
            <DefenseAddButton setTableData={setTableData}/>
        </>
    )



}