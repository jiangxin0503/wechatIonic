import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DiscoveryPage } from '../pages/discovery/discovery';
import { ContactPage } from '../pages/contact/contact';
import { MessagePage } from '../pages/message/message';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactsProvider } from '../providers/contacts/contacts';


import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    ContactPage,
    MessagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoveryPage,
    ContactPage,
    MessagePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsProvider
  ]
})
export class AppModule {}
