import NewsItem from './NewsItem';
import classes from './NewsList.module.css';

function NewsList(props) {
    return (
        <>
        <h1>NEWSROOM 101</h1>
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
