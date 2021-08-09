
import './App.css';
import Message from './components/hooks/usestate/Message';
import CounterClass from './components/hooks/classcomponentsvshooks/CounterClass';
import CounterHook from './components/hooks/classcomponentsvshooks/CounterHook';
import IntervalHookCounter from './components/hooks/useeffect/IntervalHookCounter';
import HookMouse from './components/hooks/useeffect/HookMouse';
import DataFetching from './components/hooks/useeffect/DataFetching';
import ContextParent from './components/hooks/usecontext/ContextParent';



function App() {


  return (
    <div className="App">
      <br /> <br />
      {/* <CounterClass/> */}
      {/* <CounterHook/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      <ContextParent/>
    </div>
  );
}

export default App;
