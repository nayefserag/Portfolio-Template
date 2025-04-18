import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { fadeIn } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SideNavComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeIn]
})
export class AboutComponent {}