import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js/dist/types/index';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss'],
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6405F0', '#0724E3', '#05A0F0'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}
}
