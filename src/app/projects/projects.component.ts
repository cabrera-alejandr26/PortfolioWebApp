import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-projects',
  imports: [
    NgForOf,
    // RouterLink
  ],
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrl: './projects.component.css'
})



export class ProjectsComponent implements OnInit {
  projectsTitle = ["Projects"];

  ProjectsComponent() {
    this.preloadImages();
  }
  // Project details array
  projects: { name: string, projectUrl: string, imagePath: string, description: string }[] = [];

  // Loading flag to show spinner while preloading images
  isLoading = true;

  ngOnInit() {
    this.projectsTitleMethod();
    // Assign names to the project.name field
    // Preload all project images
    // this.preloadImages();
    this.projects = [
      {
        name: 'Postman Clone App',
        projectUrl: 'https://github.com/cabrera-alejandr26/postman-clone-app',
        imagePath: './assets/Images/postman_clone.png',
        description: "This project is a clone of the original Postman application, which is a tool used to test & develop different APIs."
      },
      {
        name: 'Maze Game Prototype',
        projectUrl: 'https://play.unity.com/en/games/3f817fd7-64c1-468e-844e-c5398abfe691/ultra-maze-game-prototype-00',
        imagePath: './assets/Images/MazeGame.png',
        description: "This project is a prototype of a maze game idea I've had for a while. It's a simple game where the player has to find the exit (portal). The maze generates using algorithms such as the Tree and Prims. *Note: This prototype works best on a desktop desktop or laptop."
      },
      {
        name: 'Mod The Cube!',
        projectUrl: 'https://play.unity.com/en/games/1325f2dc-00cc-4ce1-8558-b52d916a76c3/mod-the-cube',
        imagePath: './assets/Images/ModTheCube.png',
        description: "This small project was created to test my abilities to see how well I can manipulate a game object in Unity. All it is is a cube that can be moved around the scene in random places and rotate in different directions and speed."
      },
    ];

  }

  // Function to preload images
  private preloadImages(): void {
    let loadedImagesCount = 0; // Counter for loaded images

    for (const project of this.projects) {
      const img = new Image(); // Create a new Image object
      img.src = project.imagePath; // Set the source path for the image

      // On image load, increase the counter
      img.onload = () => {
        loadedImagesCount++;
        // When all images are loaded, set 'isLoading' to false
        if (loadedImagesCount === this.projects.length) {
          this.isLoading = false;
        }
      };
    }
  }

  projectsTitleMethod(): void{
    const app = document.getElementById('projectTitle'); //Get the target element by ID

    if(app){
      console.log("Element projectTitle found");
      const typewriter = new Typewriter(app, {
        loop: false,
        delay: 70,
      });

      this.projectsTitle.forEach((word) =>{
        typewriter.pauseFor(600);
        typewriter.typeString(word);
        typewriter.pauseFor(2000);
        // typewriter.deleteAll();
      });

      //Start the typewriter effect
      typewriter.start();
    }else{
      console.log("Element projectTitle not found");
    }
  }
}
