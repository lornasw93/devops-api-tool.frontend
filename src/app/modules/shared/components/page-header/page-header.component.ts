import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() status: string; 

  constructor() { }

  ngOnInit(): void {
  }
}
