import { Component, OnInit } from '@angular/core';
import { CatsServiceService } from '../services/cats-service/cats-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})
export class CatsComponent implements OnInit {
    
  public gatti: any

  constructor(private cats: CatsServiceService){}
  ngOnInit(): void {
      this.gatti = this.cats.getCats()
  }
 
}
