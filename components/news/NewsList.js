import NewsItem from './NewsItem';
import classes from './NewsList.module.css';

function NewsList(props) {
    return (
        <>
        <Header />
        <ul className={classes.list}>
            {props.data.map((details) => (
                <NewsItem
                    key={details.id}
                    id={details.id}
                    image={details.image}
                    title={details.title}
                    date={details.date}
                />
            ))}
        </ul>
        </>
    );
}

export default NewsList;
