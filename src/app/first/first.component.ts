import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirstService } from '../services/first/first.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [ FirstService ],
  // animations: [
  //   trigger('openClose', [
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.8,
  //       backgroundColor: 'blue'
  //     })),
  //     transition('open => closed', [
  //       animate('0.5s 100ms ease-in-out')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s 100ms ease-in-out')
  //     ])
  //   ])
  // ]
})
export class FirstComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  protected data: any;
  isOpen = true;
  constructor(private firstService: FirstService) {
    console.log("first component const");
  }
  
  ngOnInit(): void {
    console.log("first component init")
    this.subscriptions.push(
      this.firstService.getData().subscribe(data => {
        this.data = data;
      })
    )
  }
  
  ngOnDestroy(): void {
    console.log("first component destroy")
    this.isOpen = false;
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
