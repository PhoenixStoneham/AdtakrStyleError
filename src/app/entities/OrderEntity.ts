export class Order {
    constructor() {
        
    }
    ordernr!: string;
  
    credate!: Date;
  
    Details!: OrderDetail[];
  
  }
  
export class OrderDetail {
    constructor() {
          
      }
    ordernr!: string;
  
    EntityID!: string;
  
    EntityType!: string;
  
    Order!: Order;
  }