import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss'],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        /* data: [350, 450, 100], */
        data: [],
        backgroundColor: ['#6405F0', '#0724E3', '#05A0F0'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private grapicasServices: GraficasService) {}

  ngOnInit(): void {
    this.grapicasServices
      .getUsuariosDataDona()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [
            {
              data: values,
            },
          ],
        };
      });
  }

  get data() {
    return this.doughnutChartData.datasets[0].data;
  }
}
