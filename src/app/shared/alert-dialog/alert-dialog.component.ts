import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'alert-dialog',
    templateUrl: './alert-dialog.component.html'
})
export class AlertDialog implements OnInit {
    title: string = '';
    message: string = '';

    constructor(
        public dialogRef: MatDialogRef<AlertDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit(): void {
    }

    onConfirm(): void {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }

    onDismiss(): void {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
}