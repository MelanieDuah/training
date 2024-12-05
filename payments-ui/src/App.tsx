import './App.css'
import Form from './Components/payments/payment'
import Menubar from './Components/Transactions/menubar'
import Search from './Components/Transactions/search'
import Transactions from './Components/Transactions/transaction'

const App=() =>{

  return (
    <>
    <Menubar />
    <Search />
    <Transactions/>
    <Form />
    </>
  )
}

export default App
