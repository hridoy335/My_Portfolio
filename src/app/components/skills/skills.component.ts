import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groups = [
    {
      title: 'Languages & Frameworks',
      items: ['C#', 'ASP.NET Core', 'Web API', 'Angular', 'AngularJS'],
    },
    {
      title: 'Database & Data Access',
      items: ['SQL Server', 'PostgreSQL', 'Oracle', 'EF Core', 'Dapper'],
    },
    {
      title: 'DevOps & Version Control',
      items: ['Docker', 'CI/CD', 'Git', 'GitHub'],
    },
    {
      title: 'Messaging & Integration',
      items: ['MQTT'],
    },
  ];
}
