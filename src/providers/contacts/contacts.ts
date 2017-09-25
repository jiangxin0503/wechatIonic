import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  private baseUrl: string = '../../assets/data/friends.json';
  constructor(public http: Http) {
    console.log('Hello ContactsProvider Provider');
  }

  getAllContacts(): Promise<Object[]>{
  	let url = this.baseUrl;
  	return this.http.get(url)
  			   .toPromise()
  			   .then(response=>response.json().results as Object[])
  			   .catch(err=>{console.error(err)});

  }

}
