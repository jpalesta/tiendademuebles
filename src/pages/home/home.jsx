import React from 'react';
import NavBar from '../../components/navBar';
import ItemListContainer from '../../components/itemListContainer';

const Home = () => {
    return (
        <>
            <NavBar/>
            <h2>Nuestro Productos</h2>
            <ItemListContainer className= "lista"/>
        </>

    )
}

export default Home