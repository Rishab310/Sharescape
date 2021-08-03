import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';
import CreatePost from './components/post/CreatePost';
import PostDetail from './components/post/PostDetail';
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div></div>;
  return children
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/create" component={CreatePost} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
