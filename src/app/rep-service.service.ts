import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepServiceService {

  constructor(private http: HttpClient) { }
  getRep(id: string): Observable<any> {
    return this.http.get('http://localhost:8085/api/rep' + id);
  }
  getRepBuUserId(userId: string): Observable<any> {
    return this.http.get('http://localhost:8085/api/rep/byUserId/' + userId);
  }
  getRepList(): Observable<any> {
    return this.http.get('http://localhost:8085/api/all');
  }
  getPayment(UserId: string): Observable<any> {
    return this.http.get('http://localhost:8090/request/' + UserId);
  }

  getSending(UserId: string): Observable<any> {
    return this.http.get('http://localhost:8083/sending/sendings/byUserId/' + UserId);
  }

  createRep(rep: Object): Observable<Object> {
    return this.http.post('http://localhost:8082/rep/add', rep);
  }
  createPay(rep: Object): Observable<Object> {
    return this.http.post('http://localhost:8082/rep/add', rep);
  }
  deleteRep(id: string): Observable<any> {
    return this.http.delete('http://localhost:8082/rep/reps/' + id, { responseType: 'text' });
  }
  updateRep(id: string, value: any): Observable<Object> {
    return this.http.put('http://localhost:8082/rep/reps/' + id, value);
  }
  updateRepAmount(userId: string, amount: string, id: string, value: any): Observable<Object> {
    return this.http.put('http://localhost:8082/rep/byUser/' + userId + '?amount=' + amount + '&id=' + id, value);
  }
  createSending(sending: Object): Observable<Object> {
    return this.http.post('http://localhost:8083/sending/add', sending);
  }
  createPayment(payment: Object): Observable<Object> {
    return this.http.post('http://localhost:8084/payment/add', payment);
  }
  // getRep(id: string): Observable<any> {
  //   return this.http.get('http://localhost:8082/rep/reps/' + id);
  // }
  // getRepBuUserId(userId: string): Observable<any> {
  //   return this.http.get('http://localhost:8082/rep/reps/byUserId/' + userId);
  // }
  // getRepList(): Observable<any> {
  //   return this.http.get('http://localhost:8082/rep/all');
  // }
  //
  // createRep(rep: Object): Observable<Object> {
  //   return this.http.post('http://localhost:8082/rep/add', rep);
  // }
  // createPay(rep: Object): Observable<Object> {
  //   return this.http.post('http://localhost:8082/rep/add', rep);
  // }
  // deleteRep(id: string): Observable<any> {
  //   return this.http.delete('http://localhost:8082/rep/reps/' + id, { responseType: 'text' });
  // }
  // updateRep(id: string, value: any): Observable<Object> {
  //   return this.http.put('http://localhost:8082/rep/reps/' + id, value);
  // }
  // updateRepAmount(userId: string, amount: string, id: string, value: any): Observable<Object> {
  //   return this.http.put('http://localhost:8082/rep/byUser/' + userId + '?amount=' + amount + '&id=' + id, value);
  // }

}
