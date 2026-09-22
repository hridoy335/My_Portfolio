import { Component } from '@angular/core';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  projects: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = [
    {
      role: 'Software Engineer',
      company: 'MultiTech Systems Limited',
      period: 'Feb 2026 – Present',
      location: 'Dhaka, Bangladesh',
      projects: 'Garments ERP — Accounting, Production, Ceramics, Fixed Asset Management',
      points: [
        'Develop ERP modules with C#, ASP.NET Core, and Angular.',
        'Design RESTful Web APIs and EF Core models for multi-module workflows.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Golden InfoTech',
      period: 'Feb 2023 – Jan 2026',
      location: 'Dhaka, Bangladesh',
      projects: 'Medical PACS System, Accounting System, Inventory System',
      points: [
        'Built core PACS modules for imaging storage and retrieval.',
        'Delivered Accounting and Inventory systems with Oracle/SQL Server via Dapper and EF Core.',
      ],
    },
    {
      role: 'Senior Executive',
      company: 'Pakiza Technovation Limited',
      period: 'Nov 2021 – Dec 2022',
      location: 'Dhaka, Bangladesh',
      projects: 'Garments ERP — HRM, Accounting, SOP, Inventory',
      points: [
        'Contributed to manufacturing ERP modules across departments.',
        'Implemented backend business logic and database structures.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Ardites Bangladesh Ltd',
      period: 'Sep 2019 – Sep 2021',
      location: 'Dhaka, Bangladesh',
      projects: 'Restaurant Management, Real Estate BMS (RBMS)',
      points: [
        'Built Restaurant Management and Real Estate systems with ASP.NET and JavaScript/jQuery.',
      ],
    },
  ];
}
