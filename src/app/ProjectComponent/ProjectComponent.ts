import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { saveAs as importedSaveAs } from "file-saver";
import 'rxjs/Rx';
import { Project, DataService } from '../Service/DataService';


@Component({
  selector: 'project',
  templateUrl: './ProjectComponents.html',
  styleUrls: ['../app.component.css']
  
})
export class ProjectComponent {
    @Input()  pr: Project;
    @Output() Showcurpr=new EventEmitter();
  constructor(private dataService: DataService) {
    }
  //получение списка тем
    // получение всех проэктов
    
    // скачать проэкт
    downloadProject(pr) {
      console.log('download pr');
      console.log(pr);
        this.dataService.getchosefile(pr).subscribe(data=> {
          importedSaveAs(data,pr['name'] + '.' + pr["extension"]);
        });
    }
    // удалить проэкт
    deleteProject(pr) {
        this.dataService.deleteProject(pr).subscribe(data => {
        });;
    }
    ShowcurProj(pr){
        console.log("showcurproj:ProjectComponent");
        console.log(pr);
        this.Showcurpr.emit(pr);
    }
    // редактировать проэкт
    editProject(pr) {
        /* this.EditProject = true;
        this.projectId = pr['id'];
        this.projectName = pr['name'];
        this.projectExtention = pr['extension'];
        this.projectTheme = pr['theme'];
        this.projectDescription = pr["description"]; */
    }
    //функция получающая Base64 строку из файла
    /*fileProgress(fileInput: any) {
      let me = this;
        this.fileData = <File>fileInput.target.files[0];
        console.log(this.fileData);
        this.projectExtention = this.fileData["name"].substr(this.fileData["name"].lastIndexOf('.') + 1);
        let reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = function() {
          me.filetobase64 = reader.result;
          console.log(reader.result);
        };
        reader.onerror = function(error) {
          console.log('Error: ', error);
        };
    } */
}
