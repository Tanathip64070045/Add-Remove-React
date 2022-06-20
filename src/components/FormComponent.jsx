import { useState,useEffect } from 'react';
import './FormComponent.css';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props)=> {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [formVaild, setFormVaild] = useState(false);


    const inputTitle = (e)=> {
        setTitle(e.target.value);
    }
    
    
    const inputAmount = (e)=> {
        setAmount(e.target.value);
    }


    const saveItem = (e)=>{
        e.preventDefault();
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData);
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length > 0 && amount !== 0;
        setFormVaild(checkData);
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formVaild}>เพิ่มรายการ</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;