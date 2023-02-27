# cypressAutomation
#Instalation
1. Download and install NodeJS from official site.
https://nodejs.org/en/download/
for Mac- macOS Installer (.pkg)	 64-bit / ARM64
2. check the path is set. 
echo $PATH
/usr/local/bin- should be in path If not set as below
if not the do below
- sudo nano /etc/paths?? enter passoword>> insert a line and add path
- Hit control-x to quit. Enter “Y” to save the modified buffer.
- check with echo $PATH
3. Download and visual Studio

4. mkdir foldername >> cd foldername
5.  npm -i init (just hit enter for everyline without changing any values for now.)
    Package.json will get created- metadata related to the project. It is same like .xml file in maven to manage dependenciew.
6. Click in visual studio Open folder and add that filder you have created
7. Install cypress using npm.-- npm intall cypress
   to add it in package.json file npm intall cypress --save-dev
8. Cypress will create default folders like downloads, fixture.support
9. Create a nw folder Integration and examples instide it to keep all the test cases called spec.

   Running test runner
  1. Now you have the cypress install anf you will see a folder is created in your project- 
   go to terminal and pass this command 
   ~/CypressAutomation/node_modules/.bin/cypress open
   2. now a browser will open, select E2E testing 
   3. Configuration files will be displayed in the next screen
   4. click on continue >> select the browser you want to run test on
   5. Now the test runner is running.
   6. create a test.js file under integration/examples
   6. Check a file by name cypress.config.js in project folder. It contains
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
7. add a line in that-  specPattern: 'cypress/integration/examples/*.js' (the new content will look like below)

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});

*.js is used to read all the spec in the path mentioned
8. Save the file and now you will see the specs which are nothing but test.





