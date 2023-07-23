import { Page, Locator } from "@playwright/test"

export default class GlobalFeedListPage {
    readonly page: Page
    readonly artTitleLink: Locator
    readonly artTitle: string

    constructor(page: Page, artTitle: string) {
        this.page = page
        this.artTitleLink = this.page.getByRole('heading', { name: artTitle })
        this.artTitle = artTitle
    }
    async clickArticle() {
        await this.artTitleLink.click()
    }
}