import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Course[]>('/api/courses');
  }

  get(id: number) {
    return this.http.get<Course>(`/api/courses/${id}`);
  }

  add(course: Course) {
    return this.http.post<number>('/api/courses', course)
  }

  delete(course: Course) {
    return this.http.delete<void>(`/api/courses/${course.id}`);
  }

  edit(course: Course) {
    return this.http.put<void>(`/api/courses/${course.id}`, course)
  }
}
