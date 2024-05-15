import { Component, OnInit } from '@angular/core';
import { Section } from '../../shared/models/section.model';
import { CommonModule } from '@angular/common';
import { MenuSectionComponent } from '../../shared/components/menu-section/menu-section.component';
import { MenuPageComponent } from '../menu-page/menu-page.component';

export enum MenuIds {
  MENU = 3
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  styleUrls: ['./main-page.component.scss'],
  imports: [CommonModule, MenuSectionComponent, MenuPageComponent]
})
export class MainPageComponent implements OnInit {

  MenuIds = MenuIds;

  sections: Section[] = [];
  selectedSection?: Section;

  constructor() { }


  ngOnInit(): void {
    this.sections = [
      { Id: 1,Title: 'Sección 1'},
      { Id: 2,Title: 'Sección 2'},
      { Id: 3,Title: 'Menú'},
      { Id: 4,Title: 'Ajustes'}
    ]
  }

  onSelectedMenuSection(event: Section) {
    if(event)
    this.selectedSection = event;
  }

  

}
