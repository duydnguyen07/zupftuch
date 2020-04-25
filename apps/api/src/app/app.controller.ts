import { Controller, Get } from '@nestjs/common';

import { Message } from '@zupftuch/api-interfaces';

import { AppService } from './app.service';
// This import loads the firebase namespace.
import * as firebase from 'firebase-admin'
import * as serviceAccount from '../environments/zupftuch-94e3419fa4ed.json';

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}

firebase.initializeApp({
  credential: firebase.credential.cert(params)
});

let db = firebase.firestore();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    let docRef = db.collection('translations').doc('alovelace');

    let setAda = docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });

    // db.collection('users').get()
    // .then((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log(doc.id, '=>', doc.data());
    //   });
    // })
    // .catch((err) => {
    //   console.log('Error getting documents', err);
    // });

    return this.appService.getData();
  }
}
