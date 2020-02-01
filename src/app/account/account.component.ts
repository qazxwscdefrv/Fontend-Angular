import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Replenishment} from "../Replenishment";
import {RepServiceService} from "../rep-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  rep: Observable<Replenishment[]>;
  reps: any = {};
  userId = localStorage.getItem('currentUser');
  constructor(private repServiceService: RepServiceService, private router: Router) { }

  ngOnInit() {
    this.rep = this.repServiceService.getRepList();
    this.repServiceService.getRepBuUserId(this.userId).subscribe((data: {}) => {
      this.reps = data;
      localStorage.setItem('id', this.reps.id)
      console.log(this.reps);
    });
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
