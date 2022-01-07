import ConfessionItem from "./ConfessionItem";


function ConfessionList({confessions}) {
  return (<div className="feed">
    <div className="feedWrapper">
      {confessions.map((p) => (
        <ConfessionItem confession={p} key={p.uid} />
      ))}
    </div>
  </div>)
}
export default ConfessionList;


// export async function getStaticProps() {
//   await dbConnect()
//   const data = await Confession.find({})
//   // const news = JSON.parse(JSON.stringify(data))
//   return {
//     props: {
//       Confession: data.map((info) => ({
//         content: info.description,
//         uid:info.uid,
//       }))
//     },
//     revalidate: 60,
//   }
// }