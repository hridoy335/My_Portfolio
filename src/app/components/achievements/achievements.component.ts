import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  readonly items = [
    {
      title: 'Database optimization',
      detail:
        'Updated and optimized database structure at Pakiza Technovation, improving reliability and reducing manual maintenance.',
    },
    {
      title: 'PACS performance',
      detail:
        'Optimized Medical PACS upload, download, and image-viewing workflows for faster access to imaging records.',
    },
  ];
}
