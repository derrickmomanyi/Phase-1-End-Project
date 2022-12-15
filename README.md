# Phase-1-End-Project

# TABLE OF CONTENTS

This README consists of the Project Requirements, author, licences and few explanations

## Project Requirements

As a user, I can;
1. See an app which has incorporated the use of HTML/CSS/JS/Bootstrap that accesses data from a public API and renders it to the DOM. All interactions between the client and the API are to be handled asynchronously and use JSON as the communication format.

2. See the entire app on a single page. There should be NO redirects. In other words, the project should contain a single HTML file.

3. Get access to at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

4. Encounter some interactivity. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

This README consists of the deliverables, author, licences and few explanations




## EXPLANATIONS

The step by step thought process has been commented in the index.js file.

This application will render all data from 3 different apis and display it to the DOM. We will be using Game of Thrones apis

The Javascript fetches the data from a local server and displays it on the DOM. For this projects I used 3 APIs
1. First api was 'https://thronesapi.com/api/v2/Characters' which fetches the characters from the popular show Game of Thrones, the api includes the following details:
 =>image
 =>title
 =>fullName
 =>firstName 
 =>lastName

 The details were rendered in a card.

 2. Second api was 'https://api.gameofthronesquotes.xyz/v1/characters' which fetched the famous character quotes from characters in Game of Thrones. The api includes;
 =>name
 =>house
 =>quotes

 The details were rendered in a table format

 3. Third api was 'https://anapioficeandfire.com/api/houses' which fetched the list of houses from Game of Thrones and displayed them in a span tag. Once you clicked on the span, the following details were displayed
 =>house name
 =>coat of arms
 =>region 

 The details were rendered in a card.

 4.POST FORM
 On the Quotes table, I added a form which you would input the name, house name and a quote on the DOM and it would be stored in a database. 

 I managed to achieve all the required project requirements;

   => 3 separate event listeners (DOMContentLoaded, click & submit).
   => The entire app run on a single page, the project contained a single HTML file
   => Interactivity, adding comments.


# Author
 Derrick Momanyi

Github: @derrickmomanyi

# License 
Copyright © 2022 Derrick Momanyi This project is MORINGA SCHOOL licensed.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.