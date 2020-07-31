import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hourlyozone',
  templateUrl: './hourlyozone.component.html',
  styleUrls: ['./hourlyozone.component.css']
})
export class HourlyozoneComponent implements OnInit, OnChanges {

  @Input('msg') msg: string;

  getOzoneData(message: string) {
    let msg = JSON.parse(message);
    let temp: string[] = [];
    for (var index = 0; index < 24; index++) {
      temp[index] = msg.weather.hourly.data[index].ozone;
    }
    return temp;
  }

  public barChartOzoneOptions: any;

  public barChartLabels: any;
  public barChartType: any;
  public barChartLegend: any;

  // Ozone
  public barChartOzoneData: any[];


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // basic bar chart properties
    this.barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    this.barChartType = 'bar';
    this.barChartLegend = true;

    // Ozone
    this.barChartOzoneOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time difference from current hour'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Miles'
          }
        }]
      }
    };
    this.barChartOzoneData = [
      { data: this.getOzoneData(this.msg), label: 'Ozone', backgroundColor: '#a5d0ee', hoverBackgroundColor: '#43809b' }
    ];

  }

  ngOnInit() {
  }

}
