1. Steps to Execute Automation Exercise Devsu, which contains the automation for exercise 1 and exercise 2. As well as its reports, 
as well as the excel document that contains the RTX matrix for exercise 1 and 2.

This are the steps used to load the automation test cases that were done as part of
the Devsu Challenge Exercise 1 and 2. 
1. Open the Folder AutomationExcerciceDevsu using Visual Studio code(just in case I also shared a link using Github), thus you will need to 
download it first to open and test this project..
https://github.com/TheMessiahJesus/JobsityAutomationChallenge
2. Go to Google and type download visual studio code
3. Open the first link and install visual studio code for your operative system, but as I
am currently using windows, so I suggest using it
4. Open the installer and click next->next->next->Install until the installation is
finished
5. Press over the "Finalizar" button to finish the installation
(The following steps need to be done in order to add the project into visual studio using github)
6. Go back to the GitHub web page and copy the clone repository link
7. Set up the cloned repository inside visual studio, but before make sure to have
downloaded git for windows, if not please install it first.
8. Go to visual basic and clone the previously copied GitHub repository inside it, by using the clone repository button which is accessed
thorugh the left pane panel git branches icon
-After that, on the top displayed bar paste the repository link and hit enter
-Select the repository folder location in your operative system, where the project
will be downloaded locally, I recommend creating a container folder in a place
you will remember
-Wait until the project repository is cloned by following the visual studio step by step guide
9. Open the project terminal and update the project dependencies
-Go to the terminal section in the lower right screen section of the visual studio and type the following command: "npm install"
-This should prompt an error unless you have already installed node.js in your
operative system. To do that, do as follows:
Open the web browser and go to nodejs.org/en/download/ and install it:
--Open the .msi file by double clicking it after download and click next->next->next-
>install
--Make sure you have this node environment variable set in your operative system
-Restart visual studio code and test once again the npm install command in the
previously cloned github repository(Now, it should work as expected)
10. For testing the automated Contact Form test cases, there are 2 ways, by using
the predefined script commands I have created
                    First Command: npm run openC
This will open the cypress dashboard, where you can select the browser that you
want to use to automate
Then, you will be able to select the automated test cases based on your need. (if an error appears please execute the following command: npx cypress
install, and try again)
In this segment, you just have to click any test case and automatically it will
start automating....
On the left side of the cypress dashboard, you have the cypress console, which lets you access each
test step interactively and shows assertions that work as step confirmations or
in the case of the expected and actual results in form of acceptance tests.
On the right side, you have the DOM web page content subject of the test
steps that make it change.
->These tests are found in the framework(project folder) in the following path AUTOMATIONEXCERCISEDEVSU/cypress/integration, so you can also
check the implementation and some code comments if you may want to...
                    Second Command: npm run chromeTestR
This will open by default a chrome browser instance (as it is the one, I mostly
use) to automate, and test automatically all the test cases one after another by
generating evidence videos as well as console acceptance testing results.
Finally, when it finishes it will close and leave the results, I mentioned previously
for you to freely use.
The results are obtained in the terminal log, as well as the video files that will be located inside the AUTOMATIONEXCERCISEDEVSU/cypress/videos folder
                   Extra Commands: 
                   npm run mochaReportsE2E
                   npm run mochaReportsAPI
                   npm run mochaReportsAll
Each one of this commands use a framework called mochawesome report that generates html reports, the e2e one generated a template just for 
the e2e test scenario, the api one for the api test scenario and all for all test scenarios under the fixtures folder(it is important to have 
in mind that each test scenario that is executed replaces the last one previously executed result) That being said, for you to be able to test
and just review without having to worry about this, I have created two folders under AUTOMATIONEXCERCISEDEVSU/mochawesome-report
one called APIS and the other one called E2E, here are already previously executed report results per each test scenario. Lastly, I have
also added some report results to the cypress online dashboard which I let it have a public access to whomever has this url:
https://cloud.cypress.io/projects/55izn5/runs/1/overview?roarHideRunsWithDiffGroupsAndTags=1 , so you can also check some previously 
recorded execution report results.

