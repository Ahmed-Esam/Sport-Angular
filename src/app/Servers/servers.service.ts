import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor(private http: HttpClient) {}

  getData(){
   return this.http.get('https://api.anaventures.net/api/v1/fe/articles?published=1&orderBy=publishedAt&order=desc&page=1')
  }
  getArticles(id) {
    return this.http.get(`https://api.anaventures.net/api/v1/fe/articles/${id}`)
  }


}
