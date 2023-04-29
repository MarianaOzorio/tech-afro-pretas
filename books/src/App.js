import './App.css';

import Header from './Components/Header//Header';
import Line from './Components/Line/Line';
import avatar from './Components/Header/Images/avatar-2.png';

function App() {
  return (
    <div className="App">
      <Header
        photo={avatar}
        name='Lucia Costa'
      />
      <Line />
    </div>
  );
}

export default App;