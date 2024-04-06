import React from 'react';
import Header from './shared/Header';
import Navbar from './shared/Navbar';
import LeftSideNav from './shared/LeftSideNav';
import RightSideNav from './shared/RightSideNav';
import BreakingNews from './BreakingNews';
import {useLoaderData} from 'react-router-dom'
import DragonNews from './DragonNews';
const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews/>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10'>
                <div><LeftSideNav/></div>
                <div className='grid md:col-span-2 space-y-3'>{
                    news.map(aNews =><DragonNews key={aNews._id} aNews={aNews}></DragonNews>)
                }</div>
                <div><RightSideNav/></div> 
            </div>
        </div>
    );
};

export default Home;