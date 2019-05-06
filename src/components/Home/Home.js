import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout/Layout';

const Home = () =>{
    return(
        <Layout>
            <p>Hello world of react and webpack </p>
            <p>
                <Link to="/dynamic"> Navigate to Dynamic Page </Link>
            </p>
        </Layout>
    )
};

export default Home;