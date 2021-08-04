import React, {useEffect, useRef} from 'react';
import './home.scss';
import mainBg from '../images/back.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';
import {Chart7} from '../components/chart-7';
import {Chart8} from '../components/chart-8';
import {Chart9} from '../components/chart-9';

export const Home = () => {
  return (
    <div className="home">
      <main style={{backgroundImage: `url(${mainBg})`}}>
        <section className="section1">
          <Chart1/>
          <Chart2/>
          <Chart3/>
        </section>
        <section className="bordered section2">
          <Chart4/>
          <div className="charts">
              <Chart5/>
              <Chart6/>
          </div>
        </section>
        <section className="bordered section3">
          <Chart7/>
          <Chart8/>
          <Chart9/>
        </section>
      </main>
    </div>
  );
};
