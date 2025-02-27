import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'pt-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  isIntersected = false;
  observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef) { }

  ngAfterViewInit(): void {
    this.setInterceptor();
  }

  setInterceptor() {
    const options = {
      root: null,
      rootMargin: '-200px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries, _) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isIntersected = true;

          setTimeout(() => {
            observer.unobserve(this.host.nativeElement);
          }, 1000);
        }


      });
    }, options);

    observer.observe(this.host.nativeElement);
  }
}
