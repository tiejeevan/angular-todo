import { ChangeDetectionStrategy, Component, ElementRef  } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  toDOTask : string;
  atLeastOneTaskExists: number = 0;
  completedTasksNumber: number = 0;

  constructor(private el: ElementRef) {
  }

  onFocusOut(event: any){
    if(event && event.target && event.target.value){
      this.toDOTask = (event.target.value).toString();
      console.log('focus'+event.target.value);
      event.currentTarget.value = "";
    }
  }

  onEnter(event: any){
    if(event && event.target && event.target.value){
      this.toDOTask = (event.target.value).toString();
      console.log('enter'+event.target.value);
      event.currentTarget.value = "";
    } 
  }

  atleastOneTaskExists(taskExists: number){
    console.log('exists');
      this.atLeastOneTaskExists = taskExists;
  }

  completedTasks(completedTasksNumber: number){
    this.completedTasksNumber = completedTasksNumber
  }

  showOnlyActive(event: any){
    console.log('showActive');
    this.clearAllSelected(2);
      
    
  }

  showAll(event: any){
    console.log('showActive');
    this.clearAllSelected(1);    
  }


  clearAllSelected(tagNumber: number) {
    let allTag = this.el.nativeElement.querySelector("#all");
    let completedTag = this.el.nativeElement.querySelector("#completed");
    let clearTag = this.el.nativeElement.querySelector("#clear");
    let activeTag = this.el.nativeElement.querySelector("#active");
    allTag.classList.remove('selected');
    clearTag.classList.remove('selected');
    completedTag.classList.remove('selected');
    activeTag.classList.remove('selected'); 
    if(tagNumber == 1){
      if(!allTag.classList.contains('selected')){
        allTag.classList.add('selected'); 
      }
    }
    if(tagNumber == 2){
      if(!activeTag.classList.contains('selected')){
        activeTag.classList.add('selected'); 
      }
    }
    if (tagNumber == 3) {
      if(!completedTag.classList.contains('selected')){
        completedTag.classList.add('selected'); 
      }
    }
    
  }

  showOnlyComplete(event: any){
    this.clearAllSelected(3);
  }

  clearCompleted(event: any){
    console.log('showActive');
    this.clearAllSelected(1);
  }

}
