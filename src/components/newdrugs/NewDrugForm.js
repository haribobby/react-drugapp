import React, { useState } from 'react';

import './NewDrugForm.css';

const NewDrugForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPopular, setEnteredPopular] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDesc, setEnteredDesc] = useState('');

    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDesc: '',
    //   enteredPopular: ''
    // });
   
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
      setEnteredTitle(event.target.value);

      // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    };
  
    const amountChangeHandler = (event) => {
        console.log(event.target.value);
      setEnteredAmount(event.target.value);
    };
  
    const descChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDesc(event.target.value);
    };
    const popularChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredPopular(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        
        const drudAddData = {
          title: enteredTitle,
          popular:enteredPopular,
          desc: enteredDesc,
          amount: enteredAmount,
        };
        console.log(drudAddData);

        props.onSaveDrugData(drudAddData);

        setEnteredTitle('');
        setEnteredPopular('');
        setEnteredAmount('');
        setEnteredDesc('');
      };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-drug__controls'>
        <div className='new-drug__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-drug__control'>
          <label>Popular</label>
          <input type='text' value={enteredPopular} onChange={popularChangeHandler}/>
        </div>
        <div className='new-drug__control'>
          <label>Description</label>
          <input type='text' value={enteredDesc} onChange={descChangeHandler}/>
        </div>
        <div className='new-drug__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className='new-drug__actions'>
        <button type='submit'>Add Drug</button>
      </div>
    </form>
  );
};

export default NewDrugForm;