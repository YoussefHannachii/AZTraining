# Lab 3: Deploying Azure App Service Web Apps

## Task at Hand

- Create an Azure App Service plan.
- Deploy a web application using Azure App Service.
- Configure custom domains and SSL certificates.
- Implement deployment slots for staging and production.

## Steps to Create the web app & the 
First I started by creating the web app on Azure App Services -> Create.
![Create web app](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/Create%20app%20services.PNG)

Then I need configure the web app you can see bellow that you have the option to choose the publisher type (code , container ..)
![Config web app](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/config1%20web%20app.PNG)

Now we have to create an App service plan:
![Create plan](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/create%20plan%20app%20service.PNG)

Now we are clear to deploy our web app:
![Deploy web app](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/webapp%20deployment.PNG)

In the deployment configuration I choosed an existing project that I had on my git but you can choose whatever suits you , I'm just testing.
![Choose code source](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/deployment%20setting%20with%20git.PNG)

You can see here once you finish defining the code source a workflow is generated automatically:
![Workflow](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/Workflow%20generated.PNG)

I just tested it by pushing on my main repo and you can see it triggers the workflow (Don't mind the error it's not something we have to worry about in this lab it's linked to the project)
![Workflow working](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/push%20on%20the%20git%20repo%20triggers%20the%20yml%20from%20azure.PNG)

## Configuring custom domains and ssl certificates

We can easily create custom domains using the azure UI, but first as you can see here the plan I used dosen't support this feature:
![Custom domains problem](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/scale%20up%20is%20needed%20to%20use%20the%20custom%20domains.PNG)

So I just had to scale up my instance and it's the simplest thing to do using azure.
Once the scale up done, We are able to create our custom domains:
![Custom domains](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/custom%20domains.PNG)

Let's now switch our attention to how to create or define the ssl certificates:
![Certificates](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/tls%20ssl%20conifg.PNG)
# notes : 
As you can see here we can used platform managed certificates or we can use our personal credentials.

## Implement Deployment Slots for Staging and Production

Now I will create deployment slots and use a common example (production and staging slots)
First I need to create the slots:
![Dep slots](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/deployment%20slots.PNG)

Now in the following figure you can see that our app is fully on the prod slot but we have the hand to switch as well as defining the load:
![Slots Management](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab3/images/slots.PNG)






