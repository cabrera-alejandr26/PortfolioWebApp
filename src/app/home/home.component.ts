import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  private intervalId: any;
  imageUrl: string | undefined;

  helloWorld = ["Hello World!"];
  words = ["Full-Stack Web", "Game"];
  intro = ["I'm Alejandro!"];
  isFirstTime = true;

  HomeComponent(){
    this.preloadImage();
  }

  ngOnInit(): void {
    // this.preloadImage();
  }

  // The `ngAfterViewInit` Angular lifecycle hook ensures the DOM is ready
  ngAfterViewInit(){
    // this.preloadImage();
    this.helloWorldIntro();
    this.nameIntro();
    this.wordsIntro();
  }

  helloWorldIntro(): void{
    const app = document.getElementById('helloworld'); //Get the target element by ID

    if(app){
      console.log("Element typewriter found");
      const typewriter = new Typewriter(app, {
        loop: false,
        delay: 70,
      });

      this.helloWorld.forEach((word) =>{
        typewriter.pauseFor(1000);
        typewriter.typeString(word);
        typewriter.pauseFor(2000);
        // typewriter.deleteAll();
      });

      //Start the typewriter effect
      typewriter.start();
    }else{
      console.log("Element typewriter not found");
    }
  }

  nameIntro(): void{
    const app = document.getElementById('intro'); //Get the target element by ID

    if(app){
      console.log("Element typewriter found");
      const typewriter = new Typewriter(app, {
        loop: false,
        delay: 70,
      });

      this.intro.forEach((word) =>{
        typewriter.pauseFor(2000);
        typewriter.typeString(word);
        typewriter.pauseFor(2000);
        // typewriter.deleteAll();
      });

      //Start the typewriter effect
      typewriter.start();
    }else{
      console.log("Element typewriter not found");
    }
  }

  wordsIntro(): void{
    const app = document.getElementById('words'); //Get the target element by ID
    const app2 = document.getElementById('letterA');

    if(app){
      console.log("Element typewriter found");
      const typewriter = new Typewriter(app, {
        loop: true,
        delay: 70,
      });

      this.words.forEach((word) =>{


        if(this.isFirstTime){
          console.log("First time");
          typewriter.pauseFor(3000);
          typewriter.typeString("A " + word + " Developer!");
          typewriter.pauseFor(500);
          typewriter.deleteChars(26);
          this.isFirstTime = false;
        }else{
          console.log("Not first time");
          typewriter.pauseFor(500);
          typewriter.typeString(" " + word + " Developer!");
          typewriter.pauseFor(500);
          // typewriter.deleteChars(2);
        }

      });

      //Start the typewriter effect
      typewriter.start();
    }else{
      console.log("Element typewriter not found");
    }
  }


  preloadImage(): void {
    const img = new Image();
    img.src = 'assets/Images/Me.jpg'; // replace with the actual path to your image
    img.onload = () => {
      this.imageUrl = img.src;
      console.log("Image preloaded");
    };
  }
}
