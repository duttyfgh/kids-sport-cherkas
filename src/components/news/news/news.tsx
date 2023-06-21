import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../../common/input/input'
import { useAppSelector } from '../../../hooks/redux'
import classes from './news.module.css'

interface NewsComponentProps {
    news: {
        newsImg: string,
        name: string,
        litleDescription: string,
        date: {
            dateNumber: string,
            month: string,
            year: string
        }
    }
}

const NewsComponent = ({ news: {
    newsImg = 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg',
    name = 'no name',
    date = { dateNumber: '00', month: 'червень', year: '2023' },
    litleDescription = 'no description' } }: NewsComponentProps) => {

    return (
        <div className={classes.lastActualNews}>
            <div className={classes.imgShell}>
                <img src={newsImg} alt="..." />
            </div>
            <div className={classes.textBlock}>
                <b>{name}</b>
                <span><FontAwesomeIcon icon={faClock} /> {`${date.dateNumber} ${date.month} ${date.year}`} </span>
                <p>{litleDescription}</p>
                <button className={classes.readMore}>Читати більше..</button>
            </div>
        </div>
    )
}

const News = () => {
    const { actualNews } = useAppSelector(state => state.actualNews)
    const reversedNews = [...actualNews].reverse()

    return (
        <div className={classes.news}>
            <Input />
            {reversedNews.map(n => <NewsComponent key={n.id} news={n} />)}
        </div>
    )
}

export default News