import Confession from "./ConfessionItem";
function ConfessionList(){
    return (<div className="feed">

        <div className="feedWrapper">
            {Confession.map((p) => (
                <Confession confession={p} />
            ))}
        </div>
    </div>)
}