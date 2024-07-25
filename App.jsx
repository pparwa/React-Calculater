//import { useState } from 'react'
import NumberBox from './components/NumberBox'
import KeyPage from './components/KeyPage'
import './App.css'
import   { useState } from 'react'
function App() {
  const [ conclusion , setconclusion] = useState('')
  const [numbers , setnumbers] = useState([]) 

 const handelnumber = (value)=>{
  setnumbers([...numbers,value])
 }
 const handelsum = ()=>{
  console.log("iam diffren")
  const result = numbers.join("").split((/(\D)/g)).map((value)=>value.match(/\d/g) ? parseInt(value) : value).reduce((acc,value,index,array)=>{
    switch(value){

      case '+':
        return (acc = acc + array[index + 1])
      case '-':
        return (acc = acc - array[index + 1]);
      case '*':
         return (acc = acc * array[index + 1]);
      case '/':
           return (acc = acc / array[index + 1]);
       default:
            return acc
    }
  })
  setconclusion(result)
  
 
 }
  return (
    <>
<div className='container'>
  <NumberBox result={conclusion}/>
  <KeyPage   handelnumber={handelnumber} handelsum={handelsum}/>
</div>
    </>
  )
}

export default App
