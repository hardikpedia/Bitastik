import classes from './NewsDetail.module.css'

function NewsDetail({ data }) {
    const { image, title, date, description } = data
    return (<section className={classes.detail}>
        <img
            src={image}
            alt={title}
        />
        <h3>{title}</h3>
        <address>{date}</address>
        <p>{description}</p>
    </section>)
}

export default NewsDetail;