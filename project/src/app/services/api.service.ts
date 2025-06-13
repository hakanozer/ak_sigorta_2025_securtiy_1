import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsURL, userURL } from '../utils/urlconts';
import { IProfile, IUser } from '../models/IUser';
import { IProducts, ISingleProduct } from '../models/IProducts';
import { IDataUsers } from '../models/IDataUsers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { 
  }

  login( email: string, password: string ) {
    const obj = {
      email: email,
      password: password
    }
    return this.http.post<IUser>( userURL.login, obj )
  }

  profileMe() {
    const token = localStorage.getItem('access_token');
    const headers = {
      authorization: `Bearer ${token}`
    }
    return this.http.get<IProfile>( userURL.profileMe, { headers } )
  }

  logout() {
    const token = localStorage.getItem('access_token');
    const headers = {
      authorization: `Bearer ${token}`
    }
    return this.http.post( userURL.logout, {}, { headers } )
  }

  getAllProducts() {
    return this.http.get<IProducts>(productsURL.getAll)
  }

  getProductById( id: string ) {
    return this.http.get<ISingleProduct>(productsURL.getAll+"/"+id)
  }

  getAllUsers() {
    const token = localStorage.getItem('access_token');
    const headers = {
      authorization: `Bearer ${token}`
    }
    return this.http.get<IDataUsers>( userURL.getAllUsers, { headers } )
  }

  searchProducts( q: string ) {
    return this.http.get<IProducts>( productsURL.search, { params: { query: q } } )
  }


}
