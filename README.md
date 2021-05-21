# Lab8

## Author(s)
- Akhilan Ganesh
- Praneet Bhoj

## Check your understanding q's
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)\
ANSWER: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.\
ANSWER: No. Since this is a messaging application, saying "message feature" is not really a specific enough feature for unit testing to be appropriate. The application as a whole is a messaging application, so testing the messaging functionality seems more like something that would fall under end-to-end testing.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters\
ANSWER: Yes. This is a very specific feature that can be tested without interacting with other components of the application, and can be tested simply by determining whether or not we would be able to type more than 80 characters into a message with the feature in place. So because of the specific focus of the feature, it seems appropriate to use unit testing.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?\
ANSWER: We expect the tests to fail because we are testing user interaction with the application, so if there is no browser open to allow user interaction, the tests would break.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?\
ANSWER: If we wanted to start from the settings page before every test case, the beforeAll callback would be:
```
beforeAll(async () => {
  await page.goto('http://127.0.0.1:5500');
  await page.click('header img');
  await page.waitForTimeout(500);
});
```