import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  choirs: object[] = [{
    title: "Character List",
    dateCreated: "Oct. 5, 2020",
    description: "Create a list of characters using Google Sheet. The characters on this list is either Approved or Persona.",
    longDescription: ['Persona refers to unofficial character and marked as candidate', 'Approved refers to Personae that will eventually be part of the Archive'],
    status: "Pending",
  }, 
  // {
  //   title: "N/A",
  //   dateCreated: "N/A",
  //   description: "N/A",
  //   longDescription: ['N/A','N/A','N/A','N/A',],
  //   status: "N/A",
  // }, {
  //   title: "N/A",
  //   dateCreated: "N/A",
  //   description: "N/A",
  //   longDescription: ['N/A','N/A','N/A','N/A',],
  //   status: "N/A",
  // }
];
}
