import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import mainBg from '../images/main.png';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main style={{backgroundImage: `url(${mainBg})`}}>
        <section className="section1">hi</section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
        <section className="section5"></section>
      </main>
    </div>
  );
};
