import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    NgIf,
    MatMenuModule,      
    MatExpansionModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavMode: 'over' | 'side' = 'side';
  sidenavOpened = true;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.observer.observe(['(max-width: 767px)'])
      .subscribe(result => {
        if (result.matches) {
          this.sidenavMode = 'over';
          this.sidenavOpened = false;
        } else {
          this.sidenavMode = 'side';
          this.sidenavOpened = true;
        }
      });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}