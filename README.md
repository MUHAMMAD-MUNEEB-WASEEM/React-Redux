## REDUX

Redux is a predictable state container for JavaScript apps.

## REDUX TOOLKIT

Redux toolkit is our official approach (according to redux website) for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

In this repo, I am following redux toolkit

## Dependencies to Install

* yarn add @reduxjs/toolkit
* yarn add redux
* yarn add react-redux
* yarn add axios (for async createAsyncThunk if needed)

## Steps:

1.	Create slice.js file containing all states and actions
2.	Create store
3.	Wrapp index.js file in provider with store

## If Want to Create App Using Redux Template:

* npx create-react-app <project-name> --template redux

## Important Hooks:

1.	useSelector(state => state.storename.key) 

* It is used to use any value from store

* Example:
  
  Const name = useSelector(state=>state.user.name)

2.	useDispatch()

* useDispatch is used to update store states

* Example:

  Const dispatch = useDispatch()
  dispatch(update({name, email})
