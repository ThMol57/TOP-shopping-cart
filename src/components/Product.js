import React from "react"
import "../styles/Product.css"

const Product = (props) => {

    return (
        <div className="product">
            <div className="card">
                <img src={props.imgUrl} className="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">{props.price}$</h5>
                <p className="card-text">{props.title}</p>
                <button className="btn btn-primary" data-mug={props.imgUrl} onClick={props.onClick}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Product