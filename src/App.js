import logo from './logo.svg';
import './App.css';
import DrugItemList from './components/DrugItemList';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {

  const drugs = [
    {
      id: 'd1',
      title: 'Crocin',
      amount: 14.12,
      isPopular: true,
      desc: 'Crocin Advance is the best medicine for Joint, knee, muscles and other pains which provide fast and effective relief. It is suitable for adults as well'
    },
    {
      id: 'd2',
      title: 'Zincovit',
      amount: 4.12,
      isPopular: false,
      desc: 'It is a nutritional supplement that restores the amount of vitamins and minerals in your body and helps to improve your overall health.'
    },
    {
      id: 'd3',
      title: 'Lipitor',
      amount: 194.28,
      isPopular: false,
      desc: 'LIPITOR is a prescription medicine that lowers cholesterol in the blood. It lowers the LDL-C ("bad" cholesterol) and triglycerides in your blood'
    },
    {
      id: 'd4',
      title: 'Sildenafil  ',
      amount: 694.88,
      isPopular: true,
      desc: 'Sildenafil is used to treat  function problems (impotence or erectile dysfunction-ED). In combination with sildenafil works'
    }
  ];

  return (
    <div className="App">
      <Header />
      <div> Hello React!!!! </div>
      {/* <DrugItemList title="lipitor" /> */}
      {/* <DrugItemList title1 = {drugs[0].title} amount1 = {drugs[0].amount} /> */}
      <DrugItemList
        title = {drugs[0].title}
        desc = {drugs[0].desc}
        amount = {drugs[0].amount}
        isPopular = {drugs[0].isPopular}
       />
       <DrugItemList
        title = {drugs[1].title}
        desc = {drugs[1].desc}
        amount = {drugs[1].amount}
        isPopular = {drugs[1].isPopular}
       />
       <DrugItemList
        title = {drugs[2].title}
        desc = {drugs[2].desc}
        amount = {drugs[2].amount}
        isPopular = {drugs[2].isPopular}
       />
       <DrugItemList
        title = {drugs[3].title}
        desc = {drugs[3].desc}
        amount = {drugs[3].amount}
        isPopular = {drugs[3].isPopular}
       />
      <Footer />
    </div>
  );
}

export default App;