import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chartData: any;
  loadAPI: Promise<any>;

  constructor(
    private _homeService: HomeService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params: any) => {
      this.chartData = this._homeService.getChartData(params.cId);
      const self = this;
      if (!this._homeService.nativeWindow.d3) {
        this.loadScript(self);
      } else {
        this.initiateChart();
      }
    });
  }

  public loadScript(self) {
    const scripts = document.getElementsByTagName('script');

    if (!this._homeService.nativeWindow.d3) {
      const dynamicScripts = 'https://d3js.org/d3.v5.min.js';
      const node = document.createElement('script');
      node.src = dynamicScripts;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      node.onload = function () {
        self.initiateChart();
      };
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }


  initiateChart() {
    const d3 = this._homeService.nativeWindow.d3;
    const chartData =
      'freqCount' in this.chartData
        ? this.chartData.freqCount
        : this.chartData.graph;
    const data = [];

    Object.keys(chartData).forEach((key) => {
      data.push({ d: key.slice(0,5), v: chartData[key] });
    });

    let margin = { top: 30, right: 0, bottom: 30, left: 40 };
    let height = 300;
    let width = 900;

    let y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.v)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    let x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    let yAxis = (g) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(10))
        .call((g) => g.select('.domain').remove())
        .call((g) =>
          g
            .append('text')
            .attr('x', -margin.left)
            .attr('y', 10)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .text('Value')
        );

    let xAxis = (g) =>
      g.attr('transform', `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].d)
          .tickSizeOuter(0)
      );
    const svg = d3
      .select('#chartData')
      .append('svg')
      .attr('viewBox', [0, 0, width, height]);

    svg
      .append('g')
      .attr('fill', '#f4772a')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.v))
      .attr('height', (d) => y(0) - y(d.v))
      .attr('width', x.bandwidth());

    svg.append('g').call(xAxis);

    svg.append('g').call(yAxis);
  }
}
