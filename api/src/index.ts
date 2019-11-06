import mongoose from 'mongoose'

// pre-configurations
import { preConfigureMeseretUtils } from 'meseret-utils/dist/pre-state'
import { preConfigureAccountApi } from 'account-api/dist/pre-state'
preConfigureAccountApi({ mongooseInstance: mongoose })
preConfigureMeseretUtils({ mongooseInstance: mongoose })

// imports
import { ServerApp } from 'meseret'
import { configureAccountApi } from 'account-api/dist/state'
import { configureMeseretUtils } from 'meseret-utils/dist/state'

import { serverAppConfig } from './configs/server-app-config'

// server app
export const serverApp = new ServerApp(serverAppConfig)

// initiations
configureAccountApi({ serverApp })
configureMeseretUtils({ serverApp })

// start
serverApp.start().catch(console.error)
