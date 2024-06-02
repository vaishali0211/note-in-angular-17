import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  note: Note[] = [];
  constructor(
    private noteservice: NoteService,
    private activtedRoute: ActivatedRoute,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.note = this.noteservice.getAll();
  }
  deleteNote(noteId: number): void {
    if (confirm('Do you want to delete?')) {
      this.noteservice.delete(noteId);
      window.location.reload();
    } else {
      return;
    }
  }
  getBgColor(x: String | null): string {
    if (x) {
      return `background-color:${x}`;
    } else {
      return `background-color:black`;
    }
  }
}
