import React, {useState} from 'react'
import SnackList from './SnackList'
import { snacks } from './Snacks'
import "./VendingMachine.css"


function VendingMachine () {
    const [availableSnacks, setavailableSnacks] = useState(snacks)
    return(<div className="MachineChassis">
        <h1>Vending Machine</h1>
        <SnackList snacks={snacks}/>
    </div>)
}


export default VendingMachine


