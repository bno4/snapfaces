import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService) {}

  snapped!: boolean;
  likeText!: string;

  ngOnInit(): void {
    this.likeText = 'Like';
  }
  onSnap() {
    if (this.likeText === 'Like') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Like');
      this.likeText = 'Unlike';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Unlike');
      this.likeText = 'Like';
    }
  }
}
