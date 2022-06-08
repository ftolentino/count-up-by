Describe: countUpBy

Test1: If we put 5 in count to and 5 in count by then output should be 30
Code:
const countTo = 5;
const countBy = 1;
countUpBy(countTo, countBy);
Expected Output: 5;

Test2: Number passed in should be a number not a string
Code:
const countTo = 5;
const countBy = 1;
countUpBy(countTo, countBy);
Expected Output: 5;

Test3: Never accept 0 as countBy
Code:
const countTo = 5;
const countBy = 0;
countUpBy(countTo, countBy);
Expected Output: "Can't use 0 as count by";

Test4: It should return 1, 2, 3, 4, 5 if we count from 1 to 5
Code:
const countTo = 5;
const countBy = 1;
countUpBy(countTo, countBy);
Expected Output: 1, 2, 3, 4, 5;

Test5: It should return 5, 10, 15, 20, 25, 30 if we count from 5 to 30
Code:
const countTo = 30;
const countBy = 5;
countUpBy(countTo, countBy);
Expected Output: 5, 10, 15, 20, 25, 30;

Test6: It should return nothing if we put in nothing
Code:
const countTo = ;
const countBy = ;
countUpBy(countTo, countBy);
Expected Output: ;

Test7: It should communicate that they should enter a number if we put in non-numeric values
Code:
const countTo = NaN;
const countBy = NaN;
countUpBy(countTo, countBy);
Expected Output: "This is not a number. Please enter a number.";

Test8: It should return -1, 0, 1, 2, 3, 4, 5 if we put in a negative number for countBy
Code:
const countTo = 5;
const countBy = -1;
countUpBy(countTo, countBy);
Expected Output: -1, 0, 1, 2, 3, 4, 5;

Test9: It should return -1, -2, -3, -4, -5 if we put in a negative number for both numbers
Code:
const countTo = -5;
const countBy = -1;
countUpBy(countTo, countBy);
Expected Output: -1, -2, -3, -4, -5;

# Count Up By

#### By Seung Lee, Winnie Wang, Filmer Tolentino

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## [GitHub Pages Link](https://leark.github.io/)

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee