import Input from '../../../common/input/input'
import classes from './news.module.css'

const News = () => {
    return (
        <div className={classes.news}>
            <Input />

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/dovhal.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Черкаська боксерка виборола «бронзу» міжнародного турніру</b>
                    <span><i className={'fa-solid fa-clock'}></i> 27 травня, 2023</span>
                    <p>Студентка Черкаського національного університету імені Богдана Хмельницького ННІ фізичної культури...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/sviato.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>На «Черкаси-Арена» до Міжнародного дня захисту дітей провели спортивний фестиваль</b>
                    <span><i className={'fa-solid fa-clock'}></i> 27 травня, 2023</span>
                    <p>Сімейні естафети, змагальний дух, знайомство зі спортивними активностями...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/video-hry8.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Гра Екстра-ліги України з футзалу «ХІТ» – «Ураган» – 2:0</b>
                    <span><i className={'fa-solid fa-clock'}></i> 27 травня, 2023</span>
                    <p>Відео гри: Чемпіонат України з футболу. I ліга. «Полісся» – ФК «ЛНЗ» – 2:1
                        (27.05.2023) Група «А» ФК «Златокрай-2017»...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/1685012484151021-1024x610.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Доненко: На Чемпіонаті Європи головне не підвести наші ЗСУ, які відвойовують мир для України</b>
                    <span><i className={'fa-solid fa-clock'}></i> 27 травня, 2023</span>
                    <p>Доненко: На Чемпіонаті Європи головне не підвести наші ЗСУ, які відвойовують мир для України...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/dovbyk-i-mykolenko-.jpeg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Довбик і Миколенко у списку національної збірної команди України на червневі матчі</b>
                    <span><i className={'fa-solid fa-clock'}></i> 27 травня, 2023</span>
                    <p>Довбик і Миколенко у списку національної збірної команди України на червневі матчі
                        (27.05.2023) Група «А» ФК «Златокрай-2017»...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>
        </div>
    )
}

export default News