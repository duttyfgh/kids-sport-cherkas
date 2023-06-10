import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router'
import { useAppSelector } from '../../../hooks/redux'
import classes from './newsForMainPage.module.css'

const NewsForMainPage = () => {
  const navigate = useNavigate()

  const renavigate = () => {
    navigate('/news')
  }

  const { actualNews } = useAppSelector((state) => state.actualNews)

  const lastActualNews = actualNews[actualNews.length - 1]
  const otherNews = actualNews.slice(0, -1).reverse()

  const renderPlaceholder = () => (
    <div className={classes.newsItem}>
      <img
        src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
        alt="Placeholder"
      />
      <div className={classes.newsDesacitpion}>
        <b>None</b>
        <p>
          <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faClock} /> 8 червня, 2023
        </p>
      </div>
    </div>
  )

  return (
    <div className={classes.actualNews}>
      <div className={classes.newsLine}>
        <div className={classes.redBlock}></div>
        <span>НОВИНИ</span>
        <div className={classes.greenLine}></div>
      </div>

      <div>
        <div className={classes.lastActualNews}>
          <img src={lastActualNews.newsImg} alt="..." />
          <div className={classes.textBlock}>
            <b>{lastActualNews.description}</b>
            <p>news text</p>
            <span>
              <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faClock} />
              {`${lastActualNews.date.dateNumber} ${lastActualNews.date.month}, ${lastActualNews.date.year}`}
            </span>
            <button onClick={renavigate} className={classes.readMore}>
              Читати більше..
            </button>
          </div>
        </div>

        <div className={classes.otherNews}>
          {Array(8)
            .fill(null)
            .map((_, index) => {
              const newsItem = otherNews[index]
              return (
                <div className={classes.newsItem} key={index}>
                  {newsItem ? (
                    <>
                      <img src={newsItem.newsImg} alt="..." />
                      <div className={classes.newsDesacitpion}>
                        <b>{newsItem.description}</b>
                        <p>
                          <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faClock} />
                          {`${newsItem.date.dateNumber} ${newsItem.date.month}, ${newsItem.date.year}`}
                        </p>
                      </div>
                    </>
                  ) : (
                    renderPlaceholder()
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default NewsForMainPage
