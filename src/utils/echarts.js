// common options
function lineCommonOptions(xData, yData, legend, seriesCon) {
  const series = []
  for (let index = 0; index < yData.length; index++) {
    const seriesConfig = Object.assign(
      {
        data: [],
        type: 'line',
        smooth: true,
        animationDuration: 2800,
        animationEasing: 'quadraticOut',
      },
      seriesCon || {}
    )
    seriesConfig.data = yData[index]
    if (legend && legend.length > 0) {
      seriesConfig.name = legend[index]
    }
    series.push(seriesConfig)
  }
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      padding: [5, 10],
    },
    legend: {
      data: legend || [],
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      data: xData || [],
    },
    yAxis: {
      axisTick: {
        show: false,
      },
      type: 'value',
    },
    series,
  }
}
function BarCommonOptions(xData, yData, legend, seriesCon) {
  const series = []
  for (let index = 0; index < yData.length; index++) {
    const seriesConfig = Object.assign(
      {
        data: [],
        type: 'bar',
        smooth: true,
        emphasis: {
          focus: 'series',
        },
        animationDuration: 2800,
        animationEasing: 'quadraticOut',
      },
      seriesCon || {}
    )
    seriesConfig.data = yData[index]
    if (legend && legend.length > 0) {
      seriesConfig.name = legend[index]
    }
    series.push(seriesConfig)
  }
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      padding: [5, 10],
    },
    legend: {
      top: 20,
      data: legend || [],
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false,
      },
      data: xData || [],
    },
    yAxis: {
      axisTick: {
        show: false,
      },
      type: 'value',
    },
    series,
  }
}
function PieCommonOptions(data) {
  return {
    tooltip: {
      trigger: 'item',
      padding: [5, 10],
    },
    legend: {
      bottom: 10,
    },
    series: {
      type: 'pie',
      data,
    },
  }
}

function MapCommonOptions() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>{c} (p / km2)',
    },
    visualMap: {
      min: 800,
      max: 50000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered'],
      },
    },
    series: [
      {
        name: '??????18???????????????',
        type: 'map',
        map: 'HK', // ???????????????????????????
        label: {
          show: true,
        },
        data: [
          { name: '?????????', value: 20057.34 },
          { name: '??????', value: 15477.48 },
          { name: '??????', value: 31686.1 },
          { name: '??????', value: 6992.6 },
          { name: '?????????', value: 44045.49 },
          { name: '?????????', value: 40689.64 },
          { name: '?????????', value: 37659.78 },
          { name: '?????????', value: 45180.97 },
          { name: '??????', value: 55204.26 },
          { name: '??????', value: 21900.9 },
          { name: '??????', value: 4918.26 },
          { name: '??????', value: 5881.84 },
          { name: '??????', value: 4178.01 },
          { name: '??????', value: 2227.92 },
          { name: '??????', value: 2180.98 },
          { name: '??????', value: 9172.94 },
          { name: '??????', value: 3368 },
          { name: '??????', value: 806.98 },
        ],
        // ?????????????????????
        nameMap: {
          'Central and Western': '?????????',
          Eastern: '??????',
          Islands: '??????',
          'Kowloon City': '?????????',
          'Kwai Tsing': '??????',
          'Kwun Tong': '??????',
          North: '??????',
          'Sai Kung': '??????',
          'Sha Tin': '??????',
          'Sham Shui Po': '?????????',
          Southern: '??????',
          'Tai Po': '??????',
          'Tsuen Wan': '??????',
          'Tuen Mun': '??????',
          'Wan Chai': '??????',
          'Wong Tai Sin': '?????????',
          'Yau Tsim Mong': '?????????',
          'Yuen Long': '??????',
        },
      },
    ],
  }
}

function MapChinaCommonOptions(data) {
  return {
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x: 'right',
      textStyle: {
        color: '#fff',
      },
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 1.2,
      center: [104.114129, 35.950339],
      label: {
        show: true,
      },
      itemStyle: {
        color: '#B1D0EC',
        shadowBlur: 5,
        shadowColor: '#333',
        borderColor: '#6dbee0',
      },
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data || [],
        silent: true,
        large: true,
      },
    ],
  }
}

export {
  lineCommonOptions,
  BarCommonOptions,
  PieCommonOptions,
  MapCommonOptions,
  MapChinaCommonOptions,
}
