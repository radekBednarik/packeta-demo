import { test, expect } from '@playwright/test';
import HomePage from '../page-objects/home/home.page';

let homePage: HomePage;

test.use({ geolocation: { longitude: 14.4785, latitude: 50.0948 } }) // Prague

test.describe('Location detection', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await homePage.visit();
  })
})
