import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import subTitle from '../images/box1.png';
import china from '../geo/chinaChange.json';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);

    var data = [
      {name: '绵阳', value: 5},
      {name: '广元', value: 1},
      {name: '成都', value: 2},
      {name: '乐山', value: 3},
      {name: '重庆', value: 5},
      {name: '宜昌', value: 2},
      {name: '荆州', value: 3},
      {name: '岳阳', value: 7},
      {name: '九江', value: 7},
      {name: '马鞍山', value: 7},
      {name: '南京', value: 6},
      {name: '扬州', value: 8},
      {name: '绍兴', value: 2},
      {name: '周口', value: 2},
      {name: '平顶山', value: 3},
      {name: '襄阳', value: 4},
      {name: '孝感', value: 9},
      {name: '武汉', value: 7},
      {name: '南阳', value: 3},
      {name: '西安', value: 4},
      {name: '咸阳', value: 2},
      {name: '宝鸡', value: 1},
      {name: '延安', value: 1},
      {name: '渭南', value: 1},
      {name: '商丘', value: 5},
      {name: '郑州', value: 4},
      {name: '洛阳', value: 5},
      {name: '随州', value: 1},
      {name: '太原', value: 1},
      {name: '忻州', value: 1},
      {name: '徐州', value: 1},
      {name: '淮安', value: 1},
      {name: '常州', value: 3},
      {name: '苏州', value: 2},
      {name: '杭州', value: 2},
      {name: '菏泽', value: 5},
      {name: '济宁', value: 9},
      {name: '泰安', value: 2},
      {name: '商洛', value: 1},
      {name: '开封', value: 3},
      {name: '宿州', value: 1},
      {name: '聊城', value: 1},
      {name: '沧州', value: 1},
      {name: '衡水', value: 1},
      {name: '济南', value: 2},
      {name: '镇江', value: 2},
      {name: '无锡', value: 2},
      {name: '湖州', value: 1},
      {name: '台州', value: 1},
      {name: '六安', value: 1},
      {name: '合肥', value: 1},
      {name: '亳州', value: 1},
      {name: '安阳', value: 2},
      {name: '邯郸', value: 4},
      {name: '北京', value: 1},
      {name: '吕梁', value: 1},
      {name: '宣城', value: 7},
      {name: '池州', value: 3},
      {name: '芜湖', value: 1},
      {name: '安庆', value: 3},
      {name: '黄石', value: 1},
      {name: '永州', value: 1},
      {name: '蚌埠', value: 1},
      {name: '南昌', value: 1},
    ];
    var geoCoordMap = {
      '绵阳': [104.73, 31.48],
      '广元': [105.83, 32.43],
      '成都': [104.06, 30.67],
      '乐山': [103.76, 29.58],
      '重庆': [106.54, 29.59],
      '宜昌': [111.3, 30.7],
      '荆州': [112.24, 30.33],
      '岳阳': [113.09, 29.37],
      '九江': [115.97, 29.71],
      '马鞍山': [118.48, 31.56],
      '南京': [118.78, 32.04],
      '扬州': [119.42, 32.39],
      '绍兴': [120.58, 30.01],
      '周口': [114.65, 33.62],
      '平顶山': [113.29, 33.75],
      '襄阳': [112.14, 32.04],
      '孝感': [113.93, 30.93],
      '武汉': [114.31, 30.52],
      '南阳': [112.54, 33.00],
      '西安': [108.95, 34.27],
      '咸阳': [108.72, 34.36],
      '宝鸡': [107.15, 34.38],
      '延安': [109.47, 36.6],
      '渭南': [109.5, 34.52],
      '商丘': [115.65, 34.44],
      '郑州': [113.65, 34.76],
      '洛阳': [112.44, 34.7],
      '随州': [113.37, 31.72],
      '太原': [112.53, 37.87],
      '忻州': [112.73, 38.42],
      '徐州': [117.2, 34.26],
      '淮安': [119.15, 33.5],
      '常州': [119.95, 31.79],
      '苏州': [120.62, 31.32],
      '杭州': [120.19, 30.26],
      '菏泽': [115.48, 35.23],
      '济宁': [116.59, 35.38],
      '泰安': [117.13, 36.18],
      '商洛': [109.94, 33.87],
      '开封': [114.35, 34.79],
      '宿州': [116.98, 33.63],
      '聊城': [115.97, 36.45],
      '沧州': [116.83, 38.33],
      '衡水': [115.72, 37.72],
      '济南': [117, 36.65],
      '镇江': [119.44, 32.2],
      '无锡': [120.29, 31.59],
      '湖州': [120.1, 30.86],
      '台州': [121.42, 28.66],
      '六安': [116.51, 31.75],
      '合肥': [117.27, 31.86],
      '亳州': [115.78, 33.87],
      '安阳': [114.35, 36.1],
      '邯郸': [114.47, 36.6],
      '北京': [116.46, 39.92],
      '吕梁': [111.13, 37.52],
      '宣城': [118.76, 30.95],
      '池州': [117.49, 30.66],
      '芜湖': [118.38, 31.33],
      '安庆': [117.04, 30.51],
      '黄石': [115.08, 30.22],
      '永州': [111.61, 26.43],
      '蚌埠': [117.36, 32.94],
      '南昌': [115.89, 28.68],
    };
    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };

    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      tooltip: {
        trigger: 'item'
      },
      legend: {
        data: [ '流浪中' ],
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
      geo: {
        map: 'CN',
        itemStyle: {
          normal: {   // 普通状态下的样式
            areaColor: '#12123b',
            borderColor: '#bdbdbd'
          },
          emphasis: {
            label: {color: '#fff'},
            areaColor: '#91989f',
          },
        }
      },
      series : [
        {
          name: '流浪中',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 0.2;
          },
          encode: {
            value: 2
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
      ]
    }));
  }, []);
  return (
    <div className="bordered 流浪地图">
        <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  );
};