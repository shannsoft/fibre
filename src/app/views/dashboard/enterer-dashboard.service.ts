import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { FIBER_DISTRICT, BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class EntererDashboardService {

  constructor(private readonly http : HttpClient) { }
  getDistrictService(){
    var params = new HttpParams().set("service" , "getDistrict" );
    return this.http.get(`${BASE_URL}` , { params: params})
  }
  getBlockByDistrictService(data){
    var params = new HttpParams().set("service" , "getBlockByDistrict" ).set("id",data);
    return this.http.get(`${BASE_URL}` , { params: params})
  }
  getGPByBlockService(data){
    var params = new HttpParams().set("service" , "getGPByBlock" ).set("id",data);
    return this.http.get(`${BASE_URL}` , { params: params})
  }
}
