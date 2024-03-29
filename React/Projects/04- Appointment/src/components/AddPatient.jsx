import React, { useState } from 'react'
import uuid from "react-uuid"
const AddPatient = ({hastalar, setHastalar, doctors}) => {
  const [hastaName, setHstName] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setHastalar(
      [...hastalar, {
        id:uuid(),
        patientName: hastaName, 
        day:date, 
        isDone:false,
        myDoctor:doctors[0].doctorName
      } ]
    )
    setHstName("")
    setDate("")
    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={hastaName} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır

  }
console.log(hastalar);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Patient Information</label>
          <input type="text" id='name'  
            onChange={(e)=> setHstName(e.target.value)}
            value={hastaName}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="">Day & Time</label>
          <input type="datetime-local" 
            onChange={(e)=>setDate(e.target.value)}
            value={date}
          />
        </div>
        <div>
        <button type='submit'
        className='doc'
        >
        <span>{doctors[0].doctorName} </span> icin kayit olustur
        </button>
        </div>
      </form>
    </div>
  )
}

export default AddPatient
