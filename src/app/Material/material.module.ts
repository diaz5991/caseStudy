import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { DatePipe } from "@angular/common";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    exports: [
        MatPaginatorModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatTooltipModule,
        MatDialogModule,
        FormsModule,
        MatRippleModule,
        MatTabsModule,
        MatDividerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatStepperModule
    ],
    providers: [DatePipe]
})
export class MaterialModule {}