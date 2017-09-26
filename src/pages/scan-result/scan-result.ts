import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScanResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html',
})
export class ScanResultPage {
  
  title: string = "扫描结果" ;

  scannResult: Object ;
  
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams) {
  	this.scannResult = this.navParams.get('scanResult');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanResultPage');
  }

}
