import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoDataService, private route: ActivatedRoute) { }

  todo: Todo

  ngOnInit() {

    // this.todo = new Todo(1,'',new Date(),false);
    this.service.retrieveTodosById(this.route.snapshot.paramMap.get('username'), +this.route.snapshot.paramMap.get('id')).asyncCall().subscribe(
      response => {
        this.handleSuccess(response)
      },
      error => this.handleError(error)
    )
  }

  save() {

  }

  handleSuccess(response) {
    this.todo = response;
    return response;
  }

  handleError(error) {
    return error;
  }

}
