import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions:Array<any>,accessLinks:Array<any>
  } = {
    defaultOptions: [],
    accessLinks: []
  };

  customOptions: Array<any> = [];

  constructor(){
    
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'bi bi-house',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'bi bi-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'bi bi-collection',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLinks = [
      {
        name: 'Crear lista',
        icon: 'bi-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'bi-heart'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }


}
