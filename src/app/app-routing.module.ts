import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PaymentComponent} from './payment/payment.component';
import {ReplenishmentComponent} from './replenishment/replenishment.component';
import {SendingComponent} from './sending/sending.component';



const routes: Routes = [
  {path: 'login',      component: LoginComponent },
  {path: 'payment',      component: PaymentComponent },
  {path: 'replenishment',      component: ReplenishmentComponent },
  {path: 'login',      component: SendingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
