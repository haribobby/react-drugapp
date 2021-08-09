
import './App.css';
import DrugItemList from './components/DrugItemList';
import NewDrug from './components/newdrugs/NewDrug';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import WelcomeComp from './components/pages/WelcomeComp';
import { Route, Switch } from 'react-router-dom';
import DashBoard from './components/pages/DashBoard';
import BlogComp from './components/pages/BlogComp';
import Products from './components/pages/Products';
import NotFound from './components/pages/NotFound';
import ProductsView from './components/pages/ProductsView';
import Message from './components/hooks/Message';
import ContextParent from './components/hooks/ContextParent';


const STATIC_DRUD_DATA = [
  {
    id: 'd1',
    title: 'Crocin',
    amount: 14.12,
    isPopular: true,
    desc: 'Crocin Advance is the best medicine for Joint, knee, muscles and other pains which provide fast and effective relief. It is suitable for adults as well as',
  },
  {
    id: 'd2',
    title: 'Zincovit',
    amount: 4.12,
    isPopular: false,
    desc: 'It is a nutritional supplement that restores the amount of vitamins and minerals in your body and helps to improve your overall health.',
  },
  {
    id: 'd3',
    title: 'Lipitor',
    amount: 194.28,
    isPopular: false,
    desc: 'LIPITOR is a prescription medicine that lowers cholesterol in the blood. It lowers the LDL-C ("bad" cholesterol) and triglycerides in your blood',
  },
  {
    id: 'd4',
    title: 'Sildenafil  ',
    amount: 694.88,
    isPopular: true,
    desc: 'Sildenafil is used to treat  function problems (impotence or erectile dysfunction-ED). In combination with sildenafil works',
  }
];
function App() {

  const [drugs, setDrugs] = useState(STATIC_DRUD_DATA);


  const addDrugHandler = (drug) => {
    console.log('In App.js');
    console.log(drug);
    setDrugs((prevDrug) => {
      return [drug, ...prevDrug];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, " Welcome to  React JS!!!..."),
  //   React.createElement(DrugItemList, { items: expenses })
  // );
  return (
    <div className="App">
    <br/> <br/>

      {/* <Message/> */}
      {/* <ContextParent/> */}
      {/* <h2> Welcome to  React JS!!!...</h2> */}
      {/* <DrugItemList
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
       /> */}
      {/* <NewDrug onAddDrug={addDrugHandler}></NewDrug>
      <DrugItemList drugs={drugs} /> */}
      {/* <Header />
      <main>
        <Switch>
          <Route path='/welcome'>
            <WelcomeComp />
          </Route>
          <Route path='/drugs' exact strict>
            <NewDrug onAddDrug={addDrugHandler}></NewDrug>
            <DrugItemList drugs={drugs} />
          </Route>
          <Route path='/dashboard' >
            <DashBoard />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/blog'>
            <BlogComp />
          </Route>
          <Route path='/products/:id'>
            <ProductsView />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer /> */}
      
      <Message/>

    </div>
  );
}

export default App;
