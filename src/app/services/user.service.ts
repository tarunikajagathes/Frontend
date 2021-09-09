import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public sign(body: any) {
    return this.http.post(`${environment.baseUrl}/signin`, body, { responseType: 'text' })
  }

  public emailCheckUnique(email: any) {
    return this.http.get(`${environment.baseUrl}/email/${email}`, { responseType: 'text' });
  }

  public emailCheckPresent(email: any) {
    return this.http.get(`${environment.baseUrl}/email/${email}`, { responseType: 'text' });
  }

  public checkUser(email: string, password: string) {
    return this.http.post(`${environment.baseUrl}/user/login`, { email: email, password: password })
  }
  public data(type: any) {
    return this.http.get(`${environment.baseUrl}/catogery/${type}`)
  }
  public userdetails(email: any) {
    return this.http.get(`${environment.baseUrl}/userdetails/${email}`)
  }
  public userUpdate(email: any, value: any) {
    return this.http.put(`${environment.baseUrl}/update`, { email: email, value: value }, { responseType: 'text' })
  }
  public Ivalue(value: any, email: any) {
    return this.http.put(`${environment.baseUrl}/user/basket`, { email: email, value: value }, { responseType: 'text' });
  }
  public Rvalue(value: Object, email: any) {
    return this.http.post(`${environment.baseUrl}/user/basket/remove`, { email: email, value: value }, { observe:"response",responseType: 'text' });
  }
  public Incvalue(value: Object, email: any) {
    return this.http.post(`${environment.baseUrl}/user/basket/inc`, { value: value, email: email }, { responseType: 'text' });
  }
  public decvalue(value: Object, email: any) {
    return this.http.post(`${environment.baseUrl}/user/basket/dec`, { email: email, value: value }, { responseType: 'text' });
  }
  public userItems(email: any) {
    return this.http.get(`${environment.baseUrl}/details/${email}`);
  }
  public clearBasket(email: any) {
    return this.http.post(`${environment.baseUrl}/user/basket/clearbasket`, { email: email }, { responseType: 'text' });
  }
  public placeOrder(email: any) {
    return this.http.post(`${environment.baseUrl}/user/basket/checkout`, { email: email }, { responseType: 'text' });
  }
  public filterCatogery(range: any, high: any, low: any, type: any) {
    return this.http.put(`${environment.baseUrl}/catogery/filter`, { high: high, low: low, range: range, type: type });
  }
}
