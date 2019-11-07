import { Component, OnInit } from '@angular/core';
import {TopicServiceService} from '../topic-service.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-resultpage',
templateUrl: './resultpage.component.html',
styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {
score: number;
total: number;
    username: string;

constructor(private router: Router, private service: TopicServiceService) { }

ngOnInit(): void {
this.service.scoreObservable.subscribe(update =>this.score = update);
this.service.totalObservable.subscribe(update =>this.total = update);
this.service.usernameObservable.subscribe(update =>this.username = update);
}
retakeQuiz(){
this.router.navigate(['/homepage']);
}
logout(){
this.router.navigate(['/login']);
}

}