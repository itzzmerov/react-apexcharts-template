export const AnalyticsAreaData = {
    options: {
        chart: {
            type: 'area',
            background: "#f4f4f4",
            foreColor: "#333"
        },
        xaxis: {
            categories: [
                "New York",
                "Los Angeles",
                "Chicago",
                "Houston",
                "Philadelphia",
                "Phoenix",
                "San Antonio",
                "San Diego",
                "Dallas",
                "San Jose"
            ]
        },
        fill: {
            colors: ["#F44336"]
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: "Largest US Cities By Population",
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: "25px"
            }
        },
        stroke: {
            curve: 'smooth',
            colors: ['#ff929f'],
        },
    },
    series: [
        {
            name: 'Population',
            data: [
                8550405,
                3971883,
                2720546,
                2296224,
                1567442,
                1563025,
                1469845,
                1394928,
                1300092,
                1026908,
            ],
        },
        {
            name: 'Tax',
            data: [
                3551752,
                2345678,
                8765432,
                3456789,
                7654321,
                4567890,
                8901234,
                5678901,
                9876543,
                6543210,
            ],
        },
    ]
}

export const AnalyticsPieData = {
    options: {
        chart: {
            type: 'pie', // Change type to 'pie'
            background: "#f4f4f4",
            foreColor: "#333"
        },
        fill: {
            colors: ["#F44336", "#2196F3"]
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: "Largest US Cities By Population",
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: "25px"
            }
        },
        stroke: {
            curve: 'smooth',
            colors: ['#ff929f'],
        },
    },
    labels: ["Regular", "Irregular"], // Add labels for each category
    series: [491, 2971] // Just the values for each category
}
