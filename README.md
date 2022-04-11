# Cat-Walk
Modernizing an existing site

## Overview

<img width="1246" alt="overviewScreenshot" src="https://user-images.githubusercontent.com/57784123/162670227-b463bd1e-7303-463d-b4ff-bab76ece83c6.png">

### Functionality: 
- The style selector section of the component allows the user to click through the different styles of the product.  If the product is on sale, it will strikethrough the original price and display the sale price in red.  Also, when a new product style is selected, the "STYLE> ____" text and the product photos will update.
<!--![Style selector] (https://giphy.com/gifs/kwUWJR6ny7eqvNE0kM.gif)-->
<p align="center">
  <img src="https://media.giphy.com/media/xRFFFQgcDAQv2Z2t9W/giphy.gif" alt="animated" />
</p>

- The display section of the component will render product photos in two ways - the main image carousel can be scrolled left and right (with the arrow buttons on the side of the main image) and the thumbnail carousl presents clickable thumbnail images of the selected style.  Clicking on these thumbnails will render the corresponding photo as the main image.  Non-selected photos will be partially transparent in the thumbnail carousel.  The thumbnail carousel is scrollable in case the desired photo is not immediately visible.  When swapping a product style, the n-th photo will remain as the current display - so if the third image of one style is shown at the moment a new style is clicked, that style's third image will be shown on the main display.
<!--![Display section] (https://giphy.com/gifs/YEwm75EcCpIxXfctuR.gif)-->
<p align="center">
  <img src="https://media.giphy.com/media/oyILYmHSSSWE0QjYZm/giphy.gif" alt="animated" />
</p>



- The overview component will re-render in the event that a new product is clicked in the Related Products widget.  The default style shown will be whichever style of the new product has its 'default?' property set to 'TRUE'.
<!--![Overview re-render] (https://giphy.com/gifs/sEPu0gCtVEwL3cVvnb.gif)-->
<p align="center">
  <img src="https://media.giphy.com/media/t9THAC0u3YMtSstkrk/giphy.gif" alt="animated" />
</p>

- The average star rating of a product will be displayed in the overview component and dynamically update when products change.
<!--![Star rating] (https://giphy.com/gifs/YZCmveaN5RBRUxAjM0.gif)-->
<p align="center">
  <img src="https://media.giphy.com/media/a0MzsSGNgwXlYS8ORq/giphy.gif" alt="animated" />
</p>

- For a selected product style, the 'select size' dropdown will populate with only in-stock size options, and the 'select quantity' dropdown will populate with quantities from 1 to the number-of-that-size-and-style-in-stock or 15, whichever is lesser.  The 'add to bag' and 'add to outfit' buttons will alert if a valid style/size/quantity is not selected.  If a valid style, size, and quantity are selected, clicking one of these buttons will alert which SKU at which quantity has been added to the cart or outfit.
<!--![Actions section] (https://giphy.com/gifs/wE4GtfDG3KT5ltChvi.gif)-->
<p align="center">
  <img src="https://media.giphy.com/media/km8UXxl3YF6Esf6n8k/giphy.gif" alt="animated" />
</p>

## Related Products

<img width="1246" alt="Screen Shot 2022-04-10 at 10 28 18 PM" src="https://user-images.githubusercontent.com/57784123/162670783-a08735ce-6d2f-4c41-874e-c1851fda6e25.png">

### Functionality:
- Related Items to the current product are displayed in a carousel. Clicking on the buttons on the edges of the carousel will bring other related items into view. Clicking on a related product will reload the page to show the clicked product.
<p align="center">
  <img src="https://media.giphy.com/media/2jMOFVDbvjWRQzwtN7/giphy.gif" alt="animated" />
</p>


## Questions And Answers

<img width="1246" alt="Screen Shot 2022-04-10 at 10 28 49 PM" src="https://user-images.githubusercontent.com/57784123/162670805-0a46df1c-4d84-49b0-b51b-9030a20fb9e1.png">

### Functionality:
- The questions and answers section will initally load with two questions for the product sorted by "helpful". Clicking on "More Answered Questions" will display all of the answered questions with infinite scroll. The view can be returned to the two most helpful questions by clicking on "Collaps Questions".
<p align="center">
  <img src="https://media.giphy.com/media/0JGDVD7hAi2cVtzUjR/giphy.gif" alt="animated" />
</p>

- Clicking on the "helpful" text will update the value of the number next to helpful to let users know how many other users have found that answer helpful. Users are only able to update the "helpful" rating once in order to prevent users spamming the "helpful" button to push answers to the top.
<p align="center">
  <img src="https://media.giphy.com/media/xs6ak4nhlRZQ6EupIx/giphy.gif" alt="animated" />
</p>

- Similar to the "helpful" button, users can use the "report" button to remove a question or answer from the displayed list. Upon reporting an item, the itme will be removed from the list and it will no longer present upon future loads.
<p align="center">
  <img src="https://media.giphy.com/media/B67FSsVqSkNAazK8RC/giphy.gif" alt="animated" />
</p>

- Clicking on the "Add A Question" button will bring up a modal that allows for user input. The modal can be exited by clikcing the "X" button on the top right corner of the modal. All three sections of the modal are required, however users can not submit their input until they provide a valid email. Once a valid email is provided, the red text that tells users that the current input is not a valid email disapears and users are now able to submit their question.
<p align="center">
  <img src="https://media.giphy.com/media/5DECua35hWN5ut1O9H/giphy.gif" alt="animated" />
</p>

- Users can type into the search bar to filter the list of questions and answers to only display those that include the user input.
<p align="center">
  <img src="https://media.giphy.com/media/s2cy0el2X5xsHluz8G/giphy.gif" alt="animated" />
</p>

## Reviews

<img width="1246" alt="Screen Shot 2022-04-10 at 10 29 18 PM" src="https://user-images.githubusercontent.com/57784123/162670823-0871c0c6-5f16-429a-a65e-f81c2566b627.png">

### Functionality:

- Initially, two reviews will load. Users can expand the list by clicking the "View More" button. The list will grow in height to a fixed value and become scrollable so that users can scroll through and see the entire list of questions.
<p align="center">
  <img src="https://media.giphy.com/media/Yb7rkiikmsU1NuWEPr/giphy.gif" alt="animated" />
</p>

- The list has three sorting methods; "relevant", "newest", and "helpful". Users can select how they want to sort the list using the drop down menu, and the list will update after the sorting selection is made.
<p align="center">
  <img src="https://media.giphy.com/media/CFfcQPIGzYcoKl2Vae/giphy.gif" alt="animated" />
</p>

- The stats tab on the left side of the widget provides a lot of information on the current product and it also has some funtionality. The rating numbers are clickable and upon clicking them, the list will filter to only include reviews with the selected ratings. The Filter is cumalitive and builds as more numbers are added. The filter can be cleared at any time by clicking the "clear" button that pops up once filtering has begun.
<p align="center">
  <img src="https://media.giphy.com/media/JULeZm4KZN1mStqGtG/giphy.gif" alt="animated" />
</p>

- Users who want to review a certain item will pop open a scrollable modal by clicking the "Add A Review" button. The modal that is displayed takes user input and sends the information to the backend. 
<p align="center">
  <img src="https://media.giphy.com/media/r2P6nCxZonDgBZsjXU/giphy.gif" alt="animated" />
</p>

- The first input field in the modal is a rating input. Users select the amount of stars that they want to give an item. The stars update as they are clicked in order to show the users their selection to ensure that the user is inputing their desired rating.
<p align="center">
  <img src="https://media.giphy.com/media/Z6Ib5qwVr6Lr0HTHA9/giphy.gif" alt="animated" />
</p>

- If a user tries to submit their review without having filled in every required field, they will see red text pop up that says "Something is missing, please make sure every field is filled", preventing the user from sending a payload to the backend that is missing critical information.
<p align="center">
  <img src="https://media.giphy.com/media/LSj9uN6VVxZJnlgyME/giphy.gif" alt="animated" />
</p>

- A review must be at least 250 characters long. If a user tries to input a rating with a length less than 250 characters, they will see red text saying "the summary must be at least 250 characters long". After fixing it, as long as everythign else is also filled out, users can submit and a successfull submission will result in an alert thanking the user for their submission. 
<p align="center">
  <img src="https://media.giphy.com/media/eVd6ZNIHZ0A5IdDmxD/giphy.gif" alt="animated" />
</p>

