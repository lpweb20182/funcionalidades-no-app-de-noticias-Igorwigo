import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';
@Component({
  selector: 'app-admin-tag',
  templateUrl: './admin-tag.component.html',
  styleUrls: ['./admin-tag.component.css']
})
export class AdminTagComponent implements OnInit {

  tag = null;
  salvar_ok = false;
  salvar_erro = false;




  constructor(private autores_services: TagService) { }

  ngOnInit() {

  }

  salvar() {
    this.autores_services.salvar(this.tag, this.slugify(this.tag)).subscribe(
      autor => {
        this.salvar_ok = true;
      },
      erro => {
        console.log(erro);
        this.salvar_erro = true;
      }
    )
  }




  /**
 * Função para gerar slug.
 * @see https://medium.com/@matthagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
 * @param string A string utilizada como base para criar a slug
 */
  slugify(string) {
    const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple — with single -
      .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
  }



}
