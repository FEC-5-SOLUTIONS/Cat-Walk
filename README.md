# Cat-Walk
Modernizing an existing site


Overview Component Functionality:

The style selector section of the component allows the user to click through the different styles of the product.  If the product is on sale, it will strikethrough the original price and display the sale price in red.  Also, when a new product style is selected, the "STYLE> ____" text and the product photos will update.
![Style selector] (https://giphy.com/gifs/kwUWJR6ny7eqvNE0kM.gif)

The display section of the component will render product photos in two ways - the main image carousel can be scrolled left and right (with the arrow buttons on the side of the main image) and the thumbnail carousl presents clickable thumbnail images of the selected style.  Clicking on these thumbnails will render the corresponding photo as the main image.  Non-selected photos will be partially transparent in the thumbnail carousel.  The thumbnail carousel is scrollable in case the desired photo is not immediately visible.  When swapping a product style, the n-th photo will remain as the current display - so if the third image of one style is shown at the moment a new style is clicked, that style's third image will be shown on the main display.
![Display section] (https://giphy.com/gifs/YEwm75EcCpIxXfctuR.gif)

The overview component will re-render in the event that a new product is clicked in the Related Products widget.  The default style shown will be whichever style of the new product has its 'default?' property set to 'TRUE'.
![Overview re-render] (https://giphy.com/gifs/sEPu0gCtVEwL3cVvnb.gif)

The average star rating of a product will be displayed in the overview component.
![Star rating] (https://giphy.com/gifs/YZCmveaN5RBRUxAjM0.gif)

For a selected product style, the 'select size' dropdown will populate with only in-stock size options, and the 'select quantity' dropdown will populate with quantities from 1 to the number-of-that-size-and-style-in-stock or 15, whichever is lesser.  The 'add to bag' and 'add to outfit' buttons will alert if a valid style/size/quantity is not selected.  If a valid style, size, and quantity are selected, clicking one of these buttons will alert which SKU at which quantity has been added to the cart or outfit.
![Actions section] (https://giphy.com/gifs/wE4GtfDG3KT5ltChvi.gif)