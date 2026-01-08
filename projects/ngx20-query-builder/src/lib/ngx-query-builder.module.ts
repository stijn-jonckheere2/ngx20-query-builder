import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QueryArrowIconDirective } from './query-builder/query-arrow-icon.directive';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { QueryButtonGroupDirective } from './query-builder/query-button-group.directive';
import { QueryEmptyWarningDirective } from './query-builder/query-empty-warning.directive';
import { QueryEntityDirective } from './query-builder/query-entity.directive';
import { QueryFieldDirective } from './query-builder/query-field.directive';
import { QueryInputDirective } from './query-builder/query-input.directive';
import { QueryOperatorDirective } from './query-builder/query-operator.directive';
import { QueryRemoveButtonDirective } from './query-builder/query-remove-button.directive';
import { QuerySwitchGroupDirective } from './query-builder/query-switch-group.directive';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        QueryBuilderComponent,
        QueryInputDirective,
        QueryOperatorDirective,
        QueryFieldDirective,
        QueryEntityDirective,
        QueryButtonGroupDirective,
        QuerySwitchGroupDirective,
        QueryRemoveButtonDirective,
        QueryEmptyWarningDirective,
        QueryArrowIconDirective
    ],
    exports: [
        QueryBuilderComponent,
        QueryInputDirective,
        QueryOperatorDirective,
        QueryFieldDirective,
        QueryEntityDirective,
        QueryButtonGroupDirective,
        QuerySwitchGroupDirective,
        QueryRemoveButtonDirective,
        QueryEmptyWarningDirective,
        QueryArrowIconDirective
    ]
})
export class NgxQueryBuilderModule { }
