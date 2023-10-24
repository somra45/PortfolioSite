import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Root () {
    return (
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
    )
};
const root = ReactDOM.createRoot(document.getElementById('root'));

const initializeApp = () => {
    root.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    );
  }

initializeApp();