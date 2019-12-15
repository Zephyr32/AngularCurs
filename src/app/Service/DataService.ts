import { Injectable } from '@angular/core'
import { __param } from 'tslib';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Project {
    id:number;
    name: string;
    theme: string;
    description: string;
    extension:string;
    fileData: string | ArrayBuffer;

}
export class InsertProject {
  name: string;
  theme: string;
  description: string;
  extension: string;
  fileData: string | ArrayBuffer;

}

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }


    getAllProject() {
        return this.http.get('http://localhost:8000/api/project');
    }

    getProjectsToTheme(theme: string) {
        return this.http.post('http://localhost:8000/api/project/theme',
            {
                theme: theme
            });
    }
    getProjectswithSearch(name: string) {
      return this.http.post('http://localhost:8000/api/project/Search',
        {
            name: name
        });
    }
    getProjectToId(id: number) {
      return this.http.post('http://localhost:8000/api/project/Id',
        {
         id:id
        });
    }
    getAllthemes() {
        return this.http.post('http://localhost:8000/api/project/themes', {});
    }
    

    insertProject(project: InsertProject) {
      return this.http.post('http://localhost:8000/api/project/', project);
    }
    getchosefile(project: Project){
        return this.http.post('http://localhost:8000/api/file', project, { responseType: "blob"});
    }

    updateProject(project: Project) {
        return this.http.put('http://localhost:8000/api/project/' + project.name, project);
    }

    deleteProject(project) {
        return this.http.delete('http://localhost:8000/api/project/' + project['id']);
    }
}
