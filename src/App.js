import './App.css';
import UseStateClass from './components/UseStateClass';
import UseEffectClass from './components/UseEffectClass';
import UseContextClass from './components/UseContextClass';
import UseReducerClass from './components/UseReducerClass';
import OtherHooks from './components/OtherHooks';
function App() {
  return (
    <div className="App">
      <UseStateClass/>
      <UseEffectClass/>
      <UseContextClass/>
      <UseReducerClass/>
      <OtherHooks/>
    </div>
  );
}

export default App;
