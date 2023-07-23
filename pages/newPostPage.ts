import { Page } from "@playwright/test"
export default class NewPostPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page

    }
    async enterArticle(strArticle: string) {
        await this.page.getByPlaceholder('Article Title').type(strArticle)
    }
    async enterAbtArticle(strAbout: string) {
        await this.page.getByPlaceholder('What\'s this article about?').type(strAbout)
    }
    async enterArticleDetail(strDetail: string) {
        await this.page.getByPlaceholder('Write your article (in markdown)').type(strDetail)
    }
    async enterTag(strTag: string) {
        await this.page.getByPlaceholder('Enter tags').type(strTag)

    }
    async clickPublishBtn() {
        await this.page.getByRole('button', { name: 'Publish Article' }).click()
    }
    isArticleCreated(artTitle: string) {
        return this.page.getByRole('heading', { name: artTitle })
    }
}