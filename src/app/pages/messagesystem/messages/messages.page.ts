import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MessageService } from '../../../services/messages/message.service';
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import * as firebase from 'firebase/app';
// import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  public List: Observable<any>;


  constructor(
    private messageService: MessageService,
    // public reverse: ReversePipe,
    public router: Router
  ) { }

  ngOnInit() {
    this.List = this.messageService.getMessageList().valueChanges();
  }

}
