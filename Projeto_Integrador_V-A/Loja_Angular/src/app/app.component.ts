import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itens: Item[] = [
    { id: 1, nome: 'Boné', preco: 3500, imagem: 'assets/bone.png' },
    { id: 2, nome: 'Calça', preco: 2200, imagem: 'assets/calça.png' },
    { id: 3, nome: 'Bermuda', preco: 350, imagem: 'assets/bermuda.png' },
    { id: 4, nome: 'Camisa', preco: 150, imagem: 'assets/camisa.png' },
    { id: 5, nome: 'Tenis', preco: 400, imagem: 'tenis.png' }
  ];

  carrinho: Item[] = [];

  adicionarAoCarrinho(item: Item) {
    this.carrinho.push(item);
  }
}