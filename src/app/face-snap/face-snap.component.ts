import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title = 'Bnoa';
    this.description = 'Moi même';
    this.createdDate = new Date();
    this.snaps = 6;
  }
}
