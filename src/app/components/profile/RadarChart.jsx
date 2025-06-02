"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadarChart = ({
    series = [{ name: "Portfolio", data: [80, 50, 30, 60, 45, 70] }],
    categories = ["Debt", "ETF", "RE", "Equity", "Learn", "Mission"],
    strokeColor = "#86832F",
    gradientFrom = "#F7DB17",
    gradientTo = "#192E47",
    width = 340,
    height = 270,
}) => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        setOptions({
            chart: {
                type: "radar",
                toolbar: { show: false },
                dropShadow: { enabled: true, blur: 5, left: 1, top: 1 },
            },
            stroke: { colors: [strokeColor], width: 1 },
            fill: {
                opacity: 0.2,
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    gradientToColors: [gradientTo],
                    stops: [0, 100],
                },
            },
            markers: { size: 0 },
            xaxis: {
                categories,
                labels: {
                    show: true,
                    rotate: -25,
                    offsetY: 10,
                    style: { colors: "#FFCE40", fontSize: "14px", font: "bold" },

                },
            },
            yaxis: { show: false, min: 0, max: 100 },
            plotOptions: {
                radar: {
                    size: 90,
                    polygons: {
                        strokeColors: strokeColor,
                        connectorColors: strokeColor,
                        fill: { colors: ["transparent"] },
                    },
                },
            },
            tooltip: { theme: "dark", y: { formatter: (val) => `${val}%` } },
        });
    }, [categories, strokeColor, gradientFrom, gradientTo]);

    return (
        <div
            className="relative  overflow-hidden"
            style={{ width: `${width}px`, height: `${height}px ` }}
        >
            {typeof window !== "undefined" && options && (
                <Chart
                    options={options}
                    series={series}
                    type="radar"
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
};

export default RadarChart;
