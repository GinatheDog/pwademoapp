import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
// import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
// import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageList: AngularFirestoreCollection<any>;
  public userId: string;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
    // private afStorage: AngularFireStorage
  ) {
    this.afAuth.authState.subscribe(_user => {
      this.messageList = this.firestore.collection(`/posts`, ref => ref.orderBy('created'));
      console.log
    });
  }

  getMessageList(): AngularFirestoreCollection<any> {
    return this.messageList;
  }
}
