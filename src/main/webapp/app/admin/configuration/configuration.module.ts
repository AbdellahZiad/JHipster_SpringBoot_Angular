import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JHipsterSpringAngularSharedModule } from 'app/shared/shared.module';

import { JhiConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [JHipsterSpringAngularSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [JhiConfigurationComponent]
})
export class ConfigurationModule {}
