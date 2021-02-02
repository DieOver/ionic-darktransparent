import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';

const EDE = [
    BoxComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    entryComponents: EDE,
    declarations: EDE,
    exports: EDE
})
export class ComponentsModule { }
