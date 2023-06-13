import { faSquarePlus, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, useState } from 'react'
import { useActions } from '../../../hooks/actions'
import classes from './EditSitePage.module.css'

const EditSitePage = () => {
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
    if (value.length <= 300) {
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
    };
  };



  const addNewsHandler = () => {
    const newsData:terminalArrey = arreyToCollectHandler();
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
            <div>
              <input
                title="Додати день, прклад(02)"
                placeholder="02"
                className={classes.date}
                type="text"
                maxLength={2}
                value={day}
                onChange={handleDayChange}
              />
              <input
                title="Додати місяць, прклад(червень)"
                placeholder="червень"
                className={classes.month}
                type="text"
                maxLength={9}
                value={month}
                onChange={handleMonthChange}
              />
              <input
                title="Додати рік, прклад(2023)"
                placeholder="2023"
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
            <select className={classes.dropDownPanel} onChange={handleSelectChange}>
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
          <textarea onChange={handleLitleDesChange} value={letleDes} maxLength={300} />
          <p className={classes.sumvolsCounter}>Символів: {litleDesChars}/300</p>
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
