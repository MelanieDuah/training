import './App.css'
import Menubar from './Components/Transactions/menubar'
import Search from './Components/Transactions/search'
import Transactions from './Components/Transactions/transaction'
import transactions from './Components/Transactions/stubdata'

const App=() =>{

  return (
    <>
    <Menubar />
    <Search />
    <Transactions transactions={transactions} />
    </>
  )
}

export default App
