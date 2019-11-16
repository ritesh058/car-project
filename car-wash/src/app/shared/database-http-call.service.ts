import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatabaseHttpCallService {
  domain = "http://localhost:3000/";
  // ${this.domain}

  constructor(public http: HttpClient) {

  }

  postData(apiPath, bodyData) {
    return this.http.post(`${apiPath}`, bodyData);
  }

  getData(apiPath: string, searchParam?: any) {
    if (searchParam) {
      return this.http.get(`${apiPath}`, { params: searchParam })
    }
    else
      return this.http.get(`${apiPath}`)
  }

  deleteById(apiPath: string, searchParam) {
    if (searchParam)
      return this.http.delete(`${apiPath}`, { params: searchParam });
    else console.log("There is any error with search parameter")

  }

  updateDocument(apiPath: String) {
    return this.http.put(`${apiPath}`, {});
  }
}
