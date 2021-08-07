import React, {useEffect, useRef} from 'react';
import subTitle6 from '../images/chart6.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '政绩', 1:0, 2:1, 3:0},
    {name: '政绩', 1:0, 2:0, 3:2},
    {name: '文学', 1:3, 2:0, 3:0},
  ]

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '政绩', 1:0, 2:Math.random() * 5, 3:0},
        {name: '政绩', 1:0, 2:0, 3:Math.random() * 5},
        {name: '文学', 1:Math.random() * 5, 2:0, 3:0},
      ];
      x(newData)
    },1000)
  },[])

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        data: ['文学', '政绩'],
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
      angleAxis: {
        max: 4,
        axisLine: {show: false},
        axisTick: false,
        axisLabel: false,
        splitLine: {
          show: false
        },
      },
      radiusAxis: {
        type: 'category',
        data: ['政绩', '政绩', '文学'],
        z: 10,
        axisLine: {show: false},
        axisLabel: false,
        axisTick: false,
        min: -2
      },
      polar: {
        center: ['50%', '55%'],
        radius: '70%',

      },
      series: [{
        type: 'bar',
        data: data.map(i=>i[1]),
        coordinateSystem: 'polar',
        name: '文学',
        roundCap: true,
        stack: 'a',
        itemStyle: {
          color: '#fcfaf2',
        },
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: data.map(i=>i[2]),
        coordinateSystem: 'polar',
        name: '政绩',
        roundCap: true,
        stack: 'a',
        itemStyle: {
          color: '#5dac81',
        },
        emphasis: {
          focus: 'series'
        }
      }, {
        type: 'bar',
        data: data.map(i=>i[3]),
        coordinateSystem: 'polar',
        name: '政绩',
        roundCap: true,
        stack: 'a',
        itemStyle: {
          color: '#5dac81',
        },
        showBackground: true,
        emphasis: {
          focus: 'series'
        }
      }],
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);
  return(
    <div className="bordered 木">
      <div style={{backgroundImage: `url(${subTitle6})`}} ref={divRef} className="chart"></div>
    </div>
  )
}