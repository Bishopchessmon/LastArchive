import { Component, OnInit, ViewChild } from '@angular/core';

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
    title: "Guild List",
    dateCreated: "Oct. 5, 2020",
    description: "Create a list of Guild using Google Sheet. The Guilds on this list is either Approved or Tentative.",
    longDescription: ['Tentative refers to guild which may change in the future', 'Approved refers to a guild with absolute description which will never change. Approved Guild can only be renamed and each former name is documented through start and date.'],
    status: "Pending",
  }, {
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
