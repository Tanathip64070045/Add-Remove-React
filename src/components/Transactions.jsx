import Item from './Item';
import './Transactions.css';



const Transactions = (props)=> {
    const {items} = props;

    return(
        <div>
            <ul className="item-list">
                {items.map((e)=>{
                    return <Item {...e} key={e.id}/>
                })}
            </ul>
           
        </div>
    )}

    export default Transactions;