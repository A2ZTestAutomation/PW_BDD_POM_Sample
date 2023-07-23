import { Page, Locator, expect } from '@playwright/test'
export default class HomePage {
    readonly page: Page
    readonly postLink: Locator
    readonly homeLink: Locator
    readonly loginLink: Locator
    readonly globalfeedList: Locator


    constructor(page: Page) {
        this.page = page
        this.postLink = this.page.getByRole('link', { name: 'New Post' })
        this.homeLink = this.page.getByRole('link', { name: 'Home' })
        this.loginLink = this.page.getByRole('link', { name: 'Sign in' })
        this.globalfeedList = this.page.getByRole('link', { name: 'Global Feed' })
    }
    async createNewPost() {
        await this.postLink.click()
    }
    async navigateToHome() {
        await this.homeLink.click()
    }
    async navigateToLogin() {
        await this.loginLink.click()
    }
    async navigateToGlobalFeed() {

        await this.globalfeedList.click()
    }
    async validateLogin() {

        await expect(this.loginLink).not.toBeVisible()
    }
}