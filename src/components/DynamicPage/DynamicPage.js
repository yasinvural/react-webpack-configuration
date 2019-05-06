import React from 'react';

import Layout from '../Layout/Layout';

const DynamicPage = () =>{
    return(
        <Layout>
            <h1>Dynamic Page</h1>
            <p>This page was loaded asynchronously !!</p>
        </Layout>
    )
};

export default DynamicPage;