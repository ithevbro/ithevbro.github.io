import style from './sushiElement.module.css'


function SushiElement({ data }) {
    return (
        <div className={style.sushi_product}>
            <div className={style.sushi_over}><img src={data.image} alt="" /></div>
            <div className={style.sushi_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}>{data.title}</div>
                <div className={style.sushi_controllers}>
                    <div className={style.product_price}>{data.price} грн</div>
                    <div><button className={style.btn_buy}>КУПИТИ</button></div>
                </div>
            </div>
            <div className={style.sushi_hidden_block_info}>
                {data.desription}
            </div>
        </div>
    )
}

export default SushiElement