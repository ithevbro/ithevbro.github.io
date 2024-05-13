import { useParams, useNavigate, Link } from "react-router-dom"
import { getProds } from "../../service/services"
import LoaderMain from "../Loaders/Loader-main"
import style from './pizza_carousel.module.css'
import { useState, useEffect, useContext } from "react"
import { BasketContext } from "../Cart/GlobalStateBasket"
import useBasketActions from "../Cart/BasketActions"

function PizzaCarousel() {
    // для навігації
    let { products, loading } = getProds('pizza')
    let id = useParams().id
    let sliderIndex = products.findIndex(item => item._id === id)
    const [slider, setSlider] = useState(sliderIndex)
    let nav = useNavigate()
    // для корзини
    const [pizzaSize, setPizzaSize] = useState(22)
    const [bortik, setBortik] = useState(false)
    const [ind, setInd] = useState(0)
    const cartContext = useContext(BasketContext).cartData
    const { addToCart, plusElement, minusElement } = useBasketActions()
    let idiwka = products[slider]?._id + ind + (bortik ? 'bortik' : '')
    const idCart = cartContext.find(prod => prod._id === idiwka)
    let updPizza = { ...products[slider], price: products[slider]?.price[ind] + (bortik ? products[slider]?.bortyk[ind] : 0), weight: products[slider]?.weight[ind], _id: idiwka }

    useEffect(() => {
        setSlider(sliderIndex)
        window.scrollTo(0, 0)
    }, [sliderIndex])

    function nextSlide() {
        if (slider == products.length - 1) {
            setSlider(0)
            nav('/pizza/' + products[0]._id)
        } else {
            setSlider(slider + 1)
            nav('/pizza/' + products[slider + 1]._id)
        }
        setPizzaSize(22)
        indexHandler(22)
    }

    function prevSlide() {
        if (slider <= 0) {
            setSlider(products.length - 1)
            nav('/pizza/' + products[products.length - 1]._id)
        } else {
            setSlider(slider - 1)
            nav('/pizza/' + products[slider - 1]._id)
        }
        setPizzaSize(22)
        indexHandler(22)
    }

    function toggleBortik() {
        setBortik(!bortik)
    }

    function indexHandler(size) {
        if (size === 22) {
            setInd(0)
        } else if (size === 30) {
            setInd(1)
        } else {
            setInd(2)
        }
    }

    function currentSize(size) {
        setBortik(false)
        setPizzaSize(size)
        indexHandler(size)
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

    return (
        <ul className={style.wrapper}>
            {loading || slider == -1 ? <LoaderMain /> :
                <>
                    <nav>
                        <ul className={style.nav}>
                            <li><Link to={'/'}>Головна</Link></li>
                            <li><Link to={'/pizza'}>Піца</Link></li>
                            <li>{products[slider].title}</li>
                        </ul>
                    </nav>
                    <li className={style.oneprod}>
                        <button className={style.arrow} onClick={prevSlide}>
                            <img src="/arrow-left-slider.png" alt="" />
                        </button>
                        <div className={style.img_wrapper}> <img src={products[slider].image} alt="" /></div>
                        <div className={style.right}>
                            <p className={style.weight}>{products[slider].weight[ind]} г</p>
                            <h2 className={style.title}>{products[slider].title}</h2>
                            <div className={style.desc_cart_wrapper}>
                                <p className={style.description}>{products[slider].desription}</p>
                                <button className={style.mini_cart} onClick={idCart?.q > 0 ? () => plusElement(idCart) : () => addToCart(updPizza)}>
                                    <span className={style.amount}>{sumMiniCart()}</span>
                                    <span className={style.price}>{bortik ? products[slider].bortyk[ind] + products[slider].price[ind] : products[slider].price[ind]}</span>
                                    <img src="/icon-mini-cart-loaded.svg" alt="" />
                                </button>
                            </div>
                            <ul className={style.pizza_size}>
                                <li id={pizzaSize === 22 ? style.current_pizza_size : ''} onClick={() => currentSize(22)}>22 см</li>
                                <li id={pizzaSize === 30 ? style.current_pizza_size : ''} onClick={() => currentSize(30)}>30 см</li>
                                <li id={pizzaSize === 40 ? style.current_pizza_size : ''} onClick={() => currentSize(40)}>40 см</li>
                            </ul>
                            {pizzaSize > 22 ? <button onClick={toggleBortik} className={`${style.bortik} ${bortik ? style.bortiktrue : ''}`}>{bortik ? 'Видалити сирний бортик' : 'Додати сирний бортик'}</button> : null}
                        </div>
                        <button className={style.arrow} onClick={nextSlide}>
                            <img src="/arrow-right-slider.png" alt="" />
                        </button>
                    </li>
                </>
            }
        </ul>
    )
}

export default PizzaCarousel