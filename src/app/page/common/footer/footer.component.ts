import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  sb_horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  sb_verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}


  ngOnInit(): void {
  }

  snackbarEmail() {
    this._snackBar.open('Email: *******.romero***@****.com', 'Close', {
      duration: 5000,
      horizontalPosition: this.sb_horizontalPosition,
      verticalPosition: this.sb_verticalPosition,
    });
  }

  snackbarHomeWork() {
    this._snackBar.open('Discord: Niks#9049', 'Close', {
      duration: 5000,
      horizontalPosition: this.sb_horizontalPosition,
      verticalPosition: this.sb_verticalPosition,
    });
  }
}
