function CreateConfession({ data }) {
    function handleClick() {

    }
    return (<div>
        <textarea
            style={{ color: "white", backgroundColor: "black" }}
             placeholder={`What's in your mind ${data.displayName} ?`}
            className="shareInput"
            name="confession"
        />
        <button onClick={handleClick}>Confess</button>
    </div>)
}
export default CreateConfession;