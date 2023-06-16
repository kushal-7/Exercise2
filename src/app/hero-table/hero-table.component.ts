import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() { }

  onRowClick(hero: Hero) {
    this.router.navigate(['/heroes', hero.id]);
  }
}

