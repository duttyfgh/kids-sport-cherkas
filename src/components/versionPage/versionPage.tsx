import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TopLine from '../../common/topLine/topLine'
import classes from './versionPage.module.css'

const VersionPage = () => {

    const [isNavActive, setIsNavActive] = useState<boolean>(false)
    const [isDropDownPonel, setIsDropDownPonel] = useState<boolean>(false)

    const versionRef = useRef<HTMLDivElement>(null);

    const isNavActiveHandler = () => {
        setIsNavActive(true)
    }

    const isNavNotActiveHandler = () => {
        setIsNavActive(false)
    }

    const dropDownPonelHandler = () => {
        setIsDropDownPonel(!isDropDownPonel)
    }

    let navClassName
    isNavActive
        ? navClassName = 'activeNav'
        : navClassName = 'notActiveNav'

    let anArrowClassName
    isNavActive
        ? anArrowClassName = 'activeAnArrow'
        : anArrowClassName = 'notActiveAnArrow'



    const scrollToVersion = () => {
        if (versionRef.current) {
            versionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={classes.versionPage}>
            <TopLine text='версії' style={{ marginTop: '35px' }} />

            {isNavActive
                ? <div onClick={isNavNotActiveHandler} className={classes[anArrowClassName]}>{'<'}</div>
                : <div onClick={isNavActiveHandler} className={classes[anArrowClassName]}>{'>'}</div>
            }

            <nav className={classes[navClassName]}>
                <div className={classes.navItem}>
                    <div className={classes.dropDownPonel}>
                        <div onClick={dropDownPonelHandler} className={classes.ponelText}>
                            <span>версії</span>
                            {isDropDownPonel
                                ? <FontAwesomeIcon rotation={270} icon={faCaretDown} />
                                : <FontAwesomeIcon icon={faCaretDown} />
                            }

                        </div>
                        {isDropDownPonel && <div>
                            {/* here will be more version like 1.0, 1.1.. */}
                            <span>версія 1.0</span>
                            <span onClick={scrollToVersion} ref={versionRef}>версія 0.9</span>
                        </div>}
                    </div>
                </div>
                <div className={classes.navItem}>
                    <Link to={'/admin'}>панель адміністратора</Link>
                </div>
            </nav>

            <div>
                <span className={classes.currentVersion}>ВЕРСІЯ 1.0</span>

                <div className={classes.pShell}>

                    <div>
                        <p><span>1.</span> З'явилась сторінка "версії".</p>
                        <p><span>2.</span> Теперь якщо нажати на версію користувача перекине на цю сторінку.</p>
                    </div>
                    <div>
                        <p><span>3.</span> На сторінці версій додано навігаціонна понель яка знаходится з ліва.</p>
                        <p><span>4.</span> Виправлена декілька візуальних помилок.</p>
                    </div>
                    <div>
                        <p><span>5.</span> В навігаціону панель на сторінкі версій перенесено вхід в режим адміністратора.</p>
                        <p><span>6.</span> Змінена панель адміністратора, додано функцію виходу з режиму адміністратора.</p>
                    </div>
                    <div>
                        <p><span>7.</span> Виправлена декілька візуальних помилок.</p>
                    </div>
                </div>
            </div>

            <div>
                <span className={classes.currentVersion}>ВЕРСІЯ 0.9</span>

                <div className={classes.pShell}>

                    <div>
                        <p><span>1.</span> З'явилась панель редагування сайтом.</p>
                        <p><span>2.</span> Якщо ви адміністратор у вас в навігаціонній панелі з'является вкладка "адмін"
                            по кліку на неї відкривается панель редагування.</p>
                    </div>
                    <div>
                        <p><span>3.</span> Теперь адміністратор може додавати новини, але покищо крім нього їх ніхто бачити не буде.</p>
                        <p><span>4.</span> Виправлена купа візуальних помилок.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VersionPage