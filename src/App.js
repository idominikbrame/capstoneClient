import './App.css';
import {Navbar} from './Components/NavBar/Navbar';
import Router from './Router'
const App = () => {
  return (
      <div className={"App"}>


          {/*DOM Tree*/}
          <Navbar />
          {/*Requests */}
          <Router />


      </div>

    )
}

export default App;
