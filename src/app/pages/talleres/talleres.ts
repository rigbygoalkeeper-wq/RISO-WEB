import { Component } from '@angular/core';
import { RisoWheelComponent } from './risowheel/risowheel';

@Component({
  selector: 'app-talleres',
  standalone: true,
  templateUrl: './talleres.html',
  styleUrls: ['./talleres.css'],
  imports: [RisoWheelComponent], // ✅ RisoWheel does NOT import Talleres
})
export class TalleresComponent {}
