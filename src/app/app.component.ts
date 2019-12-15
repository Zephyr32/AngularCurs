import { Component, OnInit } from '@angular/core';
import { DataService, Project } from './Service/DataService';
import { saveAs as importedSaveAs } from "file-saver";
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularSite';
    themes=[];
    curProject: Project;
    Projects: Project[];
    editproject:Project;
    searchtext='';
    ShowProjects: boolean = true;
    ShowProject: boolean = false;
    EditProject:boolean=false;
  constructor(private dataService: DataService) {
    }
  //получение списка тем
    themeclick(theme) {
      console.log(theme);
        this.dataService.getProjectsToTheme(theme['name']).subscribe((data: Project[]) => {
          this.Projects = data;
        });
    }
    Uploadresult(isUpload:boolean){
      if(isUpload==true){
            this.EditProject = false;
      }
      else{
        alert("Неудалось загрузить проэкт");
      }
    }
    editProject(pr:Project){
      this.editproject=pr;
    }
    //показать проэкт
    ShowcurProj(pr) {
      console.log("ShowcurProj:app.component");
      console.log(pr);
        this.dataService.getProjectToId(pr.id).subscribe((data: Project) => {
            this.curProject = data;
            this.ShowProjects = false;
            this.ShowProject = true;
            console.log('datacurproject');
            console.log(data);
        });
     
    }
    ngOnInit() {
      this.getprojects();
      this.dataService.getAllthemes().subscribe((data:any[]) => {
        this.themes = data;
      });
    }
    //стандартный вид
    defView() {
      this.ShowProjects = true;
      this.ShowProject = false;
      this.EditProject = false;
    }
    // получение всех проэктов
    getprojects() {
      this.dataService.getAllProject().subscribe((data: Project[]) => {
        this.Projects = data;
      });
    }
    //поиск проэкта по критерию
    Search() {
      this.dataService.getProjectswithSearch(this.searchtext).subscribe((data: Project[]) => {
        this.Projects = data;
      });
    }
}
