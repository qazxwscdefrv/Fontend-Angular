import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Replenishment} from "../Replenishment";
import {RepServiceService} from "../rep-service.service";
import {Router} from "@angular/router";
import {Payment} from "../Payment";
import {Sending} from "../Sending";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  pay: Observable<Payment[]>;
  send: Observable<Sending[]>;
  pays: any = {};
  userId = localStorage.getItem('currentUser');
  constructor(private repServiceService: RepServiceService, private router: Router) { }


  ngOnInit() {
    this.pay = this.repServiceService.getPayment(this.userId);
    this.send = this.repServiceService.getSending(this.userId);
  }
  addAmount(id: string) {
    this.router.navigate(['rep']);
    localStorage.setItem('id', id);
  }
  loqout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
