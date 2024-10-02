# Lab 5: Implementing Azure SQL Databases

## Task at Hand

- Deploy an Azure SQL Database instance.
- Configure firewall settings to allow client access.
- Import data into the database.
- Implement Geo-replication for high availability.

 ## Steps:

#  Deploy an Azure SQL Database instance & configure firewall settings.

First of all, I have to create an sql database as well as it's sql server.
![Sql Db Creation](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/1.PNG)
![Sql Server Creation](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/2.PNG)

Before starting the real work , we need to configure the firewall rules on the sql server to accept our public client and the azure services.
![sql server config](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/4.PNG)
![sql server config 2 ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/5.PNG)
![sql server config 3 ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/6.PNG)


# Import data into the database

Now that everything configured, we have to connect to our database and there's several ways to do so.
![sql connection](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/7.PNG)

# Note:
Azure enables us to connect to the sql server directly with connection strings.
![sql connection strings](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/8.PNG)

Since I have the Microsoft sql server management studio I used it , and it's pretty straightforward.
(I used a csv that I created) 
![mssql](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/9.PNG)
![msssql 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/11.PNG)

And here is the table created, as simple as that.
![table created 1](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/12.PNG)
![table created 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/13.PNG)

# Implement Geo-replication for high availability.

To implement the geo replication we have to go to || SqlDatabase -> Data Management -> Replicas -> Create Replica
Then just create a new server on a diffrent location from the primary database.
![Replication](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/14.PNG)

Now we can see our replications on diffrent geo locations on azure.
![Replication 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab5/images/15.PNG)





