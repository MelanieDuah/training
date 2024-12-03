import Song from "./Song";
const SongList = () : React.ReactElement => {
        return (
            <>
     <ul>
      <h1>
         List of my Favorite Song
      </h1>
        <li>
        <Song title='My Heart will Go On' artist='Cellin Dion'/>
        </li>
        <li>
            <Song title='Cheap Thrills' artist='Sia'/>
        </li>
     </ul>
            </>
    );
    }
    export default SongList;

    
    