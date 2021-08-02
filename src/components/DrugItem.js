
import './DrugItem.css'
import  React , { useState } from 'react';
function DrugItem(props) {

    //const [alias, setAlias] = useState("aliasl 1")
    //let alias = "aliasl 1";

    const clickHandler = () => {
         
        //alias = "alias updated!";
        // setAlias('Alias name Updated!');
       // console.log(alias);
    };
    return (
        <div className="drug-item">
            <div className="drug-item__title"><b>{props.title}</b>
            {/* <p>{alias}</p> */}
            </div>
            <div className="drug-item__description">
                <h2>{props.isPopular ? 'Yes' : 'No'}</h2>
                <h2>{props.desc}</h2>
                <div className="drug-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
    );
}

export default DrugItem;