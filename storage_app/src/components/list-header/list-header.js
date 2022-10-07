import './list-header.scss';



const ListHeader = () => {
    return (
        <div className="list_header_constainer">
            <span className="list_header_product">Продукт на складе</span>
            <span className="list_header_min_quatity">Минимал. кол-во</span>
            <span className="list_header_units">Ед <br/> измерения</span>
            <span className="list_header_decrease">Уменьшить</span>
            <span className="list_header_actual_quantity">Актуальное кол-во</span>
            <span className="list_header_units">Ед <br/> измерения</span>
            <span className="list_header_increase">Увеличить</span>
        </div>
    )
}

export default ListHeader
