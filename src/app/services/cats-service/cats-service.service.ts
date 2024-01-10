import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsServiceService {

  private cats = [
    {
      id: 1,
      name: 'Fenix',
      description: 'Gatto dal pelo nero e dal carattere mite',
      image: 'https://images.unsplash.com/photo-1605895773434-3579e181bc3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhdHRvJTIwbmVyb3xlbnwwfHwwfHx8MA%3D%3D'
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
