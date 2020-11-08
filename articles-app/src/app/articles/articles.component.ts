import {Component, OnInit} from '@angular/core';
import {ArticleData} from '../data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles;

  constructor() {
  }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}
