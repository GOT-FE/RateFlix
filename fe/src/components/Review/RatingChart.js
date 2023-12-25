import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Common } from "../../styles/common";
Chart.register(...registerables);

const RatingChart = ({ ratings }) => {
  const maxCount = Math.max(...ratings);
  const backgroundColors = ratings.map((count) =>
    count === maxCount
      ? `${Common.colors.theme}`
      : `${Common.colors.brightTheme}`
  );

  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: ratings,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "x", // 막대 그래프의 방향을 가로로 설정
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false, // y축 레이블 숨기기
      },
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false, // 격자무늬 제거
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default RatingChart;
