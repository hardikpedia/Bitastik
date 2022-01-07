import ConfessionItem from "./ConfessionItem";
import CreateConfession from "./CreateConfession";
import { auth, signInWithGoogle } from '../../firebase/firebase'
import { useRouter } from 'next/router'
function ConfessionList({confessions}) {
  const [user] = useAuthState(auth)
  return (<div className="feed">
    <div className="feedWrapper">
      {confessions.map((p) => (
        <ConfessionItem confession={p} key={p.uid} />
      ))}
    </div>
    <CreateConfession data={user}/>
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