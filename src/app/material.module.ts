import { NgModule } from '@angular/core';
import { MdToolbarModule, MdTooltipModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MD_ERROR_GLOBAL_OPTIONS, showOnDirtyErrorStateMatcher } from '@angular/material';
import { MatSelectModule, MatSidenavModule } from '@angular/material';
import { MatProgressSpinnerModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule, MatMenuModule, MdDatepickerModule } from '@angular/material';

@NgModule({
  imports: [
    MdIconModule,
    MdTooltipModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MdDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatInputModule,
    MdToolbarModule,
    MatRadioModule,
    MatStepperModule,
    MdButtonModule,
    MatExpansionModule,
    MatListModule, MatCardModule
  ],
  providers: [
    {
      provide: MD_ERROR_GLOBAL_OPTIONS,
      useValue: {
        errorStateMatcher: showOnDirtyErrorStateMatcher
      }
    }
  ],
  exports: [
    MdIconModule,
    MdTooltipModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MdDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatInputModule,
    MdToolbarModule,
    MatRadioModule,
    MatStepperModule,
    MdButtonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }

