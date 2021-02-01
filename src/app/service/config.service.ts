import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Webshop 15';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Férfi ruhák', link: '/ferfi'},
    {text: 'Női ruhák', link: '/noi'},
  ];

  constructor() { }
}
