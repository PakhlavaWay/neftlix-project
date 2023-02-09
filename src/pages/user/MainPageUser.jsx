import React from 'react'
import Footer from '../../components/User/Footer';
import Header from '../../components/User/Header';
import Main from '../../components/User/Main';
import Movies from '../../components/User/Movies';

const MainPageUser = () => {
  return (
    <>
        <Header />
        <Main />
        <Movies />
        <Footer/>
    </>
  )
}

export default MainPageUser;