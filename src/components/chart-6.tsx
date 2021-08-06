import React, {useEffect, useRef} from 'react';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
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
        data: ['周一', '周二', '周三'],
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
        data: [0, 0, 3],
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
        data: [1, 0, 0],
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
        data: [0, 2, 0],
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
  }, []);
  return(
    <div className="bordered 木">
      <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  )
}