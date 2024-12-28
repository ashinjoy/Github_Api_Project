
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Router from './routes/Router'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Router/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
