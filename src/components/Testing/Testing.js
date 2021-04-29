import NewContentForm from "../NewContentForm/NewContentForm";

const Testing = (props) => {
    return (
        <div>
            <h1>Hello World</h1>
            <NewContentForm func={props.func}/>
        </div>
    )
}

export default Testing;