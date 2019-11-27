import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JHipsterSpringAngularSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JHipsterSpringAngularSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
