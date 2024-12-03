
// • Create a component called Song that takes 2 properties: title and
// artist. The component should render these in an <li> tag.
// • Create a component called SongList that will output some songs
// within a <ul> tag. Put some kind of header text in this component.
// • Place the SongList component into the
// App component.
// • The output should look like the
// example shown. (Don't worry about
// styling)

const Song = (props:SongListType) : React.ReactElement => {

const {title,artist}=props

    return (
        <>
    <div>
        <p>{title} ,{artist}</p>
    </div>
        </>
);
}
export default Song;

type SongListType={title:string,
    artist:string
};