import React, {useEffect, useRef} from 'react';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      legend: {
        data: ['月', '酒', '剑'],
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
        data: ['10岁', '20岁', '30岁', '40岁', '50岁', '60岁'],
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
        splitLine: {
          lineStyle: {
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      series: [{
        name: '剑',
        data: [2, 20, 13, 23, 14, 26],
        type: 'line',
        smooth: true,
        color: '#ff027b',
        areaStyle: {},
        showSymbol: false,
      }, {
        name: '月',
        data: [10, 18, 39, 17, 26, 18],
        type: 'line',
        smooth: true,
        color: '#0581f4',
        areaStyle: {},
        showSymbol: false,
      },{
        name: '酒',
        data: [13, 16, 24, 45, 17, 11],
        type: 'line',
        smooth: true,
        color: '#34b56f',
        areaStyle: {},
        showSymbol: false,
      },]
    }))
  }, []);
  return(
    <div className="bordered 诗">
      <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  )
}