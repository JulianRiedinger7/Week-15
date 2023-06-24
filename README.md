# Swag Labs E2E Automation

## About this Project

This project is a frontend automation test about [Swag Labs](https://www.saucedemo.com/) using [WebDriverIO](https://webdriver.io/) and [Jasmine](https://jasmine.github.io/)

![Swag Labs Login](https://i.imgur.com/OxTB3Du.png)

## Objective

The objective of the project is to check all the accepted users and see the behaviour of each one inside the page purchasing an item.

![Swag Labs Home](https://i.imgur.com/ZOlEk2t.png)

## Allure Reporter

This project uses Allure Reporter to generate comprehensive and visually appealing test reports.
It capture detailed information about test execution and presents it in an easy-to-read format. This also makes it easier to analyze and debug any issue that may arise during test runs.

![Allure report](https://i.imgur.com/nZsLrHa.png)

To run allure reporter you should use the following command:

```
npm run allure-reporter
```

## Conclusions

### standard_user:

This user has a perfect functionallity both logging into the website and purchasing an item. It should be used as reference.

### performance_glitch_user:

This user is taking a lot of time in the requests like logging in, filtering items, going back home from checkout, etc. This might be a server problem, so it's important to check the Backend API infrastructure.

### problem_user:

This user has bugs mainly in the purchase flow. It has incorrect images for products and can't add an item from details page. This is why tests get stucked when trying to finish the purchase.

## How to Run

1. Clone this repo using this command:

```
git clone https://github.com/JulianRiedinger7/Week-14.git
```

2. Install dependencies using this command:

```
  npm install
```

3. Run the e2e test with this command:

```
  npx wdio
```
