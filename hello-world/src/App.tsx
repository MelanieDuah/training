import './App.css'
//import Greeting from './component/Greeting/Greeting.tsx'
import SongList from './component/Songs/SongList.tsx'

//change the function to the morden way(const App=() =>) of wirtten a function in javascript
const App=() =>{

  return (
    <>
      {/* <Greeting message="Hello"/>
      <Greeting message="Bonjour"  length={3}/> */}
      <SongList/>
    </>
  )
}

export default App
