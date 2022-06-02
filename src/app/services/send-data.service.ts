import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor() { }

  public sendData(cartData: ICartItem[]) {
    window.alert(`The order was successfully sent! \n ${ cartData.reduce(
      (acc, cur) => acc += ` ${cur.name}: ${cur.quantity}`, '') }`
    )
  }
}
