import React, {useEffect, useRef} from 'react';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var data = [{
      name: '华东',
      value: 100,
      children: [{
        name: '山东',
        value: 30,
        children: [{
          name: '济宁',
          value: 50
        }]
      }, {
        name: '安徽',
        value: 25,
      },{
        name: '江苏',
        value: 25,
      },{
        name: '江西',
        value: 20,
      }]
    },{
      name: '华中',
      value: 30,
      children: [{
        name: '河南',
        value: 20,
        children: [{
          name: '洛阳',
          value: 10,
        }]
      }, {
        name: '湖北',
        value: 10,
      }]
    },{
      name: '西南',
      value: 25,
        children: [{
        name: '四川',
        value: 25,
      }]
    }
    ];
    myChart.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      color: ['#5dac81'],
      legend: {
        data: ['城市'],
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
      center: ['50%', '55%'],
      radius: '70%',
      series: {
        name: '城市',
        type: 'sunburst',
        data: data,
        radius: [60, '70%'],
        itemStyle: {
          borderColor: '#12123b',
          borderRadius: 60,
          borderWidth: px(6)
        },
        label: {
          show: false
        },
        levels: [
          {},
          {
            itemStyle: {
              color: '#a9a9a8'
            },
            label: {
              color: '#12123b'
            }
          },{
            itemStyle: {
              color: '#fcfaf2'
            },
            label: {
              color: '#12123b'
            }
          },{
          itemStyle: {
            color: '#5dac81'
          },
            label: {
              color: '#12123b'
            }
          }
        ]
      }
    }))
  }, []);

  return(
    <div className="bordered 地">
      <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  )
  }