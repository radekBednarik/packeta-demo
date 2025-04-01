import BasePage from "../base.page";
import ConsentModal from "../../modals/consent.modal";
import type { Page } from "@playwright/test";

export default class HomePage extends BasePage {
  public readonly url: string;

  public readonly consentModal: ConsentModal;

  constructor(page: Page) {
    super(page);

    this.url = "/";
    this.consentModal = new ConsentModal(page);
  }

  public async visit() {
    await super.visit(this.url);
    await this.consentModal.acceptAll();
  }
}
