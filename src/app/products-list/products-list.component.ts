import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})

/**
 * @ProductsListComponent a  component rendering  all ProductRows
 * and storing the currently selected Product
 */
export class ProductsListComponent {

  /**
   *  @input productList - the Product[] passed to us
   */

  /**
   *  @input productList - the Product[] passed to us
   */

  @Input()
  productList: Product[] = [];

  /**
   * @output onProductSelected - outputs the current
   * Product whenever a new Product is selected
   */

  @Output() onProductSelected: EventEmitter<Product>;


  private currentProduct: Product | undefined;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }



  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
