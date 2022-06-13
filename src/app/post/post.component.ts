import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, DoCheck, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  @Input('img') postImg=''
  @Output() imgSelected = new EventEmitter<string>()

  constructor(){
    console.log('constructor() called !!', this.postImg)
  }
  ngOnInit(){
    console.log('ngOnInit() called !!', this.postImg)
  }

  ngOnChanges(){
    console.log('ngOnChanges() called !!' )
  }
  ngDoCheck() {
    console.log('ngDoCheck() called !!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called !!' )
    
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() called !!' )
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() called !!' )
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit() called !!' )
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy() called !!')
  }
}

