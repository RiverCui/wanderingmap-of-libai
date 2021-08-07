import React, {useEffect, useRef} from 'react';
import subTitle8 from '../images/chart8.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
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
        data: ['池州', '济宁', '九江', '马鞍山', '南京', '武汉', '宣城'],
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
        splitLine: {
          lineStyle: {
            color: '#91989f',
            width: px(0.5)
          }
        },
      },
      series: [{
        name: '作诗数',
        data: [44, 54, 58, 39, 89, 46, 58],
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
  }, []);
  return (
    <div className="bordered 公">
      <div style={{backgroundImage: `url(${subTitle8})`}} ref={divRef} className="chart"></div>
    </div>
  );
};