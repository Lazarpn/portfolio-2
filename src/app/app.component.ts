import { Component, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showLoadingSpinner = true;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.onStable.subscribe(() => {
      this.showLoadingSpinner = false;
    });
  }
}
