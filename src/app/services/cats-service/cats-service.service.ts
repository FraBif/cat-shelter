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
      description: 'Gatto dal pelo maculato e dal carattere schivo',
      image: 'https://images.unsplash.com/photo-1501815784824-f1dc1620eab2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2F0dG8lMjBtYWN1bGF0b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Ivy',
      description: 'Gatto dal pelo tigrato e dal carattere affettuoso',
      image: 'https://media.istockphoto.com/id/1222161683/it/foto/il-gatto-del-bengala-sta-avvitando-gli-occhi-e-mentendo.webp?b=1&s=170667a&w=0&k=20&c=UdrLihHYlIhqqXutlHM7ShFat8PPcMDX8N_nntGrWPo='
    },
    {
      id: 4,
      name: 'Max',
      description: 'Gatto dal pelo arancione e dal carattere vivace',
      image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0dG8lMjBhcmFuY2lvbmV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 5,
      name: 'Garfield',
      description: 'Gatto dal pelo arancione e dal carattere pigro',
      image:'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2F0dG8lMjBhcmFuY2lvbmV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 6,
      name: 'Nimue',
      description: 'Gatto dal pelo tigrato e dal carattere dominante',
      image: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2F0dG8lMjB0aWdyYXRvJTIwcGVsbyUyMGZvbHRvfGVufDB8fDB8fHww'
    },
    {
      id: 7,
      name: 'Nobu',
      description: 'Gatto dal pelo bianco e dal carattere curioso',
      image: 'https://images.unsplash.com/photo-1531040630173-7cfb894c8eaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2F0dG8lMjBiaWFuY298ZW58MHx8MHx8fDA%3D'
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
