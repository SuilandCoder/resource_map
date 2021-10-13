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
        },
        children: [{
            name: 'Blackberry',
            value: 1,
            itemStyle: {
                color: '#3e0317'
            }
        }, {
            name: 'Raspberry',
            value: 1,
            itemStyle: {
                color: '#e62969'
            }
        }, {
            name: 'Blueberry',
            value: 1,
            itemStyle: {
                color: '#6569b0'
            }
        }, {
            name: 'Strawberry',
            value: 1,
            itemStyle: {
                color: '#ef2d36'
            }
        }]
    }, {
        name: 'Dried Fruit',
        itemStyle: {
            color: '#c94a44'
        },
        children: [{
            name: 'Raisin',
            value: 1,
            itemStyle: {
                color: '#b53b54'
            }
        }, {
            name: 'Prune',
            value: 1,
            itemStyle: {
                color: '#a5446f'
            }
        }]
    }, {
        name: 'Other Fruit',
        itemStyle: {
            color: '#dd4c51'
        },
        children: [{
            name: 'Coconut',
            value: 1,
            itemStyle: {
                color: '#f2684b'
            }
        }, {
            name: 'Cherry',
            value: 1,
            itemStyle: {
                color: '#e73451'
            }
        }, {
            name: 'Pomegranate',
            value: 1,
            itemStyle: {
                color: '#e65656'
            }
        }, {
            name: 'Pineapple',
            value: 1,
            itemStyle: {
                color: '#f89a1c'
            }
        }, {
            name: 'Grape',
            value: 1,
            itemStyle: {
                color: '#aeb92c'
            }
        }, {
            name: 'Apple',
            value: 1,
            itemStyle: {
                color: '#4eb849'
            }
        }, {
            name: 'Peach',
            value: 1,
            itemStyle: {
                color: '#f68a5c'
            }
        }, {
            name: 'Pear',
            value: 1,
            itemStyle: {
                color: '#baa635'
            }
        }]
    }, {
        name: 'Citrus Fruit',
        itemStyle: {
            color: '#f7a128'
        },
        children: [{
            name: 'Grapefruit',
            value: 1,
            itemStyle: {
                color: '#f26355'
            }
        }, {
            name: 'Orange',
            value: 1,
            itemStyle: {
                color: '#e2631e'
            }
        }, {
            name: 'Lemon',
            value: 1,
            itemStyle: {
                color: '#fde404'
            }
        }, {
            name: 'Lime',
            value: 1,
            itemStyle: {
                color: '#7eb138'
            }
        }]
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