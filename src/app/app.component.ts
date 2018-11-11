import {Component, OnInit} from '@angular/core';
import {Item} from './item/item.component';
import {select, Store} from '@ngrx/store';
import {BasketAddAction, BasketRemoveAction} from '../ngrx/action/basket.action';
import {AppState} from '../ngrx/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  currentBasket: Item[];

  constructor(public store: Store<AppState>) {
    this.store.pipe(select(state => state.basket))
      .subscribe(basket => {
        if (basket && basket.items) {
          this.currentBasket = basket.items;
        }
      });
  }

  addItem(item: Item) {
    this.store.dispatch(new BasketAddAction(item));
  }

  removeItem(item: Item) {
    this.store.dispatch(new BasketRemoveAction(item));
  }

  ngOnInit() {
    this.items.push({ id: '1', name: 'item1'}, { id: '2', name: 'item2'}, { id: '3', name: 'item3'});
  }
}
