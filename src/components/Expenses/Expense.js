import './Expense.css';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
function Expense(props)
{

    return ( 
        <Card className="expenses">
        <ExpenseItem
        title={props.title[0].title}
        date={props.title[0].date}
        amount={props.title[0].amount}
        ></ExpenseItem>
        <ExpenseItem
        title={props.title[1].title}
        date={props.title[1].date}
        amount={props.title[1].amount}
        ></ExpenseItem>
        <ExpenseItem
        title={props.title[2].title}
        date={props.title[2].date}
        amount={props.title[2].amount}
        ></ExpenseItem>
    </Card>
    )
}
export default Expense