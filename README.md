# Veritone Test Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project is to build OrderedList component, which implements an alphabetically sorted list.
The component includes a button to enable the user to sort either in ascending or descending order and a second button to permit the list to be cleared.

* The input element which the user can use to add items to the list. This input field listens for Enter keydown events (the test suite triggers the onKeyDown event handler specifically) to add the current contents (if nonempty) to the list. After adding an item, the input box is cleared.

* The sort button which the user can click to change the direction of the sort. Initially, the button displays text such as the ⬇️ emoji or the text down. When changed to a descending sort, the button changes to a ⬆️ emoji (or text such as up).

* The clear button which the user can click to clear the list as well as any contents in the input box (essentially reverting to the component's default state).

* The list element, which contains a series of <li> elements that represent the sorted list contents.

## Environment Set Up:

1. clone this repository
2. npm install

## How to run the app:

1. npm start
