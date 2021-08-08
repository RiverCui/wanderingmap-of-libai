import React, {useEffect, useRef} from 'react';
import subTitle1 from '../images/chart1.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {value: 15, name: '华东'},
    {value: 14, name: '华南'},
    {value: 13, name: '华北'},
    {value: 12, name: '西南'},
    {value: 11, name: '西北'},
    {value: 10, name: '东北'},
  ]

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {value: 2 + Math.round(Math.random() * 15), name: '华东'},
        {value: 2 + Math.round(Math.random() * 15), name: '华南'},
        {value: 2 + Math.round(Math.random() * 15), name: '华北'},
        {value: 2 + Math.round(Math.random() * 15), name: '西南'},
        {value: 2 + Math.round(Math.random() * 15), name: '西北'},
        {value: 2 + Math.round(Math.random() * 15), name: '东北'},
      ];
      x(newData)
    },1000)
  },[])

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      color: ['#5dac81','#78c89b','#93e4b6','#afffd2','#cbffee','#e8ffff'],
      legend: {
        data: ['华东','华南','华北','西南','西北','东北'],
        icon: 'circle',
        itemHeight: px(10),
        itemWidth: px(10),
        width: px(10),
        top: px(10),
        left: px(10),
        textStyle: {
          color: '#fff',
          fontSize: px(12)
        }
      },
      series: [
        {
          name: '占比',
          type: 'pie',
          max: 15,
          center: ['50%', '55%'],
          radius: [px(50),px(140)],
          roseType: 'area',
          label: true,
          itemStyle: {
            borderRadius: px(15),
            borderColor: '#12123b',
            borderWidth: px(3)
          },
          data: data
        }
      ]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return(
    <div className="bordered 地">
      <div style={{backgroundImage: `url(${subTitle1})`}} ref={divRef} className="chart"></div>
    </div>
  )
  }