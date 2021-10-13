import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var data = [{
    name: '光',
    itemStyle: {
        color: '#da0d68'
    },
    children: [{
        name: '光通信',
        value: 3,
        itemStyle: {
            color: '#975e6d'
        }
    }, {
        name: '激光',
        value: 1,
        itemStyle: {
            color: '#e0719c'
        }
    }]
}, {
    name: '芯',
    itemStyle: {
        color: '#da1d23'
    },
    children: [{
        name: '光电芯片',
        value: 1,
        itemStyle: {
            color: '#dd4c51'
        }
    }]
}, {
    name: '屏',
    itemStyle: {
        color: '#e62969'
    },
    children: [{
        name: '新型显示',
        value: 8,
        itemStyle: {
            color: '#c94a44'
        }
    }]
}, {
    name: '端',
    itemStyle: {
        color: '#c94a44'
    },
    children: [{
        name: '智能终端',
        value: 1,
        itemStyle: {
            color: '#b53b54'
        }
    }]
}, {
    name: '网',
    itemStyle: {
        color: '#dd4c51'
    },
    children: [{
        name: '网络安全',
        value: 15,
        itemStyle: {
            color: '#f2684b'
        }
    }]
}, {
    name: '数',
    itemStyle: {
        color: '#e65656'
    },
    children: [{
        name: '大数据',
        value: 5,
        itemStyle: {
            color: '#f89a1c'
        }
    }]
}, {
    name: '下一代信息网络',
    itemStyle: {
        color: '#f68a5c'
    },
    children: [{
        name: '物联网',
        value: 7,
        itemStyle: {
            color: '#fde404'
        }
    },{
        name: '通信网络',
        value: 5,
        itemStyle: {
            color: '#baa635'
        }
    },{
        name: '量子通信',
        value: 1,
        itemStyle: {
            color: '#7eb138'
        }
    }]
}];

option = {
    title: {
        text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
        subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
        textStyle: {
            fontSize: 14,
            align: 'center'
        },
        subtextStyle: {
            align: 'center'
        },
        sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
    },
    series: {
        type: 'sunburst',

        data: data,
        radius: [0, '95%'],
        sort: null,

        emphasis: {
            focus: 'ancestor'
        },

        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};

option && myChart.setOption(option);