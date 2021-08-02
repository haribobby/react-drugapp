import React from 'react';

import './NewDrug.css';
import NewDrugForm from './NewDrugForm';

const NewDrug = (props) => {

    const saveDrugDataHandler = (enteredDrugData) => {
        const drugData = {
          ...enteredDrugData,
          id: Math.random().toString()
        };
        props.onAddDrug(drugData);
      };
  return (
    <div className='new-drug'>
      <NewDrugForm onSaveDrugData={saveDrugDataHandler}/>
    </div>
  );
};

export default NewDrug;