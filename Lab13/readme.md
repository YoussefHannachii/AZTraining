# Lab 13: Implementing Azure Key Vault

## Task at Hand

- Create an Azure Key Vault.
- Store and retrieve secrets, keys, and certificates.
- Integrate Key Vault with an application for secret management.
- Set up access policies and monitoring.

## Steps to Create an Azure Key Vault and store secrets, keys, and certificates

We need at first to create a Vault Key on Azure.
![Create Vault Key](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/1.PNG)
![Create Vault Key 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/2.PNG)

Once done with the creation , You can see that we can create and manage diffrent type of objects keys, certificates, secrets.
![Objects](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/3.PNG)

Here's the UI to create a Secret for example.
![Secret](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/4.PNG)

## Integrate Key Vault with an application for secret management
To do so I created a js app that uses the vault key you can find it in this folder under 
```code 
/Lab13/secretsApp
```

Before running it you need to install the @azure/keyvault-secrets with npm and a configure you key vault name and uri.
here's a glance of the code app.
![Secret](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/7.PNG)

## Steps to Set up access policies and monitoring
Now to set tha access policies I don't have the premium subscription so I can't configure it but here's where you can do it.
![Policies](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/5.PNG)

# Note :
You can choose the permissions for Secrets, Keys, or Certificates as required.

And finally for the monitoring you have just to go to Key Valut -> Monitoring -> Insights 
And you will get the following configurable view
![Monitoring](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab13/images/6.PNG)




