import gulp from "gulp";
import shell from "gulp-shell";

// Build and serve with Parcel
export const build = shell.task("npx parcel index.html");

// Run Mocha unit tests
export const test = shell.task("npx mocha test/shuffle.js");

// Run Cypress E2E tests (requires Parcel running in separate terminal)
export const cypress = shell.task("npx cypress run");

// Default task
export default build;