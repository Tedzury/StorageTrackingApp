import './list-item.scss'

const ListItem = (props) => {

    const {name, units, minQuantity, actualQuantity, onDecrease, onIncrease} = props;
    return (
        <li className="item_constainer">
            <span className="item_product">{name}</span>
            <span className="item_min_quatity">{minQuantity}</span>
            <span className="item_units">{units}</span>
            <button type="button" className="item_arrow_left" onClick={onDecrease}></button>
            <span className="item_actual_quantity">{actualQuantity}</span>
            <span className="item_units">{units}</span>
            <button type="button" className="item_arrow_right" onClick={onIncrease}></button>
        </li>
    )
}

export default ListItem;