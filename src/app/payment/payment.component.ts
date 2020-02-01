import { Component, OnInit } from '@angular/core';
import {Payment} from "../Payment";
import {RepServiceService} from "../rep-service.service";

import {ActivatedRoute, Router} from "@angular/router";
import {Replenishment} from "../Replenishment";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rep: Replenishment = new Replenishment();
  pay: Payment = new Payment();
  reps: any = {};
  submitted = false;
  amount: number;
  userId = localStorage.getItem('currentUser');
  constructor( private repService: RepServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.repService.getRepBuUserId(this.userId).subscribe((data: {}) => {
      this.reps = data;
      localStorage.setItem('id', this.reps.id)
      console.log(this.reps);
    });
  }

  newRep(): void {
    this.submitted = false;
    this.rep = new Replenishment();
  }


  save() {
    this.amount = 0;
    this.amount = Math.abs(this.amount - Number(this.reps.amount));
    console.log('amount ' + this.amount)
    this.rep.userID = this.userId ;
    this.amount =  this.amount - Number(this.rep.amount);
    this.rep.amount = this.amount + '';
    this.rep.cardNumber = this.reps.cardNumber;
    this.repService.updateRep(localStorage.getItem('id'), this.rep)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pay.amount = this.rep.amount;
    this.pay.cardNumber = this.rep.cardNumber;
    this.pay.ProductId = '1';
    this.pay.userId = localStorage.getItem('currentUser');
    this.repService.createPayment( this.pay)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rep = new Replenishment();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['']);
  }
  loqout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
