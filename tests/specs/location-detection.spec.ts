import HomePage from "../page-objects/home/home.page";
import { test } from "../fixtures/init.fixture";
import { expect } from "@playwright/test";

let homePage: HomePage;

test.use({ geolocation: { longitude: 14.4785, latitude: 50.0948 } }); // Prague

test.describe("Location detection", () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test("url should be /", async () => {
    await expect(homePage.page).toHaveURL(homePage.url);
  });
});
