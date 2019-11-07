import { Component, OnInit } from '@angular/core';
import  sports  from  '../../data/Sports.json';
import music from '../../data/Music.json';
import node from '../../data/Node.js.json';
import {HomepageComponent} from '../homepage/homepage.component';
import {TopicServiceService} from '../topic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  option: string;
  data: any;
  username: string;

  ngOnInit(): void {
    this.service.optionObservable.subscribe(update =>this.option = update);
    this.service.usernameObservable.subscribe(update =>this.username = update);
  }
  
  q:string;
  opt1:string;
  opt2:string;
  opt3:string;

  i:number = 0;
 correctCount:number = 0 ;
 index:number;
 
 
constructor(private router: Router, private service: TopicServiceService) { }


public start(){
  if(this.option=='Sports'){
    this.data = sports;
    console.log(this.data[0]);
  }
  else if(this.option=='Music'){
    this.data = music;

  }
  else if(this.option=='Node.js'){
    this.data = node;

  }
  else{
    this.router.navigate(['/homepage']);
    
  }
  document.getElementById("qp").style.visibility= "visible";
  document.getElementById("start").style.visibility= "hidden";
  this.generate(0);
}



 public generate(index:number) {
    if(index<this.data.length-1){
      document.getElementById("btn-next").style.visibility= "visible";
      document.getElementById("btn-submit").style.visibility= "hidden";
      }
    
      if(index==this.data.length-1){
        
        document.getElementById("btn-next").style.visibility= "hidden";
        document.getElementById("btn-submit").style.visibility= "visible";
       
      }
    document.getElementById("qnum").innerHTML=this.data[index].qnum;
    document.getElementById("q").innerHTML = this.data[index].q;
    document.getElementById("optt1").innerHTML = this.data[index].opt1;
    document.getElementById("optt2").innerHTML = this.data[index].opt2;
    document.getElementById("optt3").innerHTML = this.data[index].opt3;
}

public checkAnswer() {
    if (document.getElementById("opt1").checked && this.data[this.i].opt1 == this.data[this.i].answer) {
       this.correctCount++;
            
       
    }
    if (document.getElementById("opt2").checked && this.data[this.i].opt2 == this.data[this.i].answer) {
        this.correctCount++;
        
    }
    if (document.getElementById("opt3").checked && this.data[this.i].opt3 == this.data[this.i].answer) {
        this.correctCount++;
        console.log(this.correctCount)
        
    }
    else{
      console.log("in else");
    }
    // increment i for next question
    this.i++;
    if(this.data.length-1 < this.i){
      
      this.service.changescore(this.correctCount,this.data.length );
      this.router.navigate(['/resultpage']);
      
      }

    else{
      
    // callback to generate
    this.generate(this.i);
    }

    document.getElementById("opt1").checked=false;
    document.getElementById("opt2").checked=false;
    document.getElementById("opt3").checked=false;

}


logout(){
  this.router.navigate(['/login']);
  }

}