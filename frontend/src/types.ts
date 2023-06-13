export interface Author {
 lastName: string;
 name:     string;
}

export enum Condition {
 Nuevo = "Nuevo",
 Usado = "Usado",
}

export interface Price {
 amount:   number;
 currency: Currency;
}

export enum Currency {
 Ars = "ARS",
}

export interface Item {
 condition:     Condition;
 free_shipping: boolean;
 id:            string;
 picture:       string;
 price:         Price;
 title:         string;
 sold_quantity: number;
 description: string; 
 categoryPath: string[],
}

export interface ItemsSearchResult {
    author:     Author;
    categories: string[];
    items:      Item[];
   }

export interface ItemsDetails {
    author:     Author;
    item:      Item;
   }