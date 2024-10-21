import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  hauteur: number = 0;
  poids: number = 0;
  annee: number = 0;

  constructor(private router: Router) {}

  calculate() {
    const age = new Date().getFullYear() - this.annee;
    const imc = this.calculateIMC(this.hauteur, this.poids);
    const caloriesMax = this.calculateCalories(this.hauteur, age);
    const water = this.calculateWater(this.poids);
    const weightLimits = this.getWeightLimits(this.hauteur);
    
    const result = {
      imc,
      caloriesMax,
      water,
      weightLimits,
      date: new Date().toISOString(),
    };

    // Enregistrer dans le Local Storage
    this.saveToLocalStorage(result);

    // Navigation vers la page Result
    this.router.navigate(['/result'], {
      state: result
    });
  }

  saveToLocalStorage(result: any) {
    // Récupérer les résultats précédents
    const results = JSON.parse(localStorage.getItem('calculs') || '[]');
    results.push(result);
    localStorage.setItem('calculs', JSON.stringify(results));
  }

  calculateIMC(hauteur: number, poids: number): number {
    const hauteurEnMetres = hauteur / 100;
    return parseFloat((poids / (hauteurEnMetres * hauteurEnMetres)).toFixed(2));
  }

  calculateCalories(hauteur: number, age: number): number {
    return 10 * hauteur - 5 * age + 100; // Formule simple pour l'exemple
  }

  calculateWater(poids: number): number {
    return poids * 0.03; // Eau en litres
  }

  getWeightLimits(hauteur: number): { min: number, max: number } {
    const hauteurEnMetres = hauteur / 100;
    const imcMin = 18.5;
    const imcMax = 24.9;
    return {
      min: parseFloat((imcMin * hauteurEnMetres * hauteurEnMetres).toFixed(2)),
      max: parseFloat((imcMax * hauteurEnMetres * hauteurEnMetres).toFixed(2)),
    };
  }
}
