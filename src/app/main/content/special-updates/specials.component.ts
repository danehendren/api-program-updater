import { Component, OnInit } from '@angular/core';
import { SpecialUpdate } from './special.model';

@Component({
  selector: 'fuse-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})

export class FuseSpecialsComponent implements OnInit {

  constructor() { }

  specialUpdates: SpecialUpdate[];

  ngOnInit() {
    this.specialUpdates = [];
  }

  addSpecialUpdates() {
    let nextId = 1;
    if (this.specialUpdates.length > 0) {
      nextId = this.specialUpdates[this.specialUpdates.length - 1].id + 1;
    }

    this.specialUpdates.push({
      id: nextId,
      promoTag: '',
      version: 1,
      url: ''
    });

  }

  deleteSpecialUpdate(update: SpecialUpdate) {
    const index = this.specialUpdates.findIndex(updateEntryInArray => updateEntryInArray.id === update.id);
    if (index !== -1) {
      this.specialUpdates.splice(index, 1);
    }
  }
}
