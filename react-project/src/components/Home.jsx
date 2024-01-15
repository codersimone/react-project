import React from 'react';
import Table from '../components/Table';

const Home = () => {
    return (
        <div className='home'>
            <div className='mainAccent'>
                <h1 className='mainTitle'>click <strong>сard game</strong> in menu and start learning<br />all those english words by cards</h1>
                <Table />
            </div>
        </div>
    );
}

export default Home;