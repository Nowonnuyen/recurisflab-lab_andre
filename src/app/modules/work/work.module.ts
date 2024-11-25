import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import { UiModule } from 'src/app/recursiflab/shared/ui/ui.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, WorkRoutingModule, UiModule, MatDialogModule],
})
export class WorkModule { }
