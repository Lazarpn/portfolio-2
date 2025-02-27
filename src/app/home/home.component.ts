import { Component } from '@angular/core';

import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'pt-home',
  imports: [ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
