import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routeComponent/routeConponent';
import CartProvider from './context/cartContext';
import './utils.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <Routes />
                </CartProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
