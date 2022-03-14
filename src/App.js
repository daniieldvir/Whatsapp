import './assets/global.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppHeder from './cmps/AppHeder';
import HomePage from './pages/HomePage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas, faHome, faMapMarker);

function App() {
  return (
    <div>
      <AppHeder />
      <main className="container">
        <Router>
          <Route component={HomePage} path="/" />
        </Router>
      </main>
    </div>
  );
}

export default App;
