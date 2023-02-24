import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from './task'; //;importujemy task.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  //taskName: string;
  taskName = "Przykladowe zadanie";
  taskDate = "";
  config: { [key: string]: string | Date } = null;
  tasks: Task[] = [
    {
      name: 'Javascript',
      deadline: '2021-05-14',
      done: false
    },
    {
      name: 'Angular',
      deadline: '2021-06-14',
      done: true
    },
    {
      name: 'Node.js',
      deadline: '2021-06-7',
      done: false
    }
  ];

  constructor() {
    this.config = {
      title: 'AngularTaskList',
      footer: '© AngularTaskList, All rights reserved.',
      date: new Date()
    }
    this.sortTasks();
  }

  //metoda czysci ustawia tasks na pusta liste
  clearTasks() {
    this.tasks = [];
  }

  /*
  //co sie dzieje po wpisywaniu w pola tekstowe
  onKeyUp(event: KeyboardEvent){
    //do targeta wyciagamy obiekt dom, reprezentujacy pole tekstowe
    //wynika z ts, HTMLInputElement informacja, ze to element input
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }
  */

  //metoda dodajaca zadanie do listy
  createTask(){
    const task: Task = {
      name: this.taskName, //skrocona wersja name: name, ts sam zorientuje sie, gdzie ma wpisac
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = "";
    this.taskDate = "";
    this.sortTasks();
  }
  /*createTask(name: string, date: Date){
    const task: Task = {
      name, //skrocona wersja name: name, ts sam zorientuje sie, gdzie ma wpisac
      deadline: date.toString(),
      done: false
    };
    this.tasks.push(task);
  }*/

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(el => el !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
      a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
