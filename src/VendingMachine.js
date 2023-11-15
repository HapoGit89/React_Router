import React, {useState} from 'react'
import SnackList from './SnackList'
import { snacks } from './Snacks'


function VendingMachine () {
    const [availableSnacks, setavailableSnacks] = useState(snacks)
    return(<div>
        <SnackList snacks={snacks}/>
    </div>)
}


export default VendingMachine


