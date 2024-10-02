# Lab 7: Implementing Azure Functions

## Task at Hand
- Create an Azure Function App.
- Develop a serverless function triggered by an HTTP request.
- Integrate the function with Azure Storage or Azure Queue.
- Monitor function performance and logs.

## Steps to Create the azure function
First we need to create the function app in azure
![Create function](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/1.PNG)
![Create function 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/2.PNG)
![Create function 3](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/3.PNG)

# Note :
We have the hand in the configuration to choose the programming language we want to use.

Now that it's created and deployed we need to create the actual serverless function triggered by HTTP request
![Create serverless func](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/4.PNG)
![Create serverless func 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/5.PNG)

Once created we can test it , here we used the http trigger sample which is trigerred by a HTTP POST.
![Function test](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/6.PNG)
![Function test 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/7.PNG)
![Function test 3](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/8.PNG) 

## Steps to integrate a funtion with Azure queue or storage.
Before we get on with our task , we need to set up a storage account and set up a queue or a blob.
This was covered in a previous lab so we will use the same ressource.

# Note : 
In this lab I used a queue but it's the same approach to complete it with blobs.

Now we started by creating the new function.
![Function with queue](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/9.PNG)
![Function with queue 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/10.PNG)


This function just takes an request param and register it in the queue.
To do so we need to create a new environment variable with our storage account connection stirng ,
and then configure the function.js to point to the queue as showed bellow.
![Binding](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/14.PNG)
![Binding 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/13.PNG)
![Binding 3](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/11.PNG)
![Binding 4](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/12.PNG)

Now it's time to test it.
![Function queue test 1](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/15.PNG)
![Function queue test 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/16.PNG)

And finally here is our queue with the new added text.
![Result](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab7/images/17.PNG)






