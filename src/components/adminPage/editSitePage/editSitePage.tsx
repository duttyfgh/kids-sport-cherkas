import { faSquarePlus, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, useState } from 'react'
import { useActions } from '../../../hooks/actions'
import classes from './editSitePage.module.css'
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

const EditSitePage: React.FC = () => {
  //chekbox
  const [toodayDate, setToodayDate] = useState(false)

  //photo and drop down panel
  const [photo, setPhoto] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('')

  //counters
  const [nameChars, setNameChars] = useState<number>(0)
  const [litleDesChars, setLitleDesChars] = useState<number>(0)

  //textarea
  const [name, setName] = useState<string>('')
  const [letleDes, setLitleDes] = useState<string>('')
  const [fullDes, setFullDes] = useState<string>('')

  //date
  const [day, setDay] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<string>('')

  //actions
  const { addNews } = useActions()

  //photo handlers
  const addPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setPhoto(URL.createObjectURL(file))
  }

  const deletePhotoHandler = () => {
    setPhoto('')
  }

  //textarea handlers
  const handleNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 116) {
      setNameChars(value.length)
    }
    setName(value)
  }


  const handleLitleDesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 185) {
      setLitleDesChars(value.length)
    }
    setLitleDes(value)
  }



  const handleFullDesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFullDes(e.target.value)
  }


  //sport types handler
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
  }


  //date handlers
  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value)
  }

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value)
  }

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value)
  }


  //to collect terminal arrey
  interface terminalArrey {
    newsImg: string;
    name: string;
    litleDescription: string;
    fullDescription: string;
    date: {
      dateNumber: string;
      month: string;
      year: string;
    };
    type: string;
    id: number
  }

  const arreyToCollectHandler = (): terminalArrey => {
    return {
      newsImg: photo,
      name,
      litleDescription: letleDes,
      fullDescription: fullDes,
      date: {
        dateNumber: day,
        month,
        year,
      },
      type: selectedValue,
      id: 5
    };
  };

  const addNewsHandler = () => {
    const newsData: terminalArrey = arreyToCollectHandler();
    addNews(newsData);
    setPhoto('')
    setName('')
    setLitleDes('')
    setFullDes('')
    setDay('')
    setMonth('')
    setYear('')
    setSelectedValue('')
  };
  //date
  const activateCheckboxHandler = () => {
    setToodayDate(true)
    setDay(dayElement)
    setMonth(monthElement)
    setYear(yearElement)
  }

  const disActivateCheckboxHandler = () => {
    setToodayDate(false)
    setDay('')
    setMonth('')
    setYear('')
  }

  const currentDate = new Date();

  const formattedDate = format(currentDate, 'dd MMMM yyyy', { locale: uk });

  const dateParts = formattedDate.split(' ');
  const dayElement = dateParts[0]; // "18"
  const monthElement = dateParts[1]; // "червня"
  const yearElement = dateParts[2]; // "2023"


  return (
    <div className={classes.editPage}>
      <div className={classes.firstBlock}>
        {photo ? (
          <div>
            <p>Додати фото:</p>
            <div className={classes.photo}>
              <img src={photo} alt="News photo" />
            </div>
            <div title="Видалити фото" className={classes.delitePhoto}>
              <span>Видалити фото</span>
              <FontAwesomeIcon
                onClick={deletePhotoHandler}
                className={classes.deliteIcon}
                icon={faTrashAlt}
              />
            </div>
          </div>
        ) : (
          <div>
            <p>Додати фото:</p>
            <label className={classes.addPhoto} title="Додати фото" htmlFor="addPhoto">
              <FontAwesomeIcon className={classes.plusIcon} icon={faSquarePlus} />
            </label>
            <input style={{ display: 'none' }} type="file" id="addPhoto" onChange={addPhotoHandler} />
          </div>
        )}

        <div className={classes.secondBlock}>
          <div className={classes.dateBlock}>
            <p>Додати дату: </p>
            <div className={classes.toodayDate}>
              <span>Сьогоднішня дата</span>
              {toodayDate
                ? <div className={classes.chacked} onClick={disActivateCheckboxHandler}><FontAwesomeIcon icon={faCheck} /></div>
                : <div className={classes.notChacked} onClick={activateCheckboxHandler}></div>
              }
            </div>
            <div>
              <input
                title="Додати день, прклад(02)"
                placeholder={dayElement}
                className={classes.date}
                type="text"
                maxLength={2}
                value={day}
                onChange={handleDayChange}
              />
              <input
                title="Додати місяць, прклад(червень)"
                placeholder={monthElement}
                className={classes.month}
                type="text"
                maxLength={9}
                value={month}
                onChange={handleMonthChange}
              />
              <input
                title="Додати рік, прклад(2023)"
                placeholder={yearElement}
                className={classes.year}
                type="text"
                maxLength={4}
                value={year}
                onChange={handleYearChange}
              />
            </div>
          </div>
          <div>
            <p className={classes.addTypeNewsText}>Додати тип новини:</p>
            <select className={classes.dropDownPanel} value={selectedValue} onChange={handleSelectChange}>
              <option> </option>
              <option>Футбол</option>
              <option>Баскетбол</option>
              <option>Інші види</option>
            </select>
          </div>
          <button
            onClick={addNewsHandler}
            className={classes.save}
          >
            Додати новину
          </button>
        </div>
      </div>

      <div className={classes.addTextBlok}>
        <div className={classes.addName} title="Додати назву, коротка назва яка буде показуватись на головній сторінці на обложці новини.">
          <p>Додати назву:</p>
          <textarea onChange={handleNameChange} value={name} maxLength={116} />
          <p className={classes.sumvolsCounter}>Символів: {nameChars}/116</p>
        </div>

        <div className={classes.addLitleDes} title="Додати короткий опис, опис який буде показуватись на сторінках: головна, баскетбол и тд.">
          <p>Додати короткий опис:</p>
          <textarea onChange={handleLitleDesChange} value={letleDes} maxLength={185} />
          <p className={classes.sumvolsCounter}>Символів: {litleDesChars}/185</p>
        </div>

        <div className={classes.addFullDes} title="Повний опис який буде показуватись при клікі на новину и буде видкриватися повне окно новини.">
          <p>Додати повний опис:</p>
          <textarea onChange={handleFullDesChange} value={fullDes} />
        </div>
      </div>
    </div>
  )
}

export default EditSitePage
