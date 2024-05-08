import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/home'
import Shoppage from './pages/shop'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage/>}
          />
          <Route
            path="/shop"
            element={<Shoppage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App