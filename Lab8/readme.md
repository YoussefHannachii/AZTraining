# Lab 8: Using Azure Cognitive Services

## Task at Hand

- Create a Cognitive Services resource.
- Develop an application that uses the Text Analytics API.
- Analyze sentiment and key phrases from sample text.
- Monitor API usage and manage keys.

## Steps to create the congitive services ressource
We start by creating the azure AI services.
![Create ai services](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab8/images/1.PNG)
![Create ai services 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab8/images/2.PNG)


## Steps to create the app that consumes the text analytics API
Now this using express and node I wrote this code that uses text analytics to extract sentiment analysis and key phrases from a given set of text.
To use it u just need to clone this file and tap 
```code
npm install
```

and u need to use the azure ai services credentials {endpoint,keys}
![Credentials ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab8/images/3.PNG)

and use them in the api as follows.
![function](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab8/images/5.PNG)

And now after runing our server we can use postman to test if everything is working.
![Postman test](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab8/images/6.PNG)
