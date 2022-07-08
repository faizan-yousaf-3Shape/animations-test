import { Component, OnDestroy, OnInit } from '@angular/core';
import { SecondService } from '../services/second/second.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [SecondService]
})
export class SecondComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  protected data: any;
  constructor(private secondService: SecondService) { 
    console.log("second component const");
  }

  ngOnInit(): void {
    console.log("second component init");
    this.subscriptions.push(
      this.secondService.getData().subscribe(data => {
        this.data = data;
      })
      );
    }
    
  ngOnDestroy(): void {
    console.log("second component destroy");
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
