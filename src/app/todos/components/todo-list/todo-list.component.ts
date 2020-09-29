import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '@app/todos/model/todo.model';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent {
  toDOTaskInput : ToDo[] = [] ;
  toDOTaskCompleted : ToDo[] = [] ;
  @Output() atleastOneTask = new EventEmitter<number>();
  @Output() completedTasks = new EventEmitter<number>();

  @Input() set toDOTask(value: string) {  
    console.log('test'+value); 
    if (value && value.length > 0) {
      let newId : number ;
      if(this.toDOTaskInput && this.toDOTaskInput.length > 0) {
        newId = this.toDOTaskInput.length + 1;
      } else {
        newId = 1
      }
      let todo = {id: newId, name: value, checked: false};
      this.toDOTaskInput.push(todo);
    }
    if(this.toDOTaskInput && this.toDOTaskInput.length > 0) {
      console.log('redrder');
      this.atleastOneTask.emit(this.toDOTaskInput.length);
    } 
 }
 
 removeTask(event, id: number){
  var removeIndex = this.toDOTaskInput.map(item => item.id)
  .indexOf(id);
  this.toDOTaskInput.splice(removeIndex, 1);
  this.atleastOneTask.emit(this.toDOTaskInput.length);
 }

 changeStatus(event, id: number){
  var findIndex = this.toDOTaskInput.map(item => item.id)
  .indexOf(id);
   if(event.target.checked){
     this.toDOTaskInput[findIndex].checked = true;
     this.toDOTaskCompleted.push(this.toDOTaskInput[findIndex]);
     this.completedTasks.emit(this.toDOTaskCompleted.length);

   } else {
    this.toDOTaskInput[findIndex].checked = false;
    this.toDOTaskCompleted.splice(findIndex, 1);
    this.completedTasks.emit(this.toDOTaskCompleted.length);
   }
 }

}
