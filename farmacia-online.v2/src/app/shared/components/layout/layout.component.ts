import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: false
})
export class LayoutComponent {
  menuItems: MenuItem[] = [];

  selectedMember = null;

  members = [
      { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
  ];

  items: any;

  ngOnInit() {
    this.menuItems = [
      { label: 'Welcome', routerLink: '/home' },
      { label: 'Productos', routerLink: '/productos' }
    ];


    this.items = [
      {
          label: 'Profile',
          items: [
              {
                  label: 'User Profile',
                  icon: 'pi pi-cog',
                  route: '/user-profile'
              },
              {
                  label: 'Favourites',
                  icon: 'pi pi-inbox',
                  route: '/favourites'
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out',
                  route: '/logout'
              }
          ]
      },
      {
          separator: true
      }
  ];
  }
}
