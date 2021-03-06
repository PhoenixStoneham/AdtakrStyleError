import { Component, OnInit } from '@angular/core';
import { Order } from '../entities/OrderEntity';

type Variables = { start?: string, end?: string }

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  constructor() { }
  
  public start = new Date();
  public end = new Date();
  ngOnInit(): void {
  }



  public search() {
    
    
  }
  public Results: Order[] = [];
  public selectedOrder?: Order;
  public columnsToDisplay = ["ordernr", "credate"];
  public columnsToDisplayWithExpand = ["EntityID", "EntityType"]

}
