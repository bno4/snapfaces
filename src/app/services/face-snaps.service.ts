import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Bnoa',
      description: 'moi-même',
      imageUrl:
        'https://images.unsplash.com/photo-1682687219570-4c596363fd96?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      createdDate: new Date(),
      snaps: 200,
      location: 'Bourg',
    },
    {
      id: 2,
      title: 'Louis',
      description: 'fils',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661962811228-bebf31bd77e4?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      createdDate: new Date(),
      snaps: 2,
      location: 'Lyon',
    },
    {
      id: 3,
      title: 'Ophélie',
      description: 'fille',
      imageUrl:
        'https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      createdDate: new Date(),
      snaps: 6,
    },
  ];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found !');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'Like' | 'Unlike'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'Like' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
