import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly education = [
    {
      title: 'BSCE — Computer Engineering',
      place: 'International University of Business Agriculture and Technology',
      meta: '2019 · Uttara, Dhaka · GPA 3.30 / 4.00',
    },
    {
      title: 'H.S.C — Science',
      place: 'Collector Public College, Nilphamari',
      meta: '2012 · Dinajpur Board · GPA 3.80 / 5.00',
    },
    {
      title: 'S.S.C — Science',
      place: 'Shonaroy Shangalshi High School, Nilphamari',
      meta: '2014 · Dinajpur Board · GPA 4.13 / 5.00',
    },
  ];

  readonly training = [
    {
      title: 'LICT Foundation Skills IT Training for Dot Net',
      org: 'LICT',
    },
    {
      title: 'Learning & Earning Development Project for Web Design & Development',
      org: 'LEDP',
    },
  ];
}
