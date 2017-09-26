import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DiscoveryPage } from '../pages/discovery/discovery';
import { ContactPage } from '../pages/contact/contact';
import { MessagePage } from '../pages/message/message';
import { ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { TabsPage } from '../pages/tabs/tabs';

import { FirstCharFormatPipe } from '../pipes/first-char-format/first-char-format'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactsProvider } from '../providers/contacts/contacts';


import { HttpModule } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    ContactPage,
    MessagePage,
    TabsPage,
    ContactDetailPage,
    ScanResultPage,
    FirstCharFormatPipe
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
    TabsPage,
    ContactDetailPage,
    ScanResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
