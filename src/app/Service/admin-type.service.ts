import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminType } from '../Model/admin-type.model';

@Injectable({
  providedIn: 'root'
})
export class AdminTypeService {

  readonly APIURL = 'https://localhost:44367/api/AdminType';

  constructor(private http:HttpClient) { }

  formData:AdminType;

  getAdminTypeList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/GetAllAdminType');
  }

  postAdminType(formData:AdminType){
    return this.http.post<any>(this.APIURL+'/Create',formData);
  }

  getAdminType(id: number):Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/GetAdminType/'+ id);
  }

  updateAdminType(formData:AdminType) {  
    return this.http.put(this.APIURL + '/Edit', formData);  
  } 

  deleteAdminType(id:number) {  
    return this.http.delete(this.APIURL + "/Delete/" + id);  
}  
}
