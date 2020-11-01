import './App.css';
import Header from './Header';
import Leftbar from './Leftbar';
import Statistics from './Widgets/Statistics';
import Services from './Widgets/Services';

function App() {
  return (
    <div className="App">
      <Leftbar />
      <div className="content">
        <Header />
        <div className="titleBox">
          <span>Виджеты</span>
          <div className="borderLine"></div>
        </div>

        <div className="Widgets">
          <Statistics />  
          <Services />
        </div>
      </div>
    </div>
  );
}

export default App;
