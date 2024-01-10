import { Component, OnInit } from '@angular/core';
import { CatsServiceService } from '../services/cats-service/cats-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDividerModule, MatListModule],
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
