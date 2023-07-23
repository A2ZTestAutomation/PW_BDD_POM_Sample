import { Page, Locator } from "@playwright/test"
export default class LoginPage {
    readonly page: Page
    readonly emailEl: Locator
    readonly pwdEl: Locator
    readonly loginBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.emailEl = this.page.getByPlaceholder('Email')
        this.pwdEl = this.page.getByPlaceholder('Password')
        this.loginBtn = this.page.getByRole('button', { name: 'Sign in' })

    }
    async enterUsername(strUser: string) {
        await this.emailEl.type(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.pwdEl.type(strPwd)
    }
    async clickLoginBtn() {
        await this.loginBtn.click()
    }
    async validLogin(strUser: string, strPwd: string) {
        await this.enterUsername(strUser)
        await this.enterPassword(strPwd)
        await this.clickLoginBtn();
    }
}