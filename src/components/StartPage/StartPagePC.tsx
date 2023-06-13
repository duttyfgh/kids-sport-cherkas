import { useAppSelector } from '../../hooks/redux';
import classes from './StartPagePC.module.css';

interface ActualNewsItem {
  newsImg: string;
  name: string;
  date: {
    dateNumber: string;
    month: string;
    year: string;
  };
}

const StartPagePC = () => {
  const { actualNews } = useAppSelector((state) => state.actualNews);

  const renderPlaceholder = () => (
    <div className={classes.separateBlock}>
      <div className={classes.item}>
        <img src="https://techsmagic.com/wp-content/uploads/2021/02/webcam-not-working.jpg" alt="" />
        <div className={classes.blockText}>
          <span style={{ color: 'red' }}>Please add news!</span>
          <span style={{ fontSize: '14px', color: 'red' }}>ERROR</span>
        </div>
      </div>
    </div>
  );

  const renderActualNews = () => {
    if (actualNews.length === 0) {
      return (
        <>
          {renderPlaceholder()}
          {renderPlaceholder()}
          {renderPlaceholder()}
        </>
      );
    }

    const lastActualNews: ActualNewsItem = actualNews.slice(-1)[0];
    const otherNews: ActualNewsItem[] = actualNews.slice(0, -1);

    let separateBlockArray: ActualNewsItem = {
      newsImg: 'https://techsmagic.com/wp-content/uploads/2021/02/webcam-not-working.jpg',
      name: 'Please add news!',
      date: {
        dateNumber: '',
        month: '',
        year: ''
      }
    };

    if (otherNews.length > 2) separateBlockArray = otherNews[otherNews.length - 3];

    return (
      <>
        <div className={classes.bigBlock}>
          <div key={lastActualNews.newsImg}>
            <img src={lastActualNews.newsImg} alt="..." />
            <div className={classes.blockText}>
              <span>{lastActualNews.name}</span>
              <span style={{ fontSize: '18px' }}>{`${lastActualNews.date.dateNumber} ${lastActualNews.date.month}, ${lastActualNews.date.year}`}</span>
            </div>
          </div>
        </div>

        <div className={classes.litleBlock}>
          {otherNews.slice(-2).map((news) => (
            <div className={classes.litleItem} key={news.newsImg}>
              <img src={news.newsImg} alt="..." />
              <div className={classes.blockText}>
                <span>{news.name}</span>
                <span style={{ fontSize: '16px' }}>{`${news.date.dateNumber} ${news.date.month}, ${news.date.year}`}</span>
              </div>
            </div>
          ))}
          {otherNews.length < 1 && renderPlaceholder()}
        </div>

        <div className={classes.separateBlock}>
          <div className={classes.item} key={separateBlockArray.newsImg}>
            <img src={separateBlockArray.newsImg} alt="..." />
            <div className={classes.blockText}>
              <span>{separateBlockArray.name}</span>
              <span style={{ fontSize: '14px' }}>{`${separateBlockArray.date.dateNumber} ${separateBlockArray.date.month}, ${separateBlockArray.date.year}`}</span>
            </div>
          </div>
          {actualNews.length < 4 && renderPlaceholder()}
        </div>
      </>
    );
  };

  return <div className={classes.actualNews}>{renderActualNews()}</div>;
};

export default StartPagePC;
