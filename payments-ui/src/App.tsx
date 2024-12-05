import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './View/Home'
import Login from './Components/UseContent/Login'
import PageHeader from './Components/UseContent/PageHeader'
import PageMenu from './Components/UseContent/PageMenu'
import Profile from './Components/UseContent/Profile'
// import HomePage from './Components/Transactions/HomePage'

const App=() =>{

  return (
    <BrowserRouter>
    <PageHeader />
    <PageMenu />
       <Routes>
       <Route path='/' element={<Home/>}>Find A Transaction</Route>
       <Route path="/findTransaction" element={<Profile />} />
          <Route path="/login" element={<Login />} />
      <Route path='/findTransaction' element={<Home/>}>Find A Transaction</Route>
      <Route path='/newTransaction'  element={<Home/>}>New Transaction </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
