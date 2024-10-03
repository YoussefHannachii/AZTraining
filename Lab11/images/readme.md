# Lab 11: Implementing Azure Monitor and Alerts

## Task at Hand

- Set up Azure Monitor to collect metrics and logs.
- Create alerts based on resource metrics.
- Visualize data using Azure dashboards.
- Implement Action Groups for alert notifications.

## Steps to Set up the azure monitor
First we need to search for azure monitor in azure and then go to insights.
![Monitor setup 1](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/1.PNG)

Now we have acces to diffrent dashboards with diffrent metrics such as failed requests, server response time ...
![Monitor ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/2.PNG)

## Steps to create an alert based on resource metrics

Now we need to go to monitoring -> alerts and create a new alert and link it to a ressource groupe.
![Create alerts](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/3.PNG)

Now we can choose a condition to set our alert to , In this case I choosed the Cpu usage and set up an alert if it exceeds 80%.
![Alert setup](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/4.PNG)
![Alert setup](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/5.PNG)

## Steps to visualize data using dashbords 
To do so we need to access any of our instances and go to Monitoring -> metrics.
Now we have a dashboard and we have the option to manipulate the display mode , the metrics we want to visualize ...
![Dashboard](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/6.PNG)

## Steps to Implement Action Groups for alert notifications
In this step what we want to do is to perform an action once an alert is triggered.
To do so we have to create an action group, link it to our alert.
![Action group 1](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/7.PNG)
![Action group 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/8.PNG)
![Action group 3](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/9.PNG)

You can see that I set up an action if the cpu alert is triggered and it's an email sent to me.
To test if this working we can perform a simulation using azure as follows:
![Action group test](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/10.PNG)
![Action group test 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/11.PNG)
![Action group test 3](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/12.PNG)

And as you can see I recieved an email as expected.
![Result](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab11/images/13.PNG)
