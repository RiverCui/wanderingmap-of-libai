import React, {useEffect, useRef} from 'react';
import subTitle7 from '../images/chart7.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '孟浩然', 1:13},
    {name: '杜甫', 1:7},
    {name: '贺知章', 1:9},
    {name: '汪伦', 1:11},
    {name: '崔成甫', 1:6},
  ]

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '孟浩然', 1:Math.random() * 15},
        {name: '杜甫', 1:Math.random() * 15},
        {name: '贺知章', 1:Math.random() * 15},
        {name: '汪伦', 1:Math.random() * 15},
        {name: '崔成甫', 1:Math.random() * 15},
      ]
      x(newData)
    },1000)
  },[])

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      legend: {
        data: ['友情'],
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
      grid: {
        x: px(50),
        y: px(135),
        x2: px(50),
        y2: px(50),
      },
      yAxis: {
        data: data.map(i=>i.name),
        axisLabel:{
          interval: 0,
          formatter: function (value) {
            //x轴的文字改为竖版显示
            var str = value.split("");
            return str.join("\n");
          }
        },
        show: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false,
        },
      },
      xAxis: {
        axisLabel: {show: false},
        max: '15',
        splitLine: {
          lineStyle: {
            color: '#2c2c4e',
            width: px(1)
          }
        },
      },
      series: [{
        name: '友情',
        type: 'pictorialBar', //设置类型为象形柱状图
        symbol: 'roundRect', //图形类型，带圆角的矩形
        barWidth: '5%', //柱图宽度
        barHeight: '5%',
        barMaxWidth: '5%', //最大宽度
        symbolMargin: px(4), //图形垂直间隔
        itemStyle: {
          normal: {
            color: '#fcfaf2'
          }
        },
        z: 1,
        symbolRepeat: true, //图形是否重复
        symbolSize: [px(10), px(15)], //图形元素的尺寸
        data: data.map(i=>i[1]),
      }]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);
  return(
    <div className="bordered 人">
      <div style={{backgroundImage: `url(${subTitle7})`}} ref={divRef} className="chart"></div>
    </div>
  )
}