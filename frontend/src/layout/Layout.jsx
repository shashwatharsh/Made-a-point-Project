import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import Maps from '../components/Maps/Maps';
import walogo from "../assets/images/waBg.png"


const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Routers />
            <Maps />
            <div className="fixed bottom-14 right-14 bg-[#22ba3d]  py-2 px-4 rounded-full shadow-md z-[99999]">
        <a href="https://wa.me/9897517437?text=I want to know more about Dr. Anuradha's Dental Clinic." target="_blank">
        <img src={walogo} alt=""  className="w-[30px] h-[30px]"/>
        </a>
      </div>
        </main>
        <Footer />
    </>
  );
};

export default Layout;