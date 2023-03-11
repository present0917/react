import './ExpenseForm.css'
import {useState} from 'react'
const ExpenseForm = () => {
    const [TitleChange,setTitleChange]=useState('');
    const TitleChangeHandler=(event)=>{
        setTitleChange(event.target.value);
    }
    const [NumberChange,setNumberChange]=useState('');
    const NumberChangeHandler=(event)=>{
        setNumberChange(event.target.value);
    }
    const [DateChange,setDateChange]=useState('');
    const DateChangeHandler=(event)=>{
        setDateChange(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const submitData =
        {
            title:TitleChange,
            number:NumberChange,
            date:DateChange
        }
        console.log(submitData);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={TitleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={NumberChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;