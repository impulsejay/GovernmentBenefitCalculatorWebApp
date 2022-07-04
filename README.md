# GovernmentBenefitCalculatorWebApp
##Build and run
1. Navigate to the directory where it contains GovernmentBenefitCalculatorWebApp.sln. Double click to open the solution through Visual Studio.
2. Once done, under the build tab, click on build/rebuild solution.
3. Now you can run the build through Web Server(Any browser)
4. The output will be shown on the browser page.

##Test
1. Open the Package Manager Console.
2. Enter "npm test".
3. The test result from the file(benefitCalculator.test.js) will be shown.

##Assumptions and Design Decisions
1. I would split the codes based on MVC pattern where it contains Model, View and Controller but in this case i did not include the View portion
as my sole focus was on the benefits logic due to time constraint. 
2. Other than MVC, i did not include routes, request handlers due to time contraint.
3. I know that i should not put any other codes other then the codes to start the server, or codes to reroute in server.js, if i had more time
i would refactor the codes. For now, i only split the logic for benefitCalculator due to the JEST unit tests that i had created.
4. I did not include validation/boundary limits of age, citizen, floor, unit, postalCode, incomePerMonth due to time constraint.

