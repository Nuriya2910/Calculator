import { useState } from "react"

function App() {
  const [inp1, setInp1] = useState(null)
  const [inp2, setInp2] = useState(null)
  const [answer, setAns] = useState(null)
  
  function getInp1(e){
    setInp1(e.target.value)
  }

  function getInp2(e){
    setInp2(e.target.value)
  }

  function add(){
    setAns(+inp1+ +inp2)
  }
  function subtract(){
    setAns(+inp1- +inp2)
  }
  function divide(){
    setAns(+inp1/ +inp2)
  }
  function multiply(){
    setAns(+inp1* +inp2)
  }
  function daraja(){
    setAns(Math.pow(+inp1, +inp2))
  }


  return (
    <>
    <div className="App container d-flex mt-5 ">
      <input className="mx-3 form-control" type="number" onChange={getInp1} />
      <input className="mx-3 form-control " type="number" onChange={getInp2} />

      <button onClick={add} className="btn btn-success">+</button>
      <button onClick={subtract} className="btn btn-success mx-3">-</button>
      <button onClick={divide} className="btn btn-success ">/</button>
      <button onClick={multiply} className="btn btn-success mx-3">*</button>
      <button onClick={daraja} className="btn btn-success ">^</button>
    </div>
      <h1 className=" container mx-10 mt-5">{answer}</h1>
    </>
  )
}

export default App
