import { use, useState } from 'react'
import './App.css'
import MyAccounts from './components/MyAccounts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SolutionsWithKhalil from './components/Emails/SolutionsWithKhalil'
import KhalilAhmad132624 from './components/Emails/khalilahmad132624'
import KheeloMahi1234 from './components/Emails/KheeloMahi1234'
import KheeloMahi12345678 from './components/Emails/KheeloMahi12345678'
import KhalilVictor2438 from './components/Emails/KhalilVictor2438'
import WebMingleSolutions from './components/Emails/WebMingleSolutions'
import KheeloMahi2438 from './components/Emails/KheeloMahi2438'
import KhalilAhmad64101 from './components/Emails/khalilahmad64101'

function App() {
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)
  const [error , setError] = useState(false)

  const myFunction = () => {
    if (password === "ayeshakhalil") {
      setOpen(true)
    } else if (password === "kheelomahi") {
      setOpen(true)
    } else {
      setOpen(false)
      setError(true)
    }
  }

  return (
    <BrowserRouter>
      <>
        {!open && (
          <div className='flex flex-col justify-center items-center h-80'>
            <div className='bg-blue-200 shadow-2xl p-2 h-80 w-60 mt-20 flex flex-col justify-center items-center rounded-2xl'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='border-2 border-blue-700 bg-transparent py-2 w-full px-2'
                placeholder='Enter Password'
                type="password"
              />
              {error && <p>Enter your nickname or AK</p>}
              <br />
              <button
                onClick={myFunction}
                className='bg-blue-700 text-white font-semibold py-2 w-full'
              >
                Log in
              </button>
            </div>
          </div>
        )}

        {open && <MyAccounts />}

        {open && 
         <Routes>
          <Route path='/solutionswithkhalil' element={<SolutionsWithKhalil />} />
          <Route path='/khalilahmad132624' element={<KhalilAhmad132624 />}/>
          <Route path='/kheelomahi1234' element={<KheeloMahi1234 />} />
          <Route path='/kheelomahi12345678' element={<KheeloMahi12345678 />} />
          <Route path='/khalilvictor2438'  element={<KhalilVictor2438 />} />
          <Route path='/webminglesolutions' element={<WebMingleSolutions />} />
          <Route path="/kheelomahi2438" element={<KheeloMahi2438 />} />
          <Route path='/khalilahmad64101' element={<KhalilAhmad64101 />} />
        </Routes>
        }
      </>
    </BrowserRouter>
  )
}

export default App
