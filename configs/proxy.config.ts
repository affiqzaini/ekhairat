require('dotenv').config()

export const proxy = {
  '/api': {
    target: process.env.API_URL,
    pathRewrite: {
      '^/api': '/api'
    }
  }
}
