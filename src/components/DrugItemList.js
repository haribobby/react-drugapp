import './DrugItemList.css'
import DrugItem from './DrugItem';
import { useSelector } from 'react-redux';
function DrugItemList() {

    // console.log(props.drugs);

    const drugs = useSelector(state => state.alldrugs)
    return (
        // <div className="drug-item">
        //     <div className="drug-item__title"><b>{props.title}</b></div>
        //     <div className="drug-item__description">
        //         <h2>{props.isPopular ? 'Yes' : 'No'}</h2>
        //         <h2>{props.desc}</h2>
        //         <div className="drug-item__price">${props.amount}</div>
        //     </div>
        // </div>
        <div className="drug-item__list">

            {drugs.map((drug) => (
                <DrugItem
                    key={drug.id}
                    title={drug.title}
                    desc={drug.desc}
                    amount={drug.amount}
                    isPopular={drug.isPopular}
                />
            ))}
            {/* <DrugItem
            title={props.drugs[0].title}
            desc={props.drugs[0].desc}
            amount={props.drugs[0].amount}
            isPopular={props.drugs[0].isPopular}
        />
        <DrugItem
            title={props.drugs[1].title}
            desc={props.drugs[1].desc}
            amount={props.drugs[1].amount}
            isPopular={props.drugs[1].isPopular}
        />
        <DrugItem
            title={props.drugs[2].title}
            desc={props.drugs[2].desc}
            amount={props.drugs[2].amount}
            isPopular={props.drugs[2].isPopular}
        />
        <DrugItem
            title={props.drugs[3].title}
            desc={props.drugs[3].desc}
            amount={props.drugs[3].amount}
            isPopular={props.drugs[3].isPopular}
        /> */}
        </div >
    );
}

export default DrugItemList; 