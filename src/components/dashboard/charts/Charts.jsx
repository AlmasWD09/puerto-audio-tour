// import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const Chart = ({ chartValue,curdTitle }) => {
//     const [chartHeight, setChartHeight] = useState(440);
//     const [chartData, setChartData] = useState({
//         prices: [],
//         dates: [],
//     });


//     useEffect(() => {
//         if (chartValue?.length > 0) {
//             const dates = chartValue.map(item => item.month); 
//             const prices = chartValue.map(item => item.data);  
//             setChartData({ prices, dates });
//         }
//     }, [chartValue]);

//     const chartOptions = {
//         chart: {
//             type: "area",
//             height: 350,
//             zoom: { enabled: false },
//             toolbar: { show: false },
//         },
//         dataLabels: { enabled: false },
//         stroke: { curve: "smooth" },
//         title: {
//             text: `${curdTitle}`,
//             align: "left",
//         },
//         subtitle: {
//             text: "Dynamic Analytics",
//             align: "left",
//         },
//         xaxis: {
//             categories: chartData.dates,
//             type: "category",
//         },
//         yaxis: {},
//         legend: { horizontalAlign: "left" },
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 640) {
//                 setChartHeight(300);
//             } else if (window.innerWidth < 1024) {
//                 setChartHeight(430);
//             } else {
//                 setChartHeight(440);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <div>
//             <div id="chart" className="bg-[#FFFF] my-6 p-4 rounded-lg">
//                 {chartData.prices.length > 0 ? (
//                     <ReactApexChart
//                         options={chartOptions}
//                         series={[{ name: "Monthly Data", data: chartData.prices }]}
//                         type="area"
//                         height={chartHeight}
//                     />
//                 ) : (
//                     <p>Loading chart...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Chart;


import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ chartValue, curdTitle }) => {
    const [chartHeight, setChartHeight] = useState(440);
    const [chartData, setChartData] = useState({
        prices: [],
        dates: [],
    });

    // Generate fake data if chartValue is empty
    useEffect(() => {
        if (chartValue?.length > 0) {
            const dates = chartValue.map(item => item.month);  // Extract months
            const prices = chartValue.map(item => item.data);  // Extract data values
            setChartData({ prices, dates });
        } else {
            // Generate fake data
            const fakeData = [
                { month: "Jan", data: 40 },
                { month: "Feb", data: 55 },
                { month: "Mar", data: 70 },
                { month: "Apr", data: 60 },
                { month: "May", data: 80 },
                { month: "Jun", data: 90 },
                { month: "Jul", data: 85 },
                { month: "Aug", data: 75 },
                { month: "Sep", data: 95 },
                { month: "Oct", data: 110 },
                { month: "Nov", data: 120 },
                { month: "Dec", data: 130 },
            ];
            const dates = fakeData.map(item => item.month);  // Extract months
            const prices = fakeData.map(item => item.data);  // Extract data values
            setChartData({ prices, dates });
        }
    }, [chartValue]);

    const chartOptions = {
        chart: {
            type: "area",
            height: 350,
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        title: {
            text: `${curdTitle}`,
            align: "left",
        },
        subtitle: {
            text: "Dynamic Analytics",
            align: "left",
        },
        xaxis: {
            categories: chartData.dates, // Dynamic months
            type: "category",
        },
        yaxis: {},
        legend: { horizontalAlign: "left" },
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setChartHeight(300);
            } else if (window.innerWidth < 1024) {
                setChartHeight(430);
            } else {
                setChartHeight(600);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div id="chart" className="bg-[#FFFF] my-6 p-4 rounded-lg">
                {chartData.prices.length > 0 ? (
                    <ReactApexChart
                        options={chartOptions}
                        series={[{ name: "Monthly Data", data: chartData.prices }]}
                        type="area"
                        height={chartHeight}
                    />
                ) : (
                    <p>Loading chart...</p>
                )}
            </div>
        </div>
    );
};

export default Chart;
