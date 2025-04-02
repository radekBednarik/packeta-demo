import { type Page, Locator } from "@playwright/test";

export default class InputSearchComponent {
  public readonly page: Page;

  public readonly self: Locator;
  public readonly input: Locator;
  public readonly autocompleteList: Locator;

  constructor(page: Page) {
    this.page = page;

    this.self = this.page.locator("[class ^= 'inputWrapper']");
    this.input = this.self.getByRole("textbox");
    this.autocompleteList = this.page.getByTestId("autocomplete_list");
  }

  public async fillInput(text: string) {
    await this.input.clear();
    await this.input.pressSequentially(text, { delay: 300 });
    await this.autocompleteList.waitFor({ state: "visible" });
    await this.input.press("Enter");
  }
}
