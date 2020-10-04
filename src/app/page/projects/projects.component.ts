import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: object = [{
    name: "Lorem ipsum dolor sit.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas eum doloribus id sequi nihil totam, vero iure eaque enim eius modi, nulla, maiores explicabo est sed illum sunt! Ex, obcaecati?"
  }, {
    name: "Lorem, ipsum.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ex, aspernatur optio rem cumque, nulla libero possimus magnam consequuntur, perspiciatis debitis saepe voluptate.",
  }, {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta modi vel?",
  }, {
    name: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ex. Dolor, fugit. Exercitationem optio suscipit aliquid eligendi?",
  }, {
    name: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nisi quibusdam accusantium?",
  }, {
    name: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }, {
    name: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nisi quibusdam accusantium?",
  }, {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nisi quibusdam accusantium?",
  }, {
    name: "Lorem ipsum dolor sit.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas eum doloribus id sequi nihil totam, vero iure eaque enim eius modi, nulla, maiores explicabo est sed illum sunt! Ex, obcaecati?",
  }, {
    name: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta modi vel?",
  }, {
    name: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ex. Dolor, fugit. Exercitationem optio suscipit aliquid eligendi?",
  }, {
    name: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta modi vel?",
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
