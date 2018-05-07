import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }   from '@angular/common/http';
import { NgModule,ElementRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatPaginator,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';




import { AppComponent } from './app.component';
import { UsertableComponent } from './usertable/usertable.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
MatButtonModule,
MatMenuModule, 
MatCardModule, 
MatToolbarModule, 
MatIconModule, 
MatInputModule, 
MatTableModule, 
MatSortModule,
BrowserAnimationsModule,
HttpModule,
FormsModule,
BrowserModule,
MatDividerModule,
MatPaginatorModule,
HttpClientModule,
MatCheckboxModule,
CdkTableModule,
ReactiveFormsModule,
CommonModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule
  ],
  exports: [

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class PizzaPartyAppModule { }


