import { Component, OnChanges, OnInit, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { pipe, switchMap, timer } from 'rxjs';
import { ICartItem } from 'src/app/interfaces/cart-item.interface';
import { SendDataService } from 'src/app/services/send-data.service';

const SHOP_LIST: ICartItem[] = [
  { name: "Adibas Tracksuit", quantity: 3 },
  { name: "Readok Shoes", quantity: 1 },
  { name: "Nikey hat", quantity: 2 },
]

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShoppingCartComponent implements OnInit, OnChanges {

  @Input('actionEvents') actionEvents: { continue?: EventEmitter<void>} = {};

  public cardList = SHOP_LIST;

  constructor(private sendDataService: SendDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.actionEvents.continue?.pipe(switchMap(() => timer(1000)))
      .subscribe(() => this.sendDataService.sendData(this.cardList))
  }

  onSwipeLeft(item: ICartItem) {
    if (item.quantity <= 1) {
      return;
    }

    item.quantity -= 1;
  }

  onSwipeRight(item: ICartItem) {
    if (item.quantity >= 10) {
      return;
    }

    item.quantity += 1;
  }

}
