import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage {
  imc: number;
  caloriesMax: number;
  water: number;
  weightLimits: { min: number; max: number };
  date: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as {
      imc: number;
      caloriesMax: number;
      water: number;
      weightLimits: { min: number; max: number };
      date: string;
    };

    // Si nous ne sommes pas revenus de la page Home, chargeons depuis le Local Storage
    if (state) {
      this.imc = state.imc;
      this.caloriesMax = state.caloriesMax;
      this.water = state.water;
      this.weightLimits = state.weightLimits;
      this.date = state.date;
    } else {
      const savedResults = JSON.parse(localStorage.getItem('calculs') || '[]');
      const lastResult = savedResults[savedResults.length - 1]; // Récupérer le dernier résultat
      this.imc = lastResult.imc;
      this.caloriesMax = lastResult.caloriesMax;
      this.water = lastResult.water;
      this.weightLimits = lastResult.weightLimits;
      this.date = lastResult.date;
    }
  }
}
