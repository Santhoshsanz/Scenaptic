import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data: any = [{
    cid: '#14:10',
    conceptName: 'ADMIT',
    status: 'success',
    nullCount: 0,
    uniqueCount: 2,
    statType: 'categorical',
    freqCount: {
      1: 127,
      0: 273
    }
  }, {
    cid: '#14:11',
    conceptName: 'GRE',
    status: 'success',
    nullCount: 0,
    uniqueCount: 26,
    statType: 'continuous',
    stats: {
      mean: 587.7,
      min: 220.0,
      max: 800.0,
      stdDev: 115.37205034149302
    },
    graph: {
      '278.0-336.0': 3,
      '452.0-510.0': 51,
      '394.0-452.0': 28,
      '568.0-626.0': 82,
      '510.0-568.0': 75,
      '626.0-684.0': 65,
      '742.0-800.0': 10,
      '220.0-278.0': 1,
      '336.0-394.0': 16,
      '684.0-742.0': 44
    }
  }, {
    cid: '#14:12',
    conceptName: 'GPA',
    status: 'success',
    nullCount: 0,
    uniqueCount: 132,
    statType: 'continuous',
    stats: {
      mean: 3.3899,
      min: 2.26,
      max: 4.0,
      stdDev: 0.3800907654758267
    },
    graph: {
      '3.1299999999999994-3.3039999999999994': 57,
      '3.3039999999999994-3.4779999999999993': 76,
      '2.26-2.4339999999999997': 3,
      '3.825999999999999-3.999999999999999': 35,
      '2.9559999999999995-3.1299999999999994': 42,
      '3.6519999999999992-3.825999999999999': 39,
      '2.4339999999999997-2.6079999999999997': 4,
      '3.4779999999999993-3.6519999999999992': 66,
      '2.7819999999999996-2.9559999999999995': 34,
      '2.6079999999999997-2.7819999999999996': 16
    }
  }, {
    cid: '#14:13',
    conceptName: 'RANK',
    status: 'success',
    nullCount: 0,
    uniqueCount: 4,
    statType: 'categorical',
    freqCount: {
      2: 151,
      1: 61,
      4: 67,
      3: 121
    }
  }];

  constructor(private _http: HttpClient) { }

  getData() {
   return this.data;
  }

  getChartData(index){
    return this.data[index];
  }

    get nativeWindow(): any {
       return _window();
    }
}
