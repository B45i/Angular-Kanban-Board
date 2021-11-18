import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, BoardComponent],
  imports: [BrowserModule, MatToolbarModule, DragDropModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
