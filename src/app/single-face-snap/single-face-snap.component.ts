import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  snapped!: boolean;
  likeText!: string;

  ngOnInit(): void {
    this.likeText = 'Like';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
