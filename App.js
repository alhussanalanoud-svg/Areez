import './App.css';
import MyButton from './MyButton';
import Myinput from './MyInput';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingTop: "48px" }}>
        <MyForm />
        <div style={{ marginTop: 16 }}>
          <Myinput placeholder="اكتب اسمك هنا..." />
        </div>
        <div style={{ marginTop: 20 }}>
          <MyButton />
        </div>
      </header>
    </div>
  );
}

export default App;
