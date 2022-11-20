import { Component } from '@angular/core';
import {Course} from './Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

  courses: Course[] = [
    {
      name: 'CN',
      desc: 'ConductorNáutico',
      length: 2,
      price: 1000,
      vacancies: true,
    },
    {
      name: 'TYVM',
      desc: 'Timonel Yate Vela y Motor',
      length: 4,
      price: 3000,
      vacancies: true,
    },
    {
      name: 'PYVM',
      desc: 'Patron Yate Vela y Motor',
      length: 4,
      price: 4000,
      vacancies: false,
    },
    {
      name: 'Optimist',
      desc: 'Optimist niños',
      length: 2,
      price: 2000,
      vacancies: true,
    },
    {
      name: 'Laser',
      desc: 'Inciciación al Laser',
      length: 1,
      price: 1000,
      vacancies: true,
    },
    {
      name: 'WindSurf',
      desc: 'Inciciación al WindSurf',
      length: 1,
      price: 1000,
      vacancies: false,
    },
  ];
  
}
