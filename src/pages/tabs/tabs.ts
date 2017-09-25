import { Component } from '@angular/core';

import { DiscoveryPage } from '../discovery/discovery';
import { ContactPage } from '../contact/contact';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagePage;
  tab2Root = ContactPage;
  tab3Root = DiscoveryPage;

  constructor() {

  }
}
