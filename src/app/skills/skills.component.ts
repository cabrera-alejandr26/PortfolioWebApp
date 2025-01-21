import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import Typewriter from 'typewriter-effect/dist/core';

Chart.register(...registerables);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  chart: any;
  color: string = '#8eedfd';
  skillsTitle = ["Skills"];


  ngOnInit(): void {
    this.skillsTitleMethod();
    this.createChart('Front-End'); // Initialize chart with a default job type
  }

  createChart(jobType: string) {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (canvas) {
      const context = canvas.getContext('2d');
      const data = this.getSkillsData(jobType); // Get data based on the job type selected

      if (this.chart) {
        this.chart.destroy(); // Destroy the previous chart instance if it exists
      }

      this.chart = new Chart(context!, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',// Make bar chart horizontal
          animation:{
            duration: 6000,//Duration of bars
            easing: 'easeOutExpo'
          },
          scales: {
            x: {
              max: 10,
              beginAtZero: true,
            }
          }
        }
      });
    } else {
      console.error("Canvas element not found");
    }
  }

  updateChart(jobType: string): void {
    this.createChart(jobType);
  }

  getSkillsData(jobType: string): any {
    switch (jobType) {
      case 'Front-End':
        return {
          labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angular'],
          datasets: [{
            label: 'Front-End',
            data: [7, 5, 5, 5, 4],
            backgroundColor: this.color,
          }]
        };
      case 'Back-End':
        return {
          labels: ['.NET', 'C#', 'Spring Framework','Java', 'Python','JSON','Node.js', 'XML','AWS', 'SQL'],
          datasets: [{
            label: 'Back-End',
            data: [4, 6, 4, 6, 4, 5, 1, 5, 3, 5],
            backgroundColor: this.color,
          }]
        };
      case 'Game Development':
        return {
          labels: ['Unity', 'C#', 'Blender'],
          datasets: [{
            label: 'Game Development',
            data: [5, 6, 3],
            backgroundColor: this.color,
          }]
        };
      case 'Dev-Tools':
        return {
          labels: ['Git','Docker'],
          datasets: [{
            label: 'Dev Tools',
            data: [5,2],
            backgroundColor: this.color,
          }]
        };
      default:
        return {
          labels: [],
          datasets: [{
            label: 'Skills',
            data: [],
            backgroundColor: this.color,
          }]
        };
    }
  }

  skillsTitleMethod(): void{
    const app = document.getElementById('skillsTitle'); //Get the target element by ID

    if(app){
      console.log("Element skillsTitle found");
      const typewriter = new Typewriter(app, {
        loop: false,
        delay: 70,
      });

      this.skillsTitle.forEach((word) =>{
        typewriter.pauseFor(600);
        typewriter.typeString(word);
        typewriter.pauseFor(2000);
        // typewriter.deleteAll();
      });

      //Start the typewriter effect
      typewriter.start();
    }else{
      console.log("Element skillsTitle not found");
    }
  }
}
