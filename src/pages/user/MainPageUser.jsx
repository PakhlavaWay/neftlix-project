import React from 'react'
import Footer from '../../components/User/Footer';
import Header from '../../components/User/Header';
import Main from '../../components/User/Main';
import Movies from '../../components/User/Movies';

const MainPageUser = () => {
  return (
    <div className='main__user'>
        <Header />
        <Main />
        <Movies />
        <Footer/>
    </div>
  )
}

export default MainPageUser;