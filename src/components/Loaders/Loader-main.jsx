import style from './loader.module.css'

function LoaderMain() {
    return (
        <img className={style.loader} src="/main-loading.png" alt="" />
    )
}

export default LoaderMain