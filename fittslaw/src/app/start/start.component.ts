import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: false,
  
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  someValue: number[] = Array(10);

  start: boolean = false;
}
