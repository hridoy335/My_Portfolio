import { Component } from '@angular/core';

export interface ProjectItem {
  title: string;
  summary: string;
  stack: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: ProjectItem[] = [
    {
      title: 'Garments ERP',
      summary:
        'Multi-module ERP covering accounting, production, ceramics, fixed assets, HRM, SOP, and inventory for manufacturing operations.',
      stack: 'C# · ASP.NET Core · Angular · EF Core',
    },
    {
      title: 'Medical PACS System',
      summary:
        'Core imaging workflows for storage, retrieval, upload, download, and viewing — optimized for healthcare responsiveness.',
      stack: 'ASP.NET Core · Angular · SQL Server',
    },
    {
      title: 'Accounting & Inventory',
      summary:
        'Business systems integrating Oracle and SQL Server with Dapper and EF Core, tuned for query performance.',
      stack: 'ASP.NET Core · Dapper · EF Core · Oracle',
    },
    {
      title: 'Restaurant & Real Estate BMS',
      summary:
        'Ground-up Restaurant Management and Real Estate Business Management systems for day-to-day operations.',
      stack: 'ASP.NET · JavaScript · jQuery',
    },
  ];
}
