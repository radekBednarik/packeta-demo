import { type Page, Locator } from "@playwright/test";
import BasePage from "../page-objects/base.page";

export default class ConsentModal extends BasePage {
  public readonly btnAcceptAll: Locator;

  constructor(page: Page) {
    super(page);

    this.btnAcceptAll = this.page.getByRole("button", { name: /accept all/i });
  }

  public async acceptAll() {
    await this.btnAcceptAll.click();
    await this.btnAcceptAll.waitFor({ state: "hidden" });
  }
}
