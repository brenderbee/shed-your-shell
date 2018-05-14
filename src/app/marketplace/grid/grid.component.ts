import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item.model';
import { ItemsService } from '../../items.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [ItemsService]
})
export class GridComponent implements OnInit {
@Input() childTypeParam: string;

  items: FirebaseListObservable<any[]>;

  constructor(private itemsService: ItemsService ) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }


}
