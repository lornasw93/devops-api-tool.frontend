import { Component, Input, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading-small',
  templateUrl: './loading-small.component.html'
})
export class LoadingSmallComponent implements OnInit { 
  @Input() message: string;

  faSpinner = faSpinner;

  constructor() { }

  ngOnInit() {
  }
}
