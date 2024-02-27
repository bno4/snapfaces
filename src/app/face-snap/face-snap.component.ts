import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  likeText!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.likeText = 'Like';
  }
  onSnap() {
    if (this.snapped === false) {
      this.likeText = 'Unlike';
      this.faceSnap.snaps++;
      this.snapped = true;
    } else {
      this.faceSnap.snaps--;
      this.snapped = false;
      this.likeText = 'Like';
    }
  }
}
