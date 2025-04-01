import HomePage from "../page-objects/home/home.page";
import ConsentModal from "../modals/consent.modal";
import { test as base, type Page } from "@playwright/test";

export const test = base.extend<{ page: Page }>({
  page: async ({ page }, use) => {
    const homePage = new HomePage(page);
    const consentModal = new ConsentModal(page);

    await homePage.visit();
    await consentModal.acceptAll();

    await use(page);
  },
});
