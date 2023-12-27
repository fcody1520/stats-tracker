import OffenseRow from "./OffenseRow"
import OffenseHeader from "./OffenseHeader"
import OffAddButton from "./OffAddButton"
import { useState } from "react"

let data = [
    {
        id: 1,
        name: 'Cody F(REPLACE ME)',
        receptions: 45,
        yards: 502,
        touchdowns: 11,
        drops: 8,
        conversions: 12
    },
    {
        id:2,
        name: 'Timmah(REPLACE ME)',
        receptions: 52,
        yards: 402,
        touchdowns: 8,
        drops: 1,
        conversions: 9
    },
    {
        id: 3,
        name: 'Billy Joe(REPLACE ME)',
        receptions: 27,
        yards: 295,
        touchdowns: 8,
        drops: 4,
        conversions: 5
    }
]


export default function OffenseTable(){

    const [tableData, setTableData] = useState(data)

    

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
            <OffAddButton/>
        </>
    )
}