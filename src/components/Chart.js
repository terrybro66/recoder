import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

const chartConfig = {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        label: "React",
        data: [2, 5, 1, 7],
      },
      {
        label: "Javascript",
        data: [7, 3, 4, 1],
      },
      {
        label: "Css",
        data: [5, 5, 1, 7],
      },
      {
        label: "Clone",
        data: [1, 3, 4, 3],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  const onButtonClick = () => {
    const data = [7, 2, 6, 1];
    updateDataset(0, data);
  };

  return (
    <div className="container2">
      <h1>Chart</h1>
      <div className="char">
        <canvas ref={chartContainer} />
      </div>
      <button onClick={onButtonClick}>Click</button>
    </div>
  );
};

export default Chart;
