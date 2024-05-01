import { useRef, useState } from 'react'
import style from './saleBanner.module.css'

function SaleBanner({ openClose }) {

    const refCloseButton = useRef(null)
    const refButton = useRef(null)
    const [isOpen, setIsOpen] = useState(openClose)

    function hanleClickOpenClose() {
        setIsOpen(prev => !prev)
    }


    return (
        <div className={style.sale_banner_main_container}>
            <div className={isOpen ? style.close_open_wrapper : style.open_close_wrapper} ref={refCloseButton}>
                <div className={style.sale_banner_title_container}>
                    <div className={style.delivery_in}>Доставимо до <span className={style.time_delivery}>29 хв</span></div>
                    <div>АБО ОТРИМАЙ РОЛ/ПІЦУ В ПОДАРУНОК</div>
                </div>
                <div className={style.image_main_wrapper}>
                    <div className={style.image_container}>
                        <img className={style.element_image} src="https://smaki-maki.com/wp-content/uploads/sites/4/2023/03/banner_21.jpg" alt="" />
                        <div className={style.green_circle_content_container}>
                            <div className={style.green_circle_content}>Обирай піцу</div>
                            <div className={[style.green_circle_image, style.element_image_here].join(' ')}><img src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-card-bg.svg" alt="" /></div>
                        </div>
                    </div>
                    <div className={style.image_container}>
                        <img className={style.element_image} src="https://smaki-maki.com/wp-content/uploads/sites/4/2021/12/kilogram-08.03-fix.jpg" alt="" />
                        <div className={style.green_circle_content_container}>
                            <div className={style.green_circle_content}>
                                <div>970 г</div>
                                <div>Кілограм</div>
                            </div>
                            <div className={style.green_circle_image}>
                                <img src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-card-bg.svg" alt="" />
                                <div className={style.green_circle_basket}>
                                    <div className={style.font_size_first}>852 <span>грн</span></div>
                                    <div className={style.font_size_second}>694 <span>грн</span></div>
                                    <div className={style.green_circle_basket_image}><img src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-card.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.button_background_cont}><button ref={refButton} className={isOpen ? style.open_close_btn_open : style.open_close_btn_close} onClick={hanleClickOpenClose}>АКЦІЇ</button></div>
        </div>
    )
}

export default SaleBanner