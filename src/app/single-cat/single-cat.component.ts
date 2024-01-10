import { Component, OnInit } from '@angular/core';
import { CatsServiceService } from '../services/cats-service/cats-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-cat',
  standalone: true,
  imports: [],
  templateUrl: './single-cat.component.html',
  styleUrl: './single-cat.component.css'
})
export class SingleCatComponent implements OnInit{

  
  gatto: any
  constructor(private route: ActivatedRoute, private gatti: CatsServiceService){

  }
  ngOnInit(): void {
      this.route.params.subscribe(params => {
      const catId = +params['id'];
      this.gatto = this.gatti.getCatById(catId);
      } )
     
  }

}
