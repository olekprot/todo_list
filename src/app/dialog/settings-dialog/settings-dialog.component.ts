import {Component, OnInit } from '@angular/core';
import {Priority} from "../../model/Priority";
import {MatDialogRef} from "@angular/material/dialog";
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {
  public priorities: Priority[];

  constructor(
      public dialogRef: MatDialogRef<SettingsDialogComponent>,
      public dataHandler: DataHandlerService
  ) { }

  ngOnInit( ) {
    this.dataHandler.getAllPriorities().subscribe( priorities => this.priorities = priorities);
  }
  public onClose() {
    this.dialogRef.close(false);
  }

  public onAddPriority(priority: Priority): void {
    this.dataHandler.addPriority(priority).subscribe();
  }

  public onDeletePriority(priority: Priority): void {
    this.dataHandler.deletePriority(priority.id).subscribe();
  }

  public onUpdatePriority(priority: Priority): void {
    this.dataHandler.updatePriority(priority).subscribe();
  }
}
