import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives-action',
  templateUrl: './custom-directives-action.component.html',
  styleUrls: ['./custom-directives-action.component.scss']
})
export class CustomDirectivesActionComponent implements OnInit {

  sampleText = "Click Me!";
  constructor() { }

  ngOnInit(): void {
  }

}
