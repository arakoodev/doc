// src/layouts/HomeLayout.js
import React from 'react';
import Layout from '@theme/Layout';
import styles from './HomeLayout.module.css';

const HomeLayout = ({ children }) => {
    return (
        <Layout>
            <div className="home">
                <div className={styles.homeLayout}>{children}</div>
            </div>
        </Layout>
    );
};

export default HomeLayout;
