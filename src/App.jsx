import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css'
import { useState } from 'react';

function App() {

const [principle, setPrinciple] = useState("")
const [rate, setRate] = useState("")
const [year, setYear] = useState("")
const [interest, setInterest] = useState(0)

const [isprinciple, setisPrinciple] = useState(true)
const [israte, setisRate] = useState(true)
const [isyear, setisYear] = useState(true)


const validate = (e) => {
  console.log(e.target.name);
  console.log(e.target.value);
  
  //match(regExp) - return array - if the regExp and the values match
  //              - return null - if it does not match

  //regExp = ^[a-zA-Z0-9]*$ => * is used for accepting combination of the numbers or alphabets
  //we use !! before the regExp for retuning true or false as output value

  // console.log(!!e.target.value.match('^[0-9]*$'));
  
  if(!!e.target.value.match('^[0-9]*$')){
    if(e.target.name == 'principle'){
      setPrinciple(e.target.value)
      setisPrinciple(true)
    }
   else if(e.target.name == 'rate'){
      setRate(e.target.value)
      setisRate(true)
    }
   else{
      setYear(e.target.value)
      setisYear(true)
    }
  }
  else{
    if(e.target.name == 'principle'){
      setPrinciple(e.target.value)
      setisPrinciple(false)
    }
   else if(e.target.name == 'rate'){
      setRate(e.target.value)
      setisRate(false)
    }
   else{
      setYear(e.target.value)
      setisYear(false)
    }
  }
  
}

const handleReset = ()=>{
  setPrinciple("")
  setRate("")
  setYear("")
  setInterest(0)
  setisPrinciple(true)
  setisRate(true)
  setisYear(true)
}

const handleCalculate = ()=>{
  setInterest((principle*rate*year)/100)

  }


  return (
    <>
    <div className="vh-100 w-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="bg-light rounded p-5">
              <h1>Simple Interest App</h1>
              <p>Calculate your simple interest easily</p>
              <div className="bg-warning d-flex justify-content-center align-items-center p-3 rounded mt-4 flex-column">
                <h1>₹{interest}</h1>
                <p>Total Simple Interest</p>
              </div>
              <div className="my-3">
                <TextField id="outlined-basic" value={principle} onChange={(e)=>validate(e)} label="₹ Principle amound" variant="outlined" className='w-100' name='principle'/>
                {!isprinciple && <p className='text-danger'>Invalid Input</p>}
                </div>
              <div className="mb-3">
                <TextField id="outlined-basic" value={rate} onChange={(e)=>validate(e)} label="Rate of Interest (%)" variant="outlined" className='w-100' name='rate' />
                {!israte && <p className='text-danger'>Invalid input</p>}
              </div>
              <div className="mb-3">
                <TextField id="outlined-basic" value={year} onChange={(e)=>validate(e)} label="Year (yr)" variant="outlined" className='w-100' name='year' />
                {!isyear && <p className='text-danger'>Invalid input</p>}
                </div>
              <div className="mb-3 d-flex justify-content-between">
              <Button onClick={handleCalculate} disabled={isprinciple && israte && isyear ? false : true} variant="contained" className='p-3' style={{width:'190px'}} color='success'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" className='p-3'style={{width:'190px'}}>Reset</Button>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
