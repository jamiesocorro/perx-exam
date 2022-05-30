import { state, style, trigger, transition, animate, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [
    trigger('fade', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('0.9s ease')
      ])
    ])
  ]
})
export class NavigationBarComponent implements OnInit {
  @Input() title: string = "";
  currentState = 'hidden';
  currentIndex = 1;
  nextIndex = 0;
  navigationLinks = [
    {
      title: "Books",
      link: this.pathService.books
    },
    {
      title: "Custom Directives",
      link: this.pathService.customDirective
    }
  ]

  constructor(
    public pathService: PathService,
    public router: Router) { }

  ngOnInit(): void {

  }

  animationFinished(event: AnimationEvent) {
    if (event.fromState === 'void' && event.toState === 'hidden') {
      this.currentState = 'visible';
    } else if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.currentState = 'visible';
      this.currentIndex = this.nextIndex;
    }
  }

}
