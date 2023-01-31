import React from 'react'
import Enjoy from "../components/MainPage/Enjoy";
import Watch from "../components/MainPage/Watch";
import Header from "../components/MainPage/Header";
import Main from "../components/MainPage/Main";
import Create from "../components/MainPage/Create";
import Download from "../components/MainPage/Download";
import Questions from "../components/MainPage/Questions";
import Footer from "../components/MainPage/Footer";

const MainPage = () => {
  return (
    <>
        <Header />
        <Main />
        <Enjoy />
        <Watch />
        <Create />
        <Download />
        <Questions />
        <Footer />
    </>
  )
}

export default MainPage