import React, { useEffect, useRef, useState } from 'react';
import '../../styles/user/dashBoard.css';
import { Line,Doughnut } from 'react-chartjs-2';
import { LineElement,Chart,PointElement,CategoryScale,LinearScale,Tooltip,Legend,registerables,
ArcElement } from 'chart.js';
import 'chartjs-adapter-date-fns';  

Chart.register(LineElement, CategoryScale, LinearScale, PointElement,ArcElement,
   Tooltip, Legend,...registerables);

function DashBoard() {

  // monthWise Chart

  const getLastDay = (month,year) => {
    return  new Date(year,month,0).getDate();
  };

  const labelForMonthWise = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    
    const labels = [];
    for (let i = 1; i <= getLastDay(currentMonth, currentYear); i++) {
      const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      labels.push(dateStr);
    }

    return labels;
};

const [chartData, setChartData] = useState({
  labels: labelForMonthWise(),
  datasets: [
    {
      label: 'MonthWise UrlShortener Clicks',
      data: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 0, 0, 0, 0],
      borderColor: 'aqua',
      backgroundColor: 'aqua',
      tension: 0.4
    }
  ]
});

  const options = {
    plugins: {
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
    scales : {
      xAxis : {
        type : 'time',
        time : {
          unit : 'day',
          displayFormats: {
            day: 'MMM d'
          }
        }
      },
      yAxis : {
        beginAtZero : true
      }
    }
  };

  const monthChange = (month) => {

    const year = month.substring(0, 4);
    const monthValue = month.substring(5,7);

    const changeMonth = [];
    for (let i = 1; i <= getLastDay(monthValue, year); i++) {
      const dateStr = `${year}-${monthValue}-${String(i).padStart(2, '0')}`;
      changeMonth.push(dateStr);
    }

    setChartData({
      ...chartData,
      labels: changeMonth
    });

  };

  const monthWiseReset = () => {
setChartData({
  ...chartData,
  labels : labelForMonthWise()
});
  };

  // dayWise chart

  const [dayData,setDayData] = useState({
    labels : ['today'],
    datasets : [
      {
        label : 'DayWise UrlShortener Clicks',
        data : [5],
        backgroundColor : ['aqua'],
        borderColor : ['aqua'],
        radius : '75%'
      }
    ]
  });

  useEffect( () => {

  },[]);

  return (
    <div>


<div className='chart' >

<div className='dayWise' >

<Doughnut
  data={dayData}
  className='doughnut-chart'
/>

</div>

<div className='monthwise'>

<Line 
data={chartData}
options={options}
className='line-chart'
 />
<input className='monthInput' type='month' onChange={e => monthChange(e.target.value)} />
<button className='monthReset' onClick={monthWiseReset} >Reset</button>

</div>

</div>

    </div>
  )
}

export default DashBoard