import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  constructor() { }

  public option = new BehaviorSubject('');
  optionObservable = this.option.asObservable();

  public score = new BehaviorSubject(0);
  scoreObservable = this.score.asObservable();

  public total = new BehaviorSubject(0);
  totalObservable = this.total.asObservable();

  public username = new BehaviorSubject('');
  usernameObservable = this.username.asObservable();

  changeOption(option: string){
    this.option.next(option);
  }

  changescore(score: number, total: number){
    this.score.next(score);
    this.total.next(total);
  }

  changeusername(username: string){
    this.username.next(username);
    console.log("service value"+ username);
  }


}
