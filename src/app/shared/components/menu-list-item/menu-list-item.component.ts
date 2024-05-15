import { Component, Input, OnInit } from '@angular/core';
import { MenuListItemModel } from '../../models/menu-item-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  standalone: true,
  styleUrls: ['./menu-list-item.component.scss'],
  imports: [CommonModule]
})
export class MenuListItemComponent implements OnInit {
  @Input() menuListItemConfig: MenuListItemModel = { Title: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
