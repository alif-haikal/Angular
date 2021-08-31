import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isComplete: boolean) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: String;
  // [
  // new Todo(1 , 'one' , new Date(), false),
  // new Todo(2 , 'two' , new Date(), false),
  // new Todo(3 , 'three' , new Date(), false)
  // ]
  constructor(private service: TodoDataService , private router:Router) { }

  ngOnInit() {
    this.getAllData()
  }

  getAllData(){
    this.service.retrieveAllTodos(`username`).subscribe(
      response => {
        this.handleSuccess(response)
      },
      error => this.handlError(error)
    )
  }

  handleSuccess(response) {
    this.todos = response;
  }

  handlError(error) {
    return error;
  }

  delete(id: number) {
    this.service.deleteTodo('haikal', id).subscribe(
      response => {
        this.message = "succesfully deleted"
        this.getAllData();
      },
      error => this.handlError(error)
    )
  }

  update(id: number) {
    this.router.navigate(['todo',id]);

  //   this.service.deleteTodo('haikal', id).subscribe(
  //     response => {
  //       this.message = "succesfully deleted"
  //       this.getAllData();
  //     },
  //     error => this.handlError(error)
  //   )
  }


}
