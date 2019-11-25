import React from 'react'
import { Bar } from 'react-chartjs-2';

class MyChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['Score 1','Score 2', 'Score 3'],
        datasets: [
          {
            label: 'Sentiment Score',
            data: [2,8,5,0],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    }
  }


  // componentDidMount(){
  //   this.setState({
  //     chartData: {
  //       datasets: [
  //         {
  //           data: this.getScores()
  //         }
  //       ]
  //     }
  //   })
  // }
  render(){
    console.log('whats this', this.props)
    return(
      <div className= 'chart'>
        <Bar
          data={this.state.chartData}
          // width={200}
          // height={100}
          // options={{ maintainAspectRatio: true }}
        />
      </div>
    )
  }
}

  export default MyChart
