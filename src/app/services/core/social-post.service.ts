import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SocialPostService {

  constructor(private httpClient: HttpClient) { }

  getApi(url) {
    return this.httpClient.get(url).pipe(map(data => { return data; }));
  }

  getAllSocailMediaUsers() {
    return this.getApi("https://jsonplaceholder.typicode.com/users");
  }

  getUserPostById(id) {
    return this.getApi("https://jsonplaceholder.typicode.com/posts?userId=" + id);
  }
}
