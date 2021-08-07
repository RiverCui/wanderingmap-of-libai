import React, {useEffect, useRef} from 'react';
import subTitle2 from '../images/chart2.png';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {age: '10岁', city: 2, province: 1},
    {age: '20岁', city: 7, province: 5},
    {age: '30岁', city: 30, province: 2},
    {age: '40岁', city: 38, province: 7},
    {age: '50岁', city: 50, province: 3},
    {age: '60岁', city: 73, province: 12},
  ];

  useEffect(() => {
      setInterval(() => {
      const newData = [
        {age: '10岁', city: 2+Math.random() * 20, province: 1+Math.random() * 10},
        {age: '20岁', city: 7+Math.random() * 20, province: 5+Math.random() * 10},
        {age: '30岁', city: 30+Math.random() * 20, province: 2+Math.random() * 10},
        {age: '40岁', city: 38+Math.random() * 20, province: 7+Math.random() * 10},
        {age: '50岁', city: 50+Math.random() * 20, province: 3+Math.random() * 10},
        {age: '60岁', city: 60+Math.random() * 20, province: 12+Math.random() * 10},
      ];
      x(newData);
    }, 1000);
  }, []);

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartsOptions,

      legend: [{
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

      xAxis: [
        {
          type: 'category',
          data: data.map(i => i.age),
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
          data: data.map(i => i.city),
          color: '#fcfaf2',
          barWidth: px(10),
          itemStyle: {
            normal: {
              barBorderRadius: px(8),
            }
          }
        },
        {
          name: '到过的省份',
          type: 'line',
          yAxisIndex: 1,
          data: data.map(i => i.province),
          smooth: true,
          symbol: 'circle',
          symbolSize: px(6),
          lineStyle: {
            width: px(1.8)
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                1, 0, 0, 0,
                [
                  {offset: 0, color: '#ea0577'},
                  {offset: 1, color: '#ca1dfe'}
                ]
              )
            }
          },
        }
      ]
    }))
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  },[]);

  return(
    <div className="bordered 城">
      <div style={{backgroundImage: `url(${subTitle2})`}} ref={divRef} className="chart"></div>
    </div>
  )
}