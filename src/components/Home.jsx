import React from 'react';
import '../styles/Home.css'

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar'

const Home = () => {

    useEffect(() => {
        document.title = 'Matchup';
    }, []);

    return (
        <>
            <Navbar />
            <div className="img">
                <div className="maincontent">
                    <p>Get your</p>
                    <p>Perfect Match</p>
                </div>
                <Link to="/profile"

                    className="btn btn-danger"

                >
                    Create Account
                </Link>
            </div>
        </>
    );
};

export default Home;
