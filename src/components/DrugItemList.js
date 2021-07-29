import './DrugItemList.css'
import { useState } from 'react';
function DrugItemList(props) {

  const[title,setTitle] = useState("DruAppTitle");
  console.log(props);

  // let title = "DruAppTitle";

  const changeTitleHandler = () => {
  //  title = "DruAppTitle Changed"
    setTitle("DruAppTitle Changed");
    // console.log("update title.... "+title);
  }

  return (
    <div className="drug-item">
      <div className="drug-item__title"><b>{title}</b></div>
      <div className="drug-item__description">
        <h2>{props.isPopular ? 'Yes' : 'No'}</h2>
        <h2>{props.desc}</h2>
        <div className="drug-item__price">${props.amount}</div>
      </div>
      <button onClick = {changeTitleHandler}>ChangeTitle</button>
    </div>);
}
export default DrugItemList;