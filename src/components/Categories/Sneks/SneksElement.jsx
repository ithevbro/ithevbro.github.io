import style from './sneksElement.module.css'


function SneksElement({ data }) {
    return (
        <div className={style.sneks_product}>
            <div className={style.sneks_over}><img src={data.image} alt="" /></div>
            <div className={style.sneks_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}>{data.title}</div>
                <div className={style.sneks_controllers}>
                    <div className={style.product_price}>{data.price} грн</div>
                    <div><button className={style.btn_buy}>КУПИТИ</button></div>
                </div>
            </div>
        </div>
    )
}

export default SneksElement