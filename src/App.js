
import './App.css';
import Message from './components/hooks/usestate/Message';
import CounterClass from './components/hooks/classcomponentsvshooks/CounterClass';
import CounterHook from './components/hooks/classcomponentsvshooks/CounterHook';
import IntervalHookCounter from './components/hooks/useeffect/IntervalHookCounter';
import HookMouse from './components/hooks/useeffect/HookMouse';
import DataFetching from './components/hooks/useeffect/DataFetching';
import ContextParent from './components/hooks/usecontext/ContextParent';
import CounterReducerExample from './components/hooks/usereducer/CounterReducer';
import AnotherCounterReducer from './components/hooks/usereducer/AnotherCounterReducer';
import ReuseReducerCounter from './components/hooks/usereducer/ReuseReducerCounter';
import FetchingWithEffectAndState from './components/hooks/usereducer/datafetching/FetchingWithEffectAndState';
import InputFocusRef from './components/hooks/useref/InputFocusRef';



function App() {


  return (
    <div className="App">
      <br /> <br />
      {/* <CounterClass/> */}
      {/* <CounterHook/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <ContextParent/> */}
      {/* <CounterReducerExample/> */}
      {/* <AnotherCounterReducer/> */}
      {/* <ReuseReducerCounter/> */}
      {/* <FetchingWithEffectAndState/> */}
      <InputFocusRef/>
    </div>
  );
}

export default App;
