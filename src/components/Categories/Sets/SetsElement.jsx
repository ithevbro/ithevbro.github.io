import style from './setsElement.module.css'

function SetsElement({ data }) {
    return (
        <div className={style.sets_product}>
            <div className={style.sets_over}><img src={data.image} alt="" /></div>
            <div className={style.sets_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}>{data.title}</div>
                <div className={style.sets_controllers}>
                    <div className={style.product_price}>{data.price} грн</div>
                    <div><button className={style.btn_buy}>КУПИТИ</button></div>
                </div>
                <div className={style.sets_hidden_block_info}>
                    {data.desription}
                </div>
            </div>
        </div>
    )
}

export default SetsElement