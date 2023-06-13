import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import NewsForMainPage from '../news/newsForMainPage/newsForMainPage'
import classes from './sartPage.module.css'
import StartPagePC from './StartPagePC'

interface NewsComponentProps {
    news: {
        newsImg: string;
        name: string;
        litleDescription: string;
        fullDescription: string;
        date: {
            dateNumber: string;
            month: string;
            year: string;
        };
        type: string | null
        }
    }


const NewsComponent = (props: NewsComponentProps) => {
    const { newsImg, name, date: { dateNumber, month, year }, } = props.news

    return (
        <div className={classes.actualFirst}>
            <img src={newsImg} alt="..." />
            <div className={classes.blockText}>
                <span>{name}</span>
                <span style={{fontSize: '14px'}}>{`${dateNumber} ${month} ${year}`}</span>
            </div>
        </div>
    )
}


const StartPageLTAndTablet = () => {
    const { actualNews } = useAppSelector(state => state.actualNews)
    console.log(actualNews)
    return (
        <div className={classes.actualNews}>
        {actualNews.slice(2, 5).reverse().map(n => (
            <NewsComponent news={n} key={n.newsImg} />
        ))}
    </div>
    )
}


const StartPage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    let Component

    switch (true) {
        case screenWidth > 1600:
            Component = <StartPagePC />
            break

        default:
            Component = <StartPageLTAndTablet />
            break
    }
    return (
        <div className={classes.startPage}>
            {Component}
            <NewsForMainPage />
        </div>
    )
}

export default StartPage