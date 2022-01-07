function CreateConfession({data}){
    return (<div>
        <input
            placeholder={`What's in your mind ${data.username} ?`}
            className="shareInput"
        />
        <button>Confess</button>
        </div>)
}

export default CreateConfession