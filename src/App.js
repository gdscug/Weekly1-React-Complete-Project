import React from 'react'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Products/>
        </div>
    )
}

export default App