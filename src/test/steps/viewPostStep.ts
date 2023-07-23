import { Given, When, Then } from '@cucumber/cucumber'
import { Browser, Page, chromium } from "@playwright/test"
import LoginPage from "../../../pages/loginPage"
import GlobalFeedListPage from "../../../pages/globalFeedPage"
import HomePage from "../../../pages/homePage"
import PostViewPage from "../../../pages/postViewPage"
import { expect } from '@playwright/test'

const uName = "corpdevops@gmail.com"
const pwd = "conduit123"
const articleTitle = "MyNewArticle3"

let globalListPage: GlobalFeedListPage
let viewPostPage: PostViewPage
let homePage: HomePage
let loginPage: LoginPage
let page: Page
let browser: Browser

Given('User must launch login page', async function () {
    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/')
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    await homePage.navigateToLogin()
});

When('User enters valid credentials', async function () {
    await loginPage.validLogin(uName, pwd)
});

Then('Should display Home page', async function () {
    await homePage.validateLogin();
});

Given('Post must be  listed', async function () {
    homePage = new HomePage(page)
    viewPostPage = new PostViewPage(page)
    await homePage.navigateToGlobalFeed()
    globalListPage = new GlobalFeedListPage(page, articleTitle)
});

When('User select the post', async function () {
    await globalListPage.clickArticle()
});

Then('Should display the post details', async function () {
    await expect(viewPostPage.isPostAvailable(articleTitle)).toContainText(articleTitle)
});
