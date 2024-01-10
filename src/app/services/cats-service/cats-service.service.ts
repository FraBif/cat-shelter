import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsServiceService {

  private cats = [
    {
      id: 1,
      name: 'Fenix',
      description: 'Gatto dal pelo nero e dal carattere mite'
    },
    {
      id: 2,
      name: 'Babette',
      description: 'Gatto dal pelo maculato e dal carattere schivo'
    },
    {
      id: 3,
      name: 'Ivy',
      description: 'Gatto dal pelo tigrato e dal carattere affettuoso'
    },
    {
      id: 4,
      name: 'Max',
      description: 'Gatto dal pelo arancione e dal carattere vivace'
    },
    {
      id: 5,
      name: 'Garfield',
      description: 'Gatto dal pelo arancione e dal carattere pigro'
    },
    {
      id: 6,
      name: 'Nimue',
      description: 'Gatto dal pelo tigrato e dal carattere dominante'
    },
    {
      id: 7,
      name: 'Nobu',
      description: 'Gatto dal pelo bianco e dal carattere curioso'
    },

  ]

  getCats(): any[]{
    return this.cats
  }

  getCatById(id: number): any | undefined {
    return this.cats.find(cat => cat.id === id);
  }

  constructor() { }
}
