import { type Page, Locator } from "@playwright/test";

export default class BranchDetailComponent {
  public readonly page: Page;

  public readonly self: Locator;
  public readonly branchNameText: Locator;
  public readonly btnChoose: Locator;
  //z-box poděbrady, kunštátská 1239
  constructor(page: Page, branchName: string | RegExp) {
    this.page = page;

    this.self = this.page.getByTestId("branch_dextail");
    this.branchNameText = this.self.getByText(branchName);
    this.btnChoose = this.page.getByRole("button", {
      name: /choose this box/i,
    });
  }
}
