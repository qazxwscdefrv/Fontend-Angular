import { Component, OnInit } from '@angular/core';
import {Replenishment} from "../Replenishment";
import {Observable} from "rxjs";
import {RepServiceService} from "../rep-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-replenishment',
  templateUrl: './replenishment.component.html',
  styleUrls: ['./replenishment.component.css']
})
export class ReplenishmentComponent implements OnInit {
  rep: Replenishment = new Replenishment();
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
    this.amount = this.amount + Number(this.reps.amount);
    console.log('amount ' + this.amount)
    this.rep.userID = this.userId ;
    this.amount = Number(this.rep.amount) + this.amount;
    this.rep.amount = this.amount + '';
    this.rep.cardNumber = this.reps.cardNumber;
    this.repService.updateRep(localStorage.getItem('id'), this.rep)
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
