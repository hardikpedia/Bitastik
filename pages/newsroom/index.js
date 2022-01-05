import NewsComponent from "../../components/news/news"
import dbConnect from "../../lib/dbconnect"
import News from "../../models/news"

function NewsPage({news}) {
    return (
        <div>
            <NewsComponent data={news}/>
        </div>
    )
}0

export default NewsPage

export async function getStaticProps() {
    dbConnect()
    const data = await News.find({})
    const news = JSON.parse(JSON.stringify(data))
    return {
        props: {
            news: news
        },
        revalidate: 60,
    }
}