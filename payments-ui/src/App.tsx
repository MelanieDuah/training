import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './View/Home'
// import HomePage from './Components/Transactions/HomePage'

const App=() =>{

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>Find A Transaction</Route> 
      <Route path='/findTransaction' element={<Home/>}>Find A Transaction</Route>
      <Route path='/newTransaction'  element={<Home/>}>New Transaction </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
