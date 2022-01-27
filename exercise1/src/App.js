
import './App.css';
import LeftNews from './components/LeftNews';
import RightNews from './components/RightNews';
import TimanttiTitle from './components/TimanttiTitle';
import TopTitle from './components/TopTitle';

function App() {
  return (
    <div className="App">      
        
        <h5 className='topBar'><TopTitle /></h5>
        <TimanttiTitle />
        <div className='news'>
        <LeftNews />  
        <RightNews />
        </div>
    </div>
  );
}

export default App;
