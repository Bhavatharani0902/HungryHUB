import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
  export class BookComponent {
    public book: Book = new Book();
  }
