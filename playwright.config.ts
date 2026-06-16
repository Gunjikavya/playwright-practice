import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,
  retries: 1,
  workers: 2,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    headless: false,

    //  Capture screenshot for ALL tests (pass + fail)
    screenshot: 'on',

    //  Record video for ALL tests
    video: 'on',

    //  Trace (optional but useful)
    trace: 'on',

    launchOptions: {
      slowMo: 1000
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    }
  ]

});