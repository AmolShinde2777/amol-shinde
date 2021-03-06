import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  constructor(private httpService: HttpClient) { }
  getMovieList() {
    return this.httpService.get('./assets/valid.json');
  }
}
