import ListItem from '../list-item/list-item'
import './list-of-items.scss'



const ListOfItems = ({data, onDecrease, onIncrease}) => {


    const elements = data
    .map(item => {

        const {id, ...itemProps} = item;

        return <ListItem key = {id} {...itemProps} onDecrease = { () => onDecrease(id)} onIncrease= {() => onIncrease(id)}/>
    })

    return (
       <ul className='list_of_items'>
            {elements}
       </ul>
    )
}

export default ListOfItems;
