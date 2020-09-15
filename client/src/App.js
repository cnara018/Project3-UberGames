import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from "./redux/store/configureStore";
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
              <Main/>
          </BrowserRouter>
        </Provider>
    );
  }
}


export default App;
