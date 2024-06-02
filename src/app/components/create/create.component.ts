import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  newNote: Note = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    color: '',
  };
  componentCreate = false;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private actvivatedRoute: ActivatedRoute
  ) {}

  createNote(): void {
    this.noteService.create(this.newNote);
    console.log(this.newNote);
    alert('Notes created Successfully ');
    this.newNote = {
      id: 0,
      title: '',
      description: '',
      date: new Date(),
      color: '',
    };
  }
  goBack() {
    this.router.navigate(['']);
  }
}
