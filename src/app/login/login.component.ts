import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Replenishment} from '../Replenishment';
import {RepServiceService} from '../rep-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  submitted = false;
  error = '';
  private isUScustomer: boolean;
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
  }

  newRep(): void {
    this.submitted = false;
  }


  save() {
    localStorage.setItem('currentUser', this.userName);
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.submitted = true;
    this.authService.getUserByUserNameAndPassword(this.userName, this.password)
      .subscribe(x => {
        this.isUScustomer = x;
        console.log(this.isUScustomer);
        console.log(x);
      });
    setTimeout(() => {
        if (this.isUScustomer === true) {
          this.save();
        } else {
          this.error = 'UserName Or Password is not Correct';
          this.submitted = false;
        }
      },
      300);
    // if (this.userName === 'sati' && this.password === 'sati') {
    //   this.save();
    // } else if (this.userName === 'alex' && this.password === 'alex') {
    //   this.save();
    // } else {
    //   this.error = 'errorrr';
    //   this.submitted = false;
    // }
  }
}
