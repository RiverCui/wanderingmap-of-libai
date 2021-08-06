import React, {useEffect, useRef} from 'react';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {px} from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      ...baseEchartsOptions,
      grid: {
        x: px(50),
        y: px(135),
        x2: px(50),
        y2: px(50),
      },
      yAxis: {
        data: ['孟浩然', '杜甫', '贺知章', '汪伦','崔成甫'],
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
        type: 'pictorialBar', //设置类型为象形柱状图
        symbol: 'roundRect', //图形类型，带圆角的矩形
        barWidth: '5%', //柱图宽度
        barHeight: '5%',
        barMaxWidth: '5%', //最大宽度
        symbolMargin: px(4), //图形垂直间隔
        itemStyle: {
          normal: {
            color: '#61b488',
          }
        },
        z: 1,
        symbolRepeat: true, //图形是否重复
        symbolSize: [10, 12], //图形元素的尺寸
        data: [13, 7, 9, 11, 6],
      }]
    }))
  }, []);
  return(
    <div className="bordered 人">
      <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  )
}