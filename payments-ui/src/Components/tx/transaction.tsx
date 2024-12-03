// Create a new project called payments-ui. This will be the front-end that will
// connect to the payments database rest application.
// • Create a set of components that will come together to form the user
// interface for the application. This should contain:
// • The application name at the top of the page
// • A menu with the options: “find a transaction” and “new transaction”
// • A search box which would ask for an order_id
// • A List of all the transactions which are found from the search
// • Ensure that there are no errors when the code is run (check the console).

const Manubar = (): React.ReactElement => {

    return (
      <>
        <nav className="menu-bar">
            <div>
            <button>find a transaction </button>
            <button>new transaction </button>
            </div>
            
            </nav> 
      </>
    );
  };
  export default Manubar;

  type ManubarType = {  transaction: string; NewTransaction: string };
  

