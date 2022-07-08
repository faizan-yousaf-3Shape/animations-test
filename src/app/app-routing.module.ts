import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'first',
    component: FirstComponent,
    data: { animation: 'first' },
  },
  {
    path: 'second',
    component: SecondComponent,
    data: { animation: 'second' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
