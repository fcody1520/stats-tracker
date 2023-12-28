import OffenseRow from "./OffenseRow"
import OffenseHeader from "./OffenseHeader"
import OffAddButton from "./OffAddButton"
import axios from 'axios'
import { useState, useEffect } from "react"




export default function OffenseTable(){

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get('/offensive-players')
        .then((response) => {
            setTableData(response.data);
        })
    }, [])
    

    return (
        <>
            <table>
                <OffenseHeader/>
                    <tbody>
                        {
                            tableData.map((playerObj) => {
                                return <OffenseRow
                                key={playerObj.id}
                                    name={playerObj.name}
                                    receptions={playerObj.receptions}
                                    yards={playerObj.yards}
                                    touchdowns={playerObj.touchdowns}
                                    drops={playerObj.drops}
                                    conversions={playerObj.conversions}
                                    id={playerObj.id}
                                    setTableData={setTableData}
                                />
                            })
                        }
                       
                    </tbody>
            </table>
            <OffAddButton
                setTableData={setTableData}
            />
        </>
    )
}