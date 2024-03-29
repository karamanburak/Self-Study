import React, { useContext } from 'react'

import AnaUser from './AnaUser'
import { KullaniciContext } from '../context/KullaniciContext'

const Isimler = () => {
const {users} = useContext(KullaniciContext)
  
  return (
    <div>
        {/* diziden 4 kişinin ismini bastir */}
        {users.slice(0,4).map((i)=>(<div style={{textAlign:"center",background:"pink"}}>
            {i.login}
        </div>))}
        <AnaUser/>
    </div>
  )
}

export default Isimler