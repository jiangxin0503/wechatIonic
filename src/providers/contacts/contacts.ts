import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  private baseUrl: string;

  constructor(public http: Http,
              private platform: Platform) {

    if( platform.is('android') ) {
      this.baseUrl = '/android_asset/www/assets/data/friends.json'
    }

    if( platform.is('ios') ) {

    }

    if( platform.is('core') ) {
      this.baseUrl = '../../assets/data/friends.json';
    }

  }

  getAllContacts(): Promise<Object[]>{
  	let url = this.baseUrl;
  	return this.http.get(url)
  			   .toPromise()
  			   .then(response=>response.json().results as Object[])
  			   .catch(err=>{console.error(err)});

  }

}
