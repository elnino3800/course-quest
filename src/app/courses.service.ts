import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Course[]>('/api/courses');
  }
}
