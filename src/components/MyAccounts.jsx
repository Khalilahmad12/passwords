import { Link, Route, Routes } from "react-router-dom"


function MyAccounts() {

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0  mt-10 justify-between p-5">
          <Link to={'/solutionswithkhalil'} >solutionswithkhalil</Link>
          <Link to={"/khalilahmad132624"} >khalilahmad132624</Link>
          <Link to={"/kheelomahi1234"} >kheelomahi1234</Link>
          <Link to={"/kheelomahi12345678"} >kheelomahi12345678</Link>
          <Link to={"/khalilvictor2438"} >khalilvictor2438</Link>
          <Link to={"/webminglesolutions"} >webminglesolutions</Link>
          <Link to={"/kheelomahi2438"} >kheelomahi2438</Link>
          <Link to={"/khalilahmad64101"} >khalilahmad64101</Link>
      </div>
     
       
    </>
  )
}

export default MyAccounts
