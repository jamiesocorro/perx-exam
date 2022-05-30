import { Component, OnInit } from '@angular/core'; 
import { PathService } from 'src/app/shared/services/path.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public pathService: PathService) { }

  ngOnInit(): void {
  }

}
