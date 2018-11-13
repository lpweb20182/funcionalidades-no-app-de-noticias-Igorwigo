import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../tag.service';

import { Noticia } from './../noticia.model';



@Component({
  selector: 'app-admin-alterar-tag',
  templateUrl: './admin-alterar-tag.component.html',
  styleUrls: ['./admin-alterar-tag.component.css']
})
export class AdminAlterarTagComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private service: TagService) { }
  tag = null;
  tag_erro = false;
  salvar_ok = false;
  salvar_erro = false; 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.encontrar(Number.parseInt(id)).subscribe(noticia => {
      if (!noticia) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.tag = this.tag;
             
      }
    },
    erro => this.tag_erro = true);
  }

  
  salvar (){
    this.service.alterar(this.tag.id, this.tag).subscribe(
    autor => {
      this.salvar_ok = true;
    },
    erro => {
      console.log(erro);
      this.salvar_erro = true;
    }
  )
  }


}
