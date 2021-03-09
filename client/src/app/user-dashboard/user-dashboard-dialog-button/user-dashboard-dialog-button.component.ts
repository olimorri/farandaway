import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDashboardDialogInputComponent } from '../user-dashboard-dialog-input/user-dashboard-dialog-input.component';
import { ApiClientService } from '../../api-client.service';

@Component({
  selector: 'app-user-dashboard-dialog-button',
  templateUrl: './user-dashboard-dialog-button.component.html',
  styleUrls: ['./user-dashboard-dialog-button.component.css'],
})
export class UserDashboardDialogButtonComponent {
  constructor(
    public dialog: MatDialog,
    private apiClientService: ApiClientService,
  ) {}

  @Input() tripId: number | undefined = 0;

  email: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDashboardDialogInputComponent, {
      width: '250px',
      data: { email: this.email },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const inviteeEmail = result;
      this.apiClientService.getUserId(result).subscribe((user) => {
        const inviteeId = user[0];
        if (this.tripId)
          this.apiClientService
            .addInvitee(inviteeId, inviteeEmail, this.tripId)
            .subscribe();
        //use this userId to add the trip to the invitee
      });
      //this.email = result;
      //get userId first then send to server
      //send result to the server using apiClient
    });
  }
}
