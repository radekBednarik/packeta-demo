import { test } from "../fixtures/init.fixture";
import { expect } from "@playwright/test";

import BranchListComponent from "../page-components/branch-list.component";
import SearchComponent from "../page-components/search.component";
import FilterComponent from "../page-components/filter.component";
import BranchDetailComponent from "../page-components/branch-detail.component";
import { describe } from "node:test";

describe("in Prague 9", () => {
  test("there should be at least one wheelchair accessible z-box", async ({
    page,
  }) => {
    const search = new SearchComponent(page);
    const filter = new FilterComponent(page);
    const branchList = new BranchListComponent(page);

    await branchList.setTopListItem();
    // we have to wait until list is ready
    await branchList.topListItem!.self.waitFor({ state: "visible" });

    await search.input.fillInput("Prague 9");
    await search.filter.click();
    await filter.otherServices.click();
    await filter.otherServices.checkWheelchair();
    await filter.submit();

    const branchName = await branchList.topListItem!.getBranchName();
    await branchList.topListItem!.click();

    const branchDetail = new BranchDetailComponent(
      page,
      new RegExp(branchName, "i"),
    );
    await expect(branchDetail.self).toBeAttached();
    await expect(branchDetail.branchName).toBeVisible();

    await branchDetail.clickTabOther();
    await branchDetail.tabOtherPointInfoRows
      .last()
      .waitFor({ state: "attached" });

    const wheelchairRow = branchDetail.tabOtherPointInfoRows.nth(2);
    await wheelchairRow.scrollIntoViewIfNeeded();

    await expect(wheelchairRow).toHaveText(/wheelchair access/i);
  });
});
