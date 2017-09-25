import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  title: String = "通讯录";

  contacts: Object[];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  private contactsProvider: ContactsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    this.contactsProvider
        .getAllContacts()
        .then(result=> 
          {this.contacts = result;
           console.log(result)});
  }

}
