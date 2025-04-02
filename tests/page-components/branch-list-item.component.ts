import { type Page, Locator } from "@playwright/test";

export default class BranchListItemComponent {
  public readonly page: Page;

  public readonly self: Locator;
  public readonly branchNameText: Locator;

  constructor(page: Page, locator: Locator) {
    this.page = page;
    this.self = locator;
    this.branchNameText = this.self.locator("[class ^= 'small-text']");
  }

  public async click() {
    await this.self.click();
  }

  public async getBranchName() {
    return await this.branchNameText.innerText();
  }
}
