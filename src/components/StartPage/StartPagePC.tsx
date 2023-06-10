import { useAppSelector } from '../../hooks/redux';
import classes from './StartPagePC.module.css';

const StartPagePC = () => {
  const { actualNews } = useAppSelector((state) => state.actualNews);

  const renderPlaceholder = () => (
    <div className={classes.separateBlock}>
      <div className={classes.item}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC"
          alt=""
        />
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

    const lastActualNews = actualNews.slice(-1)[0];
    const otherNews = actualNews.slice(0, -1);

    return (
      <>
        <div className={classes.bigBlock}>
          <div key={lastActualNews.newsImg}>
            <img src={lastActualNews.newsImg} alt="..." />
            <div className={classes.blockText}>
              <span>{lastActualNews.description}</span>
              <span style={{ fontSize: '18px' }}>{`${lastActualNews.date.dateNumber} ${lastActualNews.date.month}, ${lastActualNews.date.year}`}</span>
            </div>
          </div>
        </div>

        <div className={classes.litleBlock}>
          {otherNews.slice(-2).map((news) => (
            <div className={classes.litleItem} key={news.newsImg}>
              <img src={news.newsImg} alt="..." />
              <div className={classes.blockText}>
                <span>{news.description}</span>
                <span style={{ fontSize: '16px' }}>{`${news.date.dateNumber} ${news.date.month}, ${news.date.year}`}</span>
              </div>
            </div>
          ))}
          {otherNews.length < 2 && renderPlaceholder()}
        </div>

        <div className={classes.separateBlock}>
          {otherNews.slice(0, -2).map((news) => (
            <div className={classes.item} key={news.newsImg}>
              <img src={news.newsImg} alt="..." />
              <div className={classes.blockText}>
                <span>{news.description}</span>
                <span style={{ fontSize: '14px' }}>{`${news.date.dateNumber} ${news.date.month}, ${news.date.year}`}</span>
              </div>
            </div>
          ))}
          {otherNews.length < 2 && renderPlaceholder()}
        </div>
      </>
    );
  };

  return <div className={classes.actualNews}>{renderActualNews()}</div>;
};

export default StartPagePC;
