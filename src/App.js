import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Switch>
          <Route path='/search/:searchterm'>
              <div className='app__page'>
                <Sidebar />  
                <SearchPage />   
              </div>
          </Route>
          <Route path='/'>
            
            <div className='app__page'>
              <Sidebar />  
              <RecommendedVideos />   
              </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
