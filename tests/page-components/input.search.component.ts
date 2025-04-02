import { type Page, Locator } from "@playwright/test";

export default class InputSearchComponent {
  public readonly page: Page;

  public readonly self: Locator;
  public readonly input: Locator;

  constructor(page: Page) {
    this.page = page;

    this.self = this.page.locator("[class ^= 'inputWrapper']");
    this.input = this.self.getByRole("textbox");
  }

  public async fillInput(text: string) {
    await this.input.clear();
    await this.input.pressSequentially(text, { delay: 200 });
    await this.input.press("Enter");
  }
}
