import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

const barData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Correct',
      data: [150, 80, 120, 40, 60, 160, 70],
      backgroundColor: '#0C99FF',
      borderRadius: 6,
      barPercentage: 0.6,
    },
    {
      label: 'Mistakes',
      data: [100, 60, 90, 30, 50, 70, 50],
      backgroundColor: '#FFC24C',
      borderRadius: 6,
      barPercentage: 0.6,
    },
  ],
}

const barOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: '#E5EFFF' }, beginAtZero: true, max: 180 },
  },
}

const doughnutData = {
  labels: ['Fluency Progress', 'Other'],
  datasets: [
    {
      data: [1323, 1500-1323],
      backgroundColor: ['#0C99FF', '#FFC24C'],
      borderWidth: 0,
      cutout: '75%',
    },
  ],
}

const doughnutOptions = {
  cutout: '75%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
}

const Report = () => {
  return (
    <section className='bg-[#F0F7FF] pb-[85px]'>
      <div className='containerS'>
        <div className='text-center pt-[51px]'>
          <h2 className='text-4xl font-bold mb-[15px]'>Your Learning <span className='text-[#0C99FF]'>Report</span></h2>
          <p className='text-[18px] font-normal'>Monitor your learning journey and focus on what matters most.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 justify-center mt-10'>
          <div className='bg-white rounded-xl p-6 flex-1 min-w-[320px] max-w-[400px] h-[250px]'>
            <div className='flex justify-between items-center mb-4'>
              <span className='font-semibold text-lg'>Performance</span>
              <div className='flex gap-2'>
                <button className='px-2 py-1 rounded bg-[#E5EFFF] text-[#0C99FF] text-xs font-medium'>Day</button>
                <button className='px-2 py-1 rounded bg-white border border-[#0C99FF] text-[#0C99FF] text-xs font-bold'>Week</button>
                <button className='px-2 py-1 rounded bg-[#E5EFFF] text-[#0C99FF] text-xs font-medium'>Month</button>
              </div>
            </div>
            <Bar data={barData} options={barOptions} height={120} />
          </div>
          <div className='bg-white rounded-xl p-6 flex flex-col justify-between min-w-[220px] max-w-[250px] h-[250px]'>
            <span className='font-semibold text-lg mb-4'>Details</span>
            <div className='text-sm mb-2'>
              <div className='flex justify-between mb-1'>
                <span className='text-[12px] mr-3.5'>Total Learned Words</span>
                <span className='font-bold'>1,500</span>
              </div>
              <div className='flex justify-between mb-1'>
                <span className='text-[12px] mr-3.5'>Active Vocabulary Range</span>
                <span className='font-bold'>B2</span>
              </div>
              <div className='flex justify-between mb-1'>
                <span className='text-[12px] mr-3.5'>Accuracy Rate</span>
                <span className='font-bold'>85%</span>
              </div>
            </div>
            <div className='mt-2'>
              <span className='font-semibold text-xs'>Top Mistake Areas:</span>
              <ul className='list-disc ml-5 text-xs mt-1'>
                <li>Word Stress</li>
                <li>Irregular Verbs</li>
                <li>Academic Words</li>
              </ul>
            </div>
          </div>
          <div className='bg-white rounded-xl p-6 flex flex-col items-center min-w-[220px] max-w-[250px] h-[250px]'>
            <span className='font-semibold text-lg mb-4'>Total Count</span>
            <div className='relative w-[120px] h-[120px] flex items-center justify-center'>
              <Doughnut data={doughnutData} options={doughnutOptions} width={120} height={120} />
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <span className='text-xs text-gray-500'>Fluency Progress</span>
                <span className='text-2xl font-bold'>1,323</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Report)