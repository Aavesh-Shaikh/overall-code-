import classes from "./MealItemForm.module.css";
import { useRef } from "react";
import Input from "../../UI/Input";
const MealItemForm = () => {
    const amountInputRef = useRef();


    const submitHandler = event =>{
        event.preventDefault();
        
    }

    return (
        <>
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
             ref={amountInputRef},
            label="Amount" input={{
               
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue: '1',
            }}></Input>
            <button>+ Add</button>
        </form>
        </>
    )
};
export default MealItemForm;