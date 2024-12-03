//Can pass in props(properties)

const Greeting = (props: GreetinType) : React.ReactElement => {

    const {message,language,length}=props;

    return (
        <>
          <p key={language}>{message.slice(0,length)}</p>
        </>
);
    }
    export default Greeting;

    type GreetinType={message:string,
        language?: string,
        length?:number};