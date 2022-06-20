
import Transactions from './components/Transactions';
import FormComponent from './components/FormComponent';
import './App.css';
import { useState, useEffect} from "react";
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router,Routes ,Route ,Link } from 'react-router-dom';


function App() {
  const design = {color:"red",textAlign:"center",fontSize:"1,5rem"}
  
    // const initState = [
    //   {id:1,title:"Rohit",amount:-1000},
    //   {id:2,title:"รววย",amount:12000},
    //   {id:3,title:"เดินทาง",amount:-1000},
    //   {id:4,title:"ฟฟดด",amount:2000}
    // ];
    const [items,setItems] = useState([]);

    const [reportIncome, setReportIncome] = useState(0);
    const [reportExpense, setReportExpense] = useState(0);

    const onAddNewItem = (newItem)=>{
      setItems((prevItems)=>{
        return [newItem,...prevItems]
      })
    }
useEffect(()=>{
  const amounts = items.map(items=>items.amount)
  const income = amounts.filter(e=>e>0).reduce((total,e)=>total+=e,0)
  const expense = ((amounts.filter(e=>e<0).reduce((total,e)=>total+=e,0))*-1)
  setReportIncome(income.toFixed(2))
  setReportExpense(expense.toFixed(2))
  },[items, reportIncome, reportExpense])

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>add-remove</h1>
        
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={ <ReportComponent /> }></Route> 
              <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transactions items={items}/> </>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
