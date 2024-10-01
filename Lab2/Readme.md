# Lab 2: Implementing Azure Virtual Networks

## Task at Hand

- Create a Virtual Network (VNet) with multiple subnets.
- Set up Network Security Groups (NSGs) to control inbound and outbound traffic.
- Deploy VMs into specific subnets.
- Configure VNet peering between two VNets.

 ## Steps:
After succesfull login to the azure account.
I started by creating the Virtual network : 
![Create VN ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/Create%20Virtual%20network.PNG)
![Config VN ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/Config%20VN.PNG)

In the network configuration I defined two subnets as you can see (default and subnet two) using the azure UI:
![Subnets config ](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/Subnets%20and%20config.PNG)

Here is my V(irtual)N(etwork) deployed succesfuly on azure:
![VN Deployed](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/Subnets%20and%20config.PNG)

Now it's time to put diffrent VM instances on each subnet:
![VM1 on subnet default](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/configuring%20vm%20on%20default%20subnet.PNG) 

## Note: 
Same thing for the other VM but on the other subnet defined (subnet two 10.0.1.0/24) 

After that we have to create the ngs and associate the two subnets to it before adding the inbound and outbound control rules:
![NGS Creation](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/nsg%20created.PNG)
![Subnets association](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/Subnets%20association%20with%20ngs.PNG)


And now we can define the control rules:
![Inbound Rules](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab2/images/Create%20an%20inbound%20rule.PNG)

## Note: 
Same thing for the outbound rules we define the source and the destination and choose to allow or deny.




............. (Command Line version)









