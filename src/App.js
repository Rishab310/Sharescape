import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import PostDetail from './components/post/PostDetail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/post/:id" component={PostDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
