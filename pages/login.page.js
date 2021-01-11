import { baseUrl, username, password} from '../lib/config';
import { waitAndClickXPath } from '../lib/helpers';

export default class LoginPage {
    get headerContainer()                   { return '#header-container'; }
    get loginLink()                         { return '//*[@data-di-id="di-id-a07434dd-57526f66"]'; }    
    get username()                          { return '#idtoken1'; }    
    get password()                          { return '#idtoken2'; }  
    get loginButton()                       { return '(//*[@data-id="login"])[2]'; }
    get errorNotificationBlock()            { return '.error-notification-block'; }

    async openApplication() {
        await page.goto(baseUrl);
        await page.waitForSelector(this.headerContainer);
    }

    async clickLoginLink() {
        waitAndClickXPath(this.loginLink);
    }

    async enterIncorrectLoginCredentials() {
        await page.waitForTimeout(2000);
        await page.type(this.username, username);
        await page.type(this.password, password);
    }

    async clickLoginButton() {
       waitAndClickXPath(this.loginButton);
    }

    async validateIncorrectCredentialErrorMsg() {
        await page.waitForSelector(this.errorNotificationBlock);   
        const errorMsg = await page.$eval(this.errorNotificationBlock, el => el.textContent );
        expect(errorMsg).toContain('try again');
    }
}