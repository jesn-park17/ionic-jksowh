import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})

export class HomePage {
  balance: number;
  term: number;
  totalinterest: number;
  totalamount: number;
  monthpay: number;

  constructor(public navCtrl: NavController) {

  }

  compute () {
    this.totalinterest = ((this.balance * 1.5) / 100 ) * this.term;
    this.totalamount = this.totalinterest*1 + this.balance*1;
    this.monthpay = this.totalamount / this.term;
  }

}

