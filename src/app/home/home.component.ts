import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Replenishment} from "../Replenishment";
import {RepServiceService} from "../rep-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser = localStorage.getItem('currentUser');
  rep: Observable<Replenishment[]>;
  reps: any = {};
  constructor(private repServiceService: RepServiceService, private router: Router) { }

  ngOnInit() {
    this.rep = this.repServiceService.getRepList();
    this.repServiceService.getRepBuUserId('2').subscribe((data: {}) => {
      this.reps = data;
      console.log(this.reps);
    });
    if (!this.currentUser) {
      this.router.navigate(['login']);
    }
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
