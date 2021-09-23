import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public sign(body: any) {
    return this.http.post(`${environment.baseUrl}/signin`, body)
  }

  public emailCheckUnique(email: any) {
    return this.http.get(`${environment.baseUrl}/email/${email}`);
  }

  public checkUser(email: string, password: string) {
    return this.http.post(`${environment.baseUrl}/user/login`, { email: email, password: password })
  }
  public data(type: any) {
    return this.http.get(`${environment.baseUrl}/catogery/${type}`)
  }
  public userdetails() {
    return this.http.get(`${environment.baseUrl}/userdetails`)
  }
  public userUpdate( value: any) {
    return this.http.put(`${environment.baseUrl}/update`, {  value: value })
  }
  public Ivalue(value: any) {
    return this.http.put(`${environment.baseUrl}/user/basket`, {  value: value });
  }
  public Rvalue(value: Object) {
    return this.http.post(`${environment.baseUrl}/user/basket/remove`, { value: value });
  }
  public Incvalue(value: Object) {
    return this.http.post(`${environment.baseUrl}/user/basket/inc`, { value: value });
  }
  public decvalue(value: Object) {
    return this.http.post(`${environment.baseUrl}/user/basket/dec`, { value: value });
  }
  public userItems() {
    return this.http.get(`${environment.baseUrl}/details`);
  }
  public clearBasket() {
    return this.http.delete(`${environment.baseUrl}/user/basket/clearbasket`);
  }
  public placeOrder() {
    return this.http.get(`${environment.baseUrl}/user/basket/checkout`);
  }
  public filterCatogery(range: any, high: any, low: any, type: any) {
    return this.http.put(`${environment.baseUrl}/catogery/filter`, { high: high, low: low, range: range, type: type });
  }
}
