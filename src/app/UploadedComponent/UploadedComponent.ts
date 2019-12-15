import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { saveAs as importedSaveAs } from "file-saver";
import 'rxjs/Rx';
import { Project, DataService, InsertProject } from '../Service/DataService';


@Component({
  selector: 'uploaded',
  templateUrl: './UploadedComponent.html',
  styleUrls: ['../app.component.css']
  
})
export class UploadedComponent{
    @Input() edpr:Project;
    @Input() EditProject:boolean;
    @Output() Upload=new EventEmitter();
  projectName: any;
  projectTheme: any;
  projectDescription: any;
  projectExtention: any;
  filetobase64: any;
  fileData: File;
  constructor(private dataService: DataService) {
    }
    fileProgress(fileInput: any) {
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
    } 

    UploadProject() {
      if (!this.EditProject) {
        var proj = {
          name: this.projectName,
          theme: this.projectTheme,
          description: this.projectDescription,
          extension: this.projectExtention,
          fileData: this.filetobase64,
        }
        this.dataService.insertProject(proj
        ).subscribe(data => {
          console.log(data);
          this.projectName="";
          this.projectTheme="";
          this.projectDescription="";
          this.projectExtention="";
          this.filetobase64="";
          this.Upload.emit(true);
        });
      }
      else {
          this.dataService.updateProject(this.edpr
        ).subscribe(data => {
          console.log(data);
          this.projectName="";
          this.projectTheme="";
          this.projectDescription="";
          this.projectExtention="";
          this.filetobase64="";
          this.Upload.emit(true);
        });
      }
      
  }

}
