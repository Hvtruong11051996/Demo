document.querySelectorAll('.sidebar_submenu').forEach((e) => {
  e.querySelector('.sidebar_menu_dropdown').onclick = (event) => {
    event.preventDefault();
    e.querySelector('.sidebar_menu_dropdown .dropdown_icon').classList.toggle(
      'active',
    );
    let dropdown_content = e.querySelector('.sidebar_menu_dropdown_content');
    let dropdown_content_lis = dropdown_content.querySelectorAll('li');
    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;
    dropdown_content.classList.toggle('active');
    dropdown_content.style.height = dropdown_content.classList.contains(
      'active',
    )
      ? active_height + 'px'
      : '0';
  };
});

let category_options = {
  series: [44, 55, 41, 17],
  labels: ['Cloths', 'Devices', 'Bags', 'Watches'],
  chart: {
    type: 'donut',
  },
  colors: ['#6ab04c', '#2980b9', '#f39c12', '#d35400'],
};

let category_chart = new ApexCharts(
  document.querySelector('#category_chart'),
  category_options,
);
category_chart.render();

let customer_options = {
  series: [
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [5, 7, 5],
    curve: 'straight',
    dashArray: [0, 8, 5],
  },
  title: {
    text: 'Page Statistics',
    align: 'left',
  },
  legend: {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        ' - ' +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ''
      );
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: [
      '01 Jan',
      '02 Jan',
      '03 Jan',
      '04 Jan',
      '05 Jan',
      '06 Jan',
      '07 Jan',
      '08 Jan',
      '09 Jan',
      '10 Jan',
      '11 Jan',
      '12 Jan',
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + ' (mins)';
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val + ' per session';
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: '#f1f1f1',
  },
};

let customer_chart = new ApexCharts(
  document.querySelector('#customer_chart'),
  customer_options,
);
customer_chart.render();

let darkmode_toggle = document.querySelector('#darkmode_toggle');

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector('body').classList.toggle('dark');
  darkmode_toggle.querySelector('.darkmode_switch').classList.toggle('active');
};

let overlay = document.querySelector('.overlay');
let sidebar = document.querySelector('.sidebar');

document.querySelector('#mobile_toggle').onclick = () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
};
document.querySelector('#sidebar_close').onclick = () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
};
