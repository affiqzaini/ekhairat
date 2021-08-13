import { NuxtConfig } from '@nuxt/types'

require('dotenv').config()

export const server: NuxtConfig['server'] = {
  host: process.env.APP_HOST,
  port: process.env.APP_PORT
}
