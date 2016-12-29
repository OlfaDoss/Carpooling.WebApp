import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarpoolService {
  private UrlWebApi = 'http://carpooling-restapi.herokuapp.com/api/carpools';

  constructor(private http:Http) { }

  getCarpools():Observable<any[]>  {
    return this.http
      .get(this.UrlWebApi+'/')
      .map(response => response.json());

  }

  getCarpool(id):Observable<any> {
    return this.http
      .get(this.UrlWebApi+'/'+id)
      .map(response => response.json());
  }
  /*searchJobs(keyword,location,job_category):Observable<any> {
    return this.http
      .get(this.UrlWebApi+'/search/'+keyword+'/'+location+'/'+job_category)
      .map(response => response.json());
  }*/

  createCarpool(carpool):Observable<any> {
    var params = "title=" + carpool.title + "&start=" + carpool.start+ "&end=" + carpool.end+ "&time=" + carpool.time +
      "&car=" + carpool.car + "&price=" + carpool.price+ "&available_seats=" + carpool.available_seats+ "&frequence=" + carpool.frequence
      + "&smoke_authorise=" + carpool.smoke_authorise+ "&driver.firstname=" + carpool.driver_firstname+ "&driver.lastname=" + carpool.driver_lastname+ "&driver.phone=" + carpool.driver_phone+ "&driver.sexe=" + carpool.driver_sexe;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(params);

    return this.http
      .post(this.UrlWebApi+'/' , params, {headers: headers})
      .map(response => response.json());
  }

  editCarpool(carpool,Id):Observable<any> {
    var params = "title=" + carpool.title + "&start=" + carpool.start+ "&end=" + carpool.end+ "&time=" + carpool.time +
      "&car=" + carpool.car + "&price=" + carpool.price+ "&available_seats=" + carpool.available_seats+ "&frequence=" + carpool.frequence
      + "&smoke_authorise=" + carpool.smoke_authorise+ "&driver_firstname=" + carpool.driver_firstname+ "&driver_lastname=" + carpool.driver_lastname+ "&driver_phone=" + carpool.driver_phone+ "&driver_sexe=" + carpool.driver_sexe;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .put(this.UrlWebApi+'/'+Id , params, {headers: headers})
      .map(response => response.json());
  }

  removeCarpool(id):Observable<any> {
    return this.http
      .delete(this.UrlWebApi+'/'+id)
      .map(response => response.json());
  }

  searchCarpools(start,end,date):Observable<any> {

    var params = "start=" + start + "&end=" + end+ "&date=" + date;
    console.log(params);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return this.http
      .post(this.UrlWebApi+'/search', params, {headers: headers})
      .map(response => response.json());
  }
}
