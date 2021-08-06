import React, {useEffect, useRef} from 'react';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {baseEchartsOptions} from '../shared/base-echarts-options';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);

    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('');
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    myChart.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      legend: {
        data: ['后世影响', '当世影响'],
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
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        splitLine: {
          show: false
        },
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: '#2c2c4e',
            width: px(0.8)
          }
        },
      },
      series: [{
        name: '当世影响',
        type: 'bar',
        data: data2,
        color: '#fdfcf7',
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }, {
        name: '后世影响',
        type: 'bar',
        data: data1,
        color: '#34b56f',
        emphasis: {
          focus: 'series'
        },
        animationDelay: function (idx) {
          return idx * 10;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    }));
  }, []);
  return (
    <div className="bordered 土">
      <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  );
};