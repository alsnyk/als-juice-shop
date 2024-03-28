/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT 
 */
//just adding this comment to have a change in a new branch for testing purposes
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: Error) => console.log(err))
