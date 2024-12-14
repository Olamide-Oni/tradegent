import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Stats() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Trading Volume ($M)',
        data: [5, 12, 20, 32, 45, 50],
        borderColor: '#14F195',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Trading Volume'
      }
    }
  };

  return (
    <div className="bg-dark/50 p-8 rounded-2xl backdrop-blur-lg">
      <h3 className="text-3xl font-bold mb-8 text-center">Trading Volume Growth 📈</h3>
      <div className="w-full h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}