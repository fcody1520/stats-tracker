import OffenseRow from "./OffenseRow"
import OffenseHeader from "./OffenseHeader"
import OffAddButton from "./OffAddButton"

export default function OffenseTable(){
    return (
        <>
            <table>
                <OffenseHeader/>
                    <tbody>
                        <OffenseRow 
                        name={'Cody F(REPLACE ME)'} 
                        receptions={45}
                        yards={502}
                        touchdowns={11}
                        drops={8}
                        conversions={12} />
                        <OffenseRow 
                        name={'Timmah(REPLACE ME)'} 
                        receptions={52}
                        yards={402}
                        touchdown={8}
                        drops={1}
                        conversions={9} />
                        <OffenseRow 
                        name={'Billy Joe(REPLACE ME)'} 
                        receptions={27}
                        yards={295}
                        touchdown={8}
                        drops={4}
                        conversions={5} />
                    </tbody>
            </table>
            <OffAddButton/>
        </>
    )
}