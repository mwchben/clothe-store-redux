## REACT + REDUX
# Web-App that manages a a fake shop

This app introduces me to the working of react-redux and the use of reducers, actions and stores. 

Store - as the name implies, it's like a storehouse that house all our data. That is, where all our states are stored.

Actions - as the name implies, actions are the instructions the user issue to the redux to either write or fetch data from the store. They are objects with two major properties: {type: "DO_THIS", payload: dataObject}.

Reducers - reducers are functions that take actions from the application, perform an action and return a new state based on the action passed into it.