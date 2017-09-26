import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScanResultPage } from '../scan-result/scan-result';

/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage {

  title: string = "发现";
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  private barcodeScanner: BarcodeScanner,
          public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoveryPage');
  }

  onScan() {
  	this.barcodeScanner.scan().then((barcodeData) => {
  	 // Success! Barcode data is here
  	 console.log(barcodeData)
     this.appCtrl.getRootNav().push(ScanResultPage,{
         scanResult:barcodeData
       })
  	}, (err) => {
  	   console.log(err);
       this.appCtrl.getRootNav().push(ScanResultPage,{
         scanResult:  {
             format: "failed",
             cancelled: false,
             text: '失败的操作'
           }

       })
  	});

  }

}
