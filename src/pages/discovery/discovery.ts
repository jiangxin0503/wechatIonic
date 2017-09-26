import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
  			  private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscoveryPage');
  }

  onScan() {
	this.barcodeScanner.scan().then((barcodeData) => {
	 // Success! Barcode data is here
	 console.log(barcodeData)
	}, (err) => {
	   console.log(err);
	});
  }

}
