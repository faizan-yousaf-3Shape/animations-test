import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecondService implements OnDestroy {
  private nyt_key: string = 'FaodwFomXYv5IGrxLojVjkk8E6UuBjQb';
  private url: string = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${this.nyt_key}`;

  constructor(private http: HttpClient) {
    console.log('second service const');
  }

  public getData(): Observable<any> {
    return this.http.get(this.url);
  }

  ngOnDestroy(): void {
    console.log('second service destroy');
  }
}
