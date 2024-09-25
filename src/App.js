import './App.css';
import Person from "./Components/Person";
import Man from "./Components/Man";

function App() {
  return (
    //JSX ->JS + HTMl
    <div className="App">
    <Person name="John" age="23" />
    <Person name="Yash" age="24"/>
   </div>
  );
}

export default App;
