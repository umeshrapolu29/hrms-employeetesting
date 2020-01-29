import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
import { DilogeComponent } from 'app/diloge/diloge.component';

@Component({
  selector: 'app-viewnotice',
  templateUrl: './viewnotice.component.html',
  styleUrls: ['./viewnotice.component.scss']
})
export class ViewnoticeComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog) { }
    openSnackBar() {      
       this._snackBar.open("submit Successfully !!", "", { 
        duration: 3000,
        });                      
    }

  ngOnInit() {
  
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DilogeComponent, {
   
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

}
