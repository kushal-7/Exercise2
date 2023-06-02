import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  heroForm: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.heroForm.patchValue({
      name: this.selectedHero.name
    });
  }

  onSubmit() {
    if (this.heroForm.valid && this.selectedHero) {
      return this.selectedHero.name = this.heroForm.value.name;
    }
  }
  
}


