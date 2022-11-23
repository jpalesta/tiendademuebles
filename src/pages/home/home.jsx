import React from 'react';
import NavBar from '../../Components/NavBar';
import ItemListContainer from '../../Components/ItemListContainer';

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