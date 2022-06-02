import { Component, OnInit } from '@angular/core';

interface IItem {
  name: string;
  quantity: number;
}

const SHOP_LIST: IItem[] = [
  { name: "Adibas Tracksuit", quantity: 3 },
  { name: "Readok Shoes", quantity: 1 },
  { name: "Nikey hat", quantity: 2 },
]

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})

export class ShoppingCardComponent implements OnInit {

  public cardList = SHOP_LIST;

  constructor() { }

  ngOnInit(): void {
  }

  onSwipeLeft(item: IItem) {
    if (item.quantity <= 1) {
      return;
    }

    item.quantity -= 1;
  }

  onSwipeRight(item: IItem) {
    if (item.quantity >= 10) {
      return;
    }

    item.quantity += 1;
  }

}
