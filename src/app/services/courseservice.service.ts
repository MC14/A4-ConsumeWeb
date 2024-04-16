import { Injectable } from '@angular/core';
import {CourseModel} from "../models/course-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl ='http://localhost8080/api/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(baseUrl);
  }
  deleteCoursebyId(id:number): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  createCourse(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  updateCourse(data: any, id:number): Observable<any> {

    return this.http.put(`${baseUrl}/${id}`,data);
  }
}
