import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MostPopularResponse } from 'src/app/models/NYTimes';

@Injectable()
export class FirstService implements OnInit, OnDestroy {
  private nyt_key: string = "FaodwFomXYv5IGrxLojVjkk8E6UuBjQb";
  private url: string = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${this.nyt_key}`

  constructor(private http: HttpClient) {
    console.log("first service const")
  }
  
  public getData(): Observable<MostPopularResponse> {
    return this.http.get<MostPopularResponse>(this.url);
  }

  ngOnInit(): void {
    console.log("first service init");
  }

  ngOnDestroy(): void {
    console.log("first service destroy");
  }
}
