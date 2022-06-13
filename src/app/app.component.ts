import {Component} from '@angular/core';

@Component({
  selector:'app-root',
  //template:`<p>Hello World!!!</p>`,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  //styles:['']
})

export class AppComponent{
  name = 'rajat bhatt'
  imgURL = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'
  images=[
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/id/238/500/500",
    "https://picsum.photos/id/239/500/500"
  ]
  currentDate = new Date();
  cost = 2000
  temp = 25.3
  pizza={
    topping:['pineapple', 'corn'],
    size: 'large'
  }

  blueClass= false
  fontSize= 16

  getName(){
    return this.name
  }
  changeImage(e:KeyboardEvent){
    this.imgURL= (e.target as HTMLInputElement).value;
  }
  logImg(event:string){
    console.log(event)
  }

}