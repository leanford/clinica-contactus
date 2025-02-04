import { Component, OnInit, Input } from '@angular/core';

interface Slider {
  name: string;
  description: string;
  photoUrl: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  details: string = 'Conheça';

  ngOnInit(): void {
  }
  
  @Input() dados: { name: string; description: string; photoUrl: string }[] = [];

}
