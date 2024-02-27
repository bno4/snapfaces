import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Bnoa',
        description: 'moi-même',
        imageUrl:
          'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdDate: new Date(),
        snaps: 200,
        location: 'Bourg',
      },
      {
        title: 'Louis',
        description: 'fils',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1661962811228-bebf31bd77e4?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdDate: new Date(),
        snaps: 2,
        location: 'Lyon',
      },
      {
        title: 'Ophélie',
        description: 'fille',
        imageUrl:
          'https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdDate: new Date(),
        snaps: 6,
      },
    ];
  }
}
