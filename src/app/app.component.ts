import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Bnoa',
      'moi-même',
      'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Louis',
      'fils',
      'https://plus.unsplash.com/premium_photo-1661962811228-bebf31bd77e4?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new Date(),
      2
    );
    this.myLastSnap = new FaceSnap(
      'OPhélie',
      'fille',
      'https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      new Date(),
      6
    );
  }
}
