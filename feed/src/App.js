import './App.css';

import CardPost from './Components/CardPost/CardPost';
import Forms from './Components/Forms/Forms';
import Header from './Components/Header/Header';
import Line from './Components/Line/Line';

import avatar1 from '../src/Components/CardPost/Images/avatar-1.png';
import avatar2 from '../src/Components/CardPost/Images/avatar-2.png';
import avatar3 from '../src/Components/CardPost/Images/avatar-3.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <Forms />  
      <Line />
      <div className='cardsContainer'>
        <CardPost
          photo={avatar1}
          titulo='Post 1'
          txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <CardPost
          photo={avatar2}
          titulo='Post 2'
          txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        <CardPost
          photo={avatar3}
          titulo='Post 3'
          txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </div>
    </div>
  );
}

export default App;
