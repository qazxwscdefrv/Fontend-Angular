import { Component, OnInit } from '@angular/core';
import {Replenishment} from "../Replenishment";
import {RepServiceService} from "../rep-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sendings} from "../Sendings";

@Component({
  selector: 'app-sending',
  templateUrl: './sending.component.html',
  styleUrls: ['./sending.component.css']
})
export class SendingComponent implements OnInit {
  rep: any = {};
  sending: Sendings = new Sendings();
  submitted = false;
  amount: string;
  userID: string;
  userIdC = localStorage.getItem('currentUser');
  constructor( private repService: RepServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.repService.getRepBuUserId(this.userIdC).subscribe((data: {}) => {
      this.rep = data;
      console.log(this.rep);
    });
  }

  newRep(): void {
    this.submitted = false;
    this.rep = new Replenishment();
  }


  save() {
    // this.repService.updateRepAmount(this.userID, this.amount, localStorage.getItem('id'), this.rep);
    this.repService.updateRepAmount(this.userID, this.amount, localStorage.getItem('id'), this.rep)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sending.amount = this.amount;
    this.sending.userId = localStorage.getItem('currentUser')
    this.sending.ReceiverCardNumber = this.userID;
    this.repService.createSending(this.sending)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rep = new Replenishment();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  loqout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
