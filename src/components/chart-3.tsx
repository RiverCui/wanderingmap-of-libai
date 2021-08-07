import React, {useEffect, useRef} from 'react';
import subTitle3 from '../images/chart3.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {age: '10岁', 1: 2, 2: 10, 3: 13},
    {age: '20岁', 1: 20, 2: 18, 3: 16},
    {age: '30岁', 1: 13, 2: 39, 3: 24},
    {age: '40岁', 1: 23, 2: 17, 3: 45},
    {age: '50岁', 1: 14, 2: 26, 3: 17},
    {age: '60岁', 1: 26, 2: 18, 3: 11},
  ];

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {age: '10岁', 1: Math.random() * 50, 2: Math.random() * 50, 3: Math.random() * 50},
        {age: '20岁', 1: Math.random() * 50, 2: Math.random() * 50, 3: Math.random() * 50},
        {age: '30岁', 1: Math.random() * 50, 2: Math.random() * 50, 3: Math.random() * 50},
        {age: '40岁', 1: Math.random() * 50, 2: Math.random() * 50, 3: Math.random() * 50},
        {age: '50岁', 1: Math.random() * 50, 2: Math.random() * 50, 3: Math.random() * 50},
        {age: '60岁', 1: Math.random() * 50, 2: Math.random() * 50, 3: Math.random() * 50},
      ];
      x(newData);
    }, 3000);
  }, []);

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      legend: {
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
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(i=>i.age),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 50,
        splitLine: {
          lineStyle: {
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      series: [{
        name: '剑',
        data: data.map(i=>i[1]),
        type: 'line',
        smooth: true,
        color: '#ff027b',
        areaStyle: {
          color: '#ff027b',
          opacity: 0.5
        },
        showSymbol: false,
      }, {
        name: '月',
        data: data.map(i=>i[2]),
        type: 'line',
        smooth: true,
        color: '#0581f4',
        areaStyle: {
          color: '#0581f4',
          opacity: 0.5
        },
        showSymbol: false,
      },{
        name: '酒',
        data: data.map(i=>i[3]),
        type: 'line',
        smooth: true,
        color: '#34b56f',
        areaStyle: {
          color: '#34b56f',
          opacity: 0.5
        },
        showSymbol: false,
      },]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);
  return(
    <div className="bordered 诗">
      <div style={{backgroundImage: `url(${subTitle3})`}} ref={divRef} className="chart"></div>
    </div>
  )
}