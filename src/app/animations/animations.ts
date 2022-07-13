import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    group
  } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('first <=> second, first <=> home, second <=> home', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('5000ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('5000ms ease-out', style({ left: '0%' }))
        ]),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('5000ms ease-out', style({ left: '100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('5000ms ease-out', style({ left: '0%' }))
        ]),
        query('@*', animateChild())
      ]),
    ])
  ]);