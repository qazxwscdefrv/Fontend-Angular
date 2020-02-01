import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';
import { ReplenishmentComponent } from './replenishment/replenishment.component';
import { SendingComponent } from './sending/sending.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import {Auth} from "./AUTH";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [Auth] },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'payment', component: PaymentComponent, canActivate: [Auth] },
  {path: 'rep',      component: ReplenishmentComponent,  canActivate: [Auth]},
  {path: 'send',      component: SendingComponent, canActivate: [Auth] },
  {path: 'cards',      component: PaymentCardComponent, canActivate: [Auth] },
  {path: 'Account',      component: AccountComponent, canActivate: [Auth] },
  {path: 'history',      component: HistoryComponent, canActivate: [Auth] }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    PaymentComponent,
    ReplenishmentComponent,
    SendingComponent,
    HomeComponent,
    PaymentCardComponent,
    HistoryComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
