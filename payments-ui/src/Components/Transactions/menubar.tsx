// Create a new project called payments-ui. This will be the front-end that will
// connect to the payments database rest application.
// • Create a set of components that will come together to form the user
// interface for the application. This should contain:
// • The application name at the top of the page
// • A menu with the options: “find a transaction” and “new transaction”
// • A search box which would ask for an order_id
// • A List of all the transactions which are found from the search
// • Ensure that there are no errors when the code is run (check the console).

import { useNavigate } from "react-router-dom";


const Menubar = (): React.ReactElement => {
         const navigate=useNavigate();
    return (
      <>
        <nav className="menu-bar">
           <span className="brand">Payment Application</span>
           <ul className="nav-items">
            <li>
              <button>Find A Transaction </button>
            </li>
            <li>
              <button onClick={()=>{navigate(-1)}}>New Transaction </button>
            </li>
           </ul>
            
            </nav> 
      </>
    );
  };
  export default Menubar;
  

  

