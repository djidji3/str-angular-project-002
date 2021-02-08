import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
};

/* tablazat oszlopainak feljec tulajdonsagai */
export interface ItableCol {
  key: string;
  text: string;      /* oszlop neve */
  editable?: boolean /* szerkesztheto-e az adott oszlop */
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Webshop 15';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Férfi ruhák', link: '/ferfi'},
    {text: 'Női ruhák', link: '/noi'},
    {text: 'Admin', link: '/admin'},
  ];

    /* admin tablazat fejlecei */
    tableCols: ItableCol[] = [
      {key: 'id', text: "#", editable: false},
      {key:"catid", text:'CatId', editable:true},
      {key:"name", text:'Name', editable:true},
      {key:"description", text:'Description', editable:true},
      {key:"image", text:'Image', editable:true},
      {key:"price", text:'Price', editable:true},
      {key:"stock", text:'Stock', editable:true},
      {key:"featured", text:'Featured', editable:true},
      {key:"active", text:'Active', editable:true},
      ];

  constructor() { }
}
