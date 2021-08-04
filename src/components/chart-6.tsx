import React, {useEffect, useRef} from 'react';
import subTitle from '../images/box1.png';
import * as echarts from 'echarts';

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);
  return(
    <div className="bordered 木">
      <div style={{backgroundImage: `url(${subTitle})`}} ref={divRef} className="chart"></div>
    </div>
  )
}