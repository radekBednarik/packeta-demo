import { type Page, Locator } from "@playwright/test";

export default class BranchDetailComponent {
  public readonly page: Page;

  public readonly self: Locator;
  public readonly branchName: Locator;
  public readonly branchNameText: Locator;
  public readonly btnChoose: Locator;

  public readonly tabOther: Locator;
  public readonly tabOtherPointInfoRows: Locator;

  constructor(page: Page, branchName: string | RegExp) {
    this.page = page;

    this.self = this.page.getByTestId("branch_dextail");
    this.branchName = this.self.locator("[class = 'branch-name']");
    this.branchNameText = this.self.getByText(branchName);
    this.btnChoose = this.page.getByRole("button", {
      name: /choose this box/i,
    });
    this.tabOther = this.self.getByText(/other/i);
    this.tabOtherPointInfoRows = this.self.locator("[class = 'point-info']");
  }

  public async clickTabOther() {
    await this.tabOther.click();
  }
}
