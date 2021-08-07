import React, {useEffect, useRef} from 'react';
import subTitle5 from '../images/chart5.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        data: [ '能力' ],
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
      radar: {
        indicator: [
          { name: '诗歌', max: 100},
          { name: '道经', max: 100},
          { name: '词赋', max: 100},
          { name: '书法', max: 100},
          { name: '剑术', max: 100},
        ],
        center: ['50%', '55%'],
        radius: '70%',
        splitLine: {
          lineStyle: {
            color: '#91989f',
            // 分隔线颜色
            width: px(0.5),
            // 分隔线线宽
          }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
          show: true,
          areaStyle: { // 分隔区域的样式设置。
            color: ['#12123b', '#2a2856'],
            // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
          }
        },
      },
      series: [{
        name: '能力',
        type: 'radar',
        data: [[85, 57, 72, 41, 50]],
        color: '#34b56f',
        areaStyle: {}
      }]
    }))
  }, []);
  return(
    <div className="bordered 水">
      <div style={{backgroundImage: `url(${subTitle5})`}} ref={divRef} className="chart"></div>
    </div>
  )
}