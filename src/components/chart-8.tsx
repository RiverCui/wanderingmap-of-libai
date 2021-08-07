import React, {useEffect, useRef} from 'react';
import subTitle8 from '../images/chart8.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {city: '池州', 1: 44},
    {city: '济宁', 1: 54},
    {city: '九江', 1: 58},
    {city: '马鞍山', 1: 39},
    {city: '南京', 1: 89},
    {city: '武汉', 1: 46},
    {city: '宣城', 1: 58},
  ];

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {city: '池州', 1: 20 + Math.round(Math.random() * 60)},
        {city: '济宁', 1: 20 + Math.round(Math.random() * 60)},
        {city: '九江', 1: 20 + Math.round(Math.random() * 60)},
        {city: '马鞍山', 1: 20 + Math.round(Math.random() * 60)},
        {city: '南京', 1: 20 + Math.round(Math.random() * 60)},
        {city: '武汉', 1: 20 + Math.round(Math.random() * 60)},
        {city: '宣城', 1: 20 + Math.round(Math.random() * 60)},
      ];
      x(newData)
    },1000)
  },[]);

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      legend: [{
        data: ['作诗数'],
        icon: 'circle',
        itemHeight: px(10),
        itemWidth: px(10),
        top: px(10),
        left: px(10),
        textStyle: {
          color: '#fff',
          fontSize: px(12)
        }
      }
      ],
      xAxis: {
        position: 'top',
        type: 'category',
        data: data.map(i => i.city),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            onZero: false,
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      yAxis: {
        inverse: true,
        type: 'value',
        min: 0,
        max: 100,
        splitLine: {
          lineStyle: {
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      series: [{
        name: '作诗数',
        data: data.map(i => i[1]),
        type: 'bar',
        barWidth: px(10),
        label: {
          show: true,
          fontSize: px(12),
          color: '#fcfaf2',
          position: 'bottom',
        },
        itemStyle: {
          normal: {
            barBorderRadius: px(8),
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#fcfaf2'},
                {offset: 0.5, color: '#e2eddf'},
                {offset: 1, color: '#5eaf82'}
              ]
            )
          }
        }
      }]
    }));
  }


  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);
  return (
    <div className="bordered 公">
      <div style={{backgroundImage: `url(${subTitle8})`}} ref={divRef} className="chart"></div>
    </div>
  );
};