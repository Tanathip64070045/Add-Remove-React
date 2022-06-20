import PropTypes from 'prop-types';
import './Item.css';


const Item = ({title, amount})=> {
    const status = amount<0 ? 'red' : 'green';
    const sym = amount<0 ? '' : '+';
    const formatNumber= (num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }


    return(
    <li className={status}>{title}<span>{sym}{formatNumber(amount)}</span>

    </li>
);    

}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item;