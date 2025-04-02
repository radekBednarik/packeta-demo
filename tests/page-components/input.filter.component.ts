import { type Page, Locator } from "@playwright/test";

export default class InputFilterComponent {
  public readonly page: Page;

  public readonly self: Locator;

  constructor(page: Page) {
    this.page = page;

    this.self = this.page.getByTestId("filter_button");
  }

  public async click() {
    await this.self.click();
  }
}
