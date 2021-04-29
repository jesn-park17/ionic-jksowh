import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})

export class HomePage {
  amountBalance: number;
  termBalance: number;
  Interestpayabletotal: number;
  Amountpayabletotal: number;
  PaymentMonthly: number;

  constructor(public navCtrl: NavController) {

  }

  compute () {
    this.Interestpayabletotal = ((this.amountBalance * 1.5) / 100 ) * this.termBalance;
    this.Amountpayabletotal = this.Interestpayabletotal*1 + this.amountBalance*1;
    this.PaymentMonthly = this.Amountpayabletotal / this.termBalance;
  }

}

