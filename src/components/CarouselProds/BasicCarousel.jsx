import { useParams, useNavigate, Link, useLocation } from "react-router-dom"
import { getProds } from "../../service/services"
import LoaderMain from "../Loaders/Loader-main"
import style from './basic_carousel.module.css'
import { useState, useEffect, useContext } from "react"
import { BasketContext } from "../Cart/GlobalStateBasket"
import useBasketActions from "../Cart/BasketActions"

function BasicCarousel() {
    // для навігації
    let path = useLocation().pathname
    let nazva = path.slice(1, path.lastIndexOf('/'))
    let { products, loading } = getProds(nazva)
    let id = useParams().id
    let sliderIndex = products.findIndex(item => item._id === id)
    const [slider, setSlider] = useState(sliderIndex)
    let nav = useNavigate()
    // для корзини
    const cartContext = useContext(BasketContext).cartData
    const { addToCart, plusElement } = useBasketActions()
    const idCart = cartContext.find(prod => prod._id === id)

    useEffect(() => {
        setSlider(sliderIndex)
        window.scrollTo(0, 0)
    }, [sliderIndex])

    function nextSlide() {
        if (slider == products.length - 1) {
            setSlider(0)
            nav(`/${nazva}/` + products[0]._id)
        } else {
            setSlider(slider + 1)
            nav(`/${nazva}/` + products[slider + 1]._id)
        }
    }

    function prevSlide() {
        if (slider <= 0) {
            setSlider(products.length - 1)
            nav(`/${nazva}/` + products[products.length - 1]._id)
        } else {
            setSlider(slider - 1)
            nav(`/${nazva}/` + products[slider - 1]._id)
        }
    }

    function sumMiniCart() {
        let qnt = 0
        let length = id.length
        cartContext.forEach(el => {
            if (id === el._id.slice(0, length)) {
                qnt += el.q
            }
        })
        return qnt
    }

    function navName() {
        switch (nazva) {
            case 'sushi':
                return 'Суші'
            case 'sets':
                return 'Cети'
            case 'snek':
                return 'Фрі та снеки'
            case 'salat':
                return 'Боули'
            case 'drinks':
                return 'Напої'
            default:
                return 'Суші'
        }
    }

    return (
        <ul className={style.wrapper}>
            {loading || slider == -1 ? <LoaderMain /> :
                <>
                    <nav>
                        <ul className={style.nav}>
                            <li><Link to={'/'}>Головна</Link></li>
                            <li><Link to={'/' + nazva}>{navName()}</Link></li>
                            <li>{products[slider].title}</li>
                        </ul>
                    </nav>
                    <li className={style.oneprod}>
                        <button className={style.arrow} onClick={prevSlide}>
                            <img src="/arrow-left-slider.png" alt="" />
                        </button>
                        <div className={style.cont}>
                            <div className={style.img_wrapper}> <img src={products[slider].image} alt="" /></div>
                            <div className={style.right}>
                                <p className={style.weight}>{products[slider].weight} г</p>
                                <h2 className={style.title}>{products[slider].title}</h2>
                                <div className={style.desc_cart_wrapper}>
                                    <p className={style.description}>{products[slider].desription}</p>
                                    <button className={style.mini_cart} onClick={idCart?.q > 0 ? () => plusElement(idCart) : () => addToCart(products[slider])}>
                                        <span className={style.amount}>{sumMiniCart()}</span>
                                        <span className={style.price}>{products[slider].price}</span>
                                        <img src="/icon-mini-cart-loaded.svg" alt="" />
                                    </button>
                                </div>
                                <ul className={style.red}>
                                    <li>
                                        <img src="/scooter-red.svg" alt="" />
                                        <p>Доставимо до <span><b>29</b></span> хвилин </p>
                                    </li>
                                    <li>
                                        <img src="/money-red.svg" alt="" />
                                        <p>Бонуси доступні для оплати наступного замовлення лише в <span><b>додатку</b></span></p>
                                    </li>
                                    {nazva === 'sushi' || nazva === 'sets' ?
                                        < li >
                                            <img src="/info-red.svg" alt="" />
                                            <p>Всі замовлення містять васабі і соєвий соус в обсязі, достатньому для вживання замовленого</p>
                                        </li> : null}
                                </ul>
                            </div>
                        </div>
                        <button className={style.arrow} onClick={nextSlide}>
                            <img src="/arrow-right-slider.png" alt="" />
                        </button>
                    </li>
                </>
            }
        </ul >
    )
}

export default BasicCarousel