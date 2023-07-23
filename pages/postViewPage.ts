import { Page } from "@playwright/test"

export default class PostViewPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    isPostAvailable(artTitle: string) {
        return this.page.getByRole('heading', { name: artTitle })
    }
}
