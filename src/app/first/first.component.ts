import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirstService } from '../services/first/first.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    FirstService
  ]
})
export class FirstComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  protected data: any;
  constructor(private firstService: FirstService) { }
  
  ngOnInit(): void {
    this.subscriptions.push(
      this.firstService.getData().subscribe(data => {
        this.data = data;
      })
    )
  }
  
  ngOnDestroy(): void {0
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
