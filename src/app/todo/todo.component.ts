import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  id :number;
  username:string;

  todo: Todo

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');

    this.todo = new Todo(this.id, '' , new Date() , false);
    if (+this.id != -1) {
      this.service.retrieveTodosById(this.username, +this.id).subscribe(
        response => {
          this.handleSuccess(response)
        },
        error => this.handleError(error)
      )
    }

  }

  save() {
    if (+this.id != -1) {
      this.service.updateTodo(this.username, +this.id, this.todo).subscribe(
        response => { this.router.navigate(['todos']) }
      )
    } else {
      this.service.createTodo(this.username , this.todo).subscribe(
        response => {this.router.navigate(['todos'])}
      )
    }
  }

  handleSuccess(response) {
    this.todo = response;
    return response;
  }

  handleError(error) {
    return error;
  }

}
