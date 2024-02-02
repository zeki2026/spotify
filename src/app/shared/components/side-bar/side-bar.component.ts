import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router){
    
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'bi bi-house',
        router: ['/', 'tracks']
      },
      {
        name: 'Buscar',
        icon: 'bi bi-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'bi bi-collection',
        router: ['/', 'favorite'],
        query: { hola: 'mundo', as:'as' }
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

  goTo($event: any):void{
    this.router.navigate(['/','favorite'],{
      queryParams: {
        kei1: 'values1',
        kei2: 'values2',
        kei3: 'values3',
      }
    })
    console.log($event);
  }

}
