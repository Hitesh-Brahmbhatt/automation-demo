import LoginPage from '../pages/login.page';
import { viewportWidth, viewportHeight} from '../lib/config';

describe('Login Test ', () => {
    let loginpage = new LoginPage();
    
    beforeAll(async () => {
        jest.setTimeout(15000);
        await page.setViewport({ 
            width: viewportWidth, 
            height: viewportHeight 
        })
    })
    
    it('Should not login with incorrect credentials', async () => {
        await loginpage.openApplication();
        await loginpage.clickLoginLink();
        await loginpage.enterIncorrectLoginCredentials();
        await loginpage.clickLoginButton();
        await loginpage.validateIncorrectCredentialErrorMsg();
    });
});