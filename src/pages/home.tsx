import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import mainBg from '../images/main.png';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth;

export const Home = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var valueList = [1, 5, 2 ,7, 3, 12];
    myChart.setOption({
      visualMap: {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: valueList.length - 1
      },

      textStyle: {
        fontSize: px(12),
        color: '#ffffff'
      },

      title: {show: false},

      legend: [{
        data: [ '到过的城市' ],
        icon: 'circle',
        itemHeight: px(10),
        itemWidth: px(10),
        top: px(10),
        left: px(10),
        textStyle: {
          color: '#fff',
          fontSize: px(12)
        }
      },
        {
          data: [ '到过的省份' ],
          itemHeight: px(10),
          itemWidth: px(20),
          top: px(10),
          left: px(100),
          itemStyle: {
            color: '#964215',
          },
          textStyle: {
            color: '#fff',
            fontSize: px(12)
          }
        },
      ],

      xAxis: [
        {
          type: 'category',
          data: [ '10岁' , '20岁', '30岁', '40岁', '50岁', '60岁' ],
          axisTick: {show: false},
          axisLine: {
            lineStyle: {
              color: '#91989f',
              width: px(0.5)
            }
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 3) {
                const array = val.split('');
                array.splice(3, 0, '\n');
                return array.join('');
              } else {
                return val;
              }
            }
          },
        }
      ],

      grid: {
        x: px(50),
        y: px(135),
        x2: px(50),
        y2: px(50),
      },

      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 80,
          interval: 20,
          axisLabel: {
            fontSize: px(12),
            formatter: '{value}'
          },
          splitLine: {
            lineStyle: {
              color: '#2c2c4e',
              width: px(0.8)
            }
          },
        },
        {
          type: 'value',
          min: 0,
          max: 20,
          interval: 5,
          axisLabel: {
            fontSize: px(12),
            formatter: '{value}'
          },
          splitLine: {
            lineStyle: {
              color: '#91989f',
              width: px(0.5)
            }
          },
        }
      ],
      series: [
        {
          name: '到过的城市',
          type: 'bar',
          data: [2, 7, 30, 38, 50, 73],
          color: '#fcfaf2',
          barWidth: px(10),
        },
        {
          name: '到过的省份',
          type: 'line',
          yAxisIndex: 1,
          data: valueList,
          smooth: true,
          symbol: 'circle',
          symbolSize: px(6),
          lineStyle: {
            width: px(1.8)
          }
        }
      ]
    })
  },[])
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main style={{backgroundImage: `url(${mainBg})`}}>
        <section className="section1">
          <div className="bordered 管辖统计">
            <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
