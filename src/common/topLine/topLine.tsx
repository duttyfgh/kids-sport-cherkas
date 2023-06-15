import classes from './topLine.module.css'

interface TopLineProps {
    text: string,
    style?: React.CSSProperties
}

const TopLine = ({ text, style }: TopLineProps) => {
    return (
        <div style={style} className={classes.newsLine}>
            <div className={classes.redBlock}></div>
            <span>{text}</span>
            <div className={classes.greenLine}></div>
        </div>
    )
}

export default TopLine