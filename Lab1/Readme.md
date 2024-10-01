# Lab 1: Creating and Managing Azure Virtual Machines

## Task at Hand

- Deploy a Windows and a Linux virtual machine (VM) in Azure.
- Configure VM sizes, storage options, and networking settings.
- Connect to the VMs using Remote Desktop Protocol (RDP) and Secure Shell (SSH).
- Install software on the VMs and take snapshots.

## Steps to Create and Manage Azure VMs

After successfully logging into my Azure account, I started by creating the Virtual Machine:

![Create VM Step 1](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Cr%C3%A9ation%20Vm%201.PNG)

![Create VM Step 2](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Cr%C3%A9ation%20Vm%202.PNG)

Then, Azure guided me through the configuration of the VM (size, storage options, and networking settings):

![Configure VM](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Config%20de%20la%20Vm.PNG)

After finishing the configuration, Azure created the VM, and I was able to deploy it:

![VM Created and Deployed](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Vm%20cr%C3%A9e%20et%20d%C3%A9ploy%C3%A9e.PNG)

Next, I connected to the resource using SSH, utilizing the key that was generated and managed by Azure (configured that way):

![Connection via SSH to the VM](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Connexion%20en%20ssh%20sur%20azure.PNG)

**Note:** It is also possible to connect using RDP, which can be easily done with Azure.

Here is our virtual machine up and running. To finish the task at hand, I installed the `tree` package on the machine using the command:

```bash
sudo apt install tree
# Azure Virtual Machine Configuration

This repository contains instructions and configurations for creating and managing Azure Virtual Machines (VMs).

![VM running](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Config%20de%20la%20Vm.PNG)

Finally, we need to take a snapshot of our working Machine:  
**Manu -> Snapshots -> Create Snapshot:**

![Configuration of snapshot](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Config%20de%20la%20snapshot.PNG)  
![Snapshot deployed](https://github.com/YoussefHannachii/AZTraining/blob/master/Lab1/Snapshot%20deploy%C3%A9e.PNG)

All the work done previously can also be completed using only command line: 
Here are the steps to do so:

Start with loging in to azure : 
```bash
az login                                          # Logs you into your Azure account
```

Then create a ressources group where you will attach you Virtual Machine:
```bash
az group create \                                 # Command to create a new resource group
  --name MyResourceGroup \                        # Name of the resource group (MyResourceGroup is the name you assign)
  --location eastus                               # Azure region where the resources will be deployed (eastus refers to the East US region)

Deploy our Machine : 
```bash
az vm create \                                    # Command to create a virtual machine
  --resource-group MyResourceGroup \              # The resource group where the VM will be created
  --name MyLinuxVM \                              # Name of the virtual machine (MyLinuxVM is the VM’s name)
  --image UbuntuLTS \                             # Specifies the OS image (Ubuntu Long Term Support)
  --admin-username azureuser \                    # Username for the VM’s admin account (azureuser is the admin username)
  --generate-ssh-keys \                           # Automatically generates SSH keys for authentication to the Linux VM
  --size Standard_B2s \                           # VM size (Standard_B2s defines the virtual machine’s CPU and memory configuration)
  --location eastus                               # Specifies the Azure region (eastus is East US region)

Configure the networking , In this case accept ssh connections:
```bash
az vm open-port \                                 # Command to open a network port on the VM
  --resource-group MyResourceGroup \              # The resource group where the VM is located
  --name MyLinuxVM \                              # The name of the VM (MyLinuxVM is the VM’s name)
  --port 22                                       # Port to open (22 is the default port for SSH to connect to a Linux VM)


Connect via ssh to the Machine: 
```bash
ssh azureuser@<PublicIP>                         # Command to connect to the Linux VM via SSH

Once the VM stopped you can take a snapshot as follows: 
```bash
az snapshot create \                              # Command to create a snapshot of the VM’s disk
  --resource-group MyResourceGroup \              # The resource group where the snapshot will be created
  --name MyLinuxSnapshot \                         # Name of the snapshot (MyLinuxSnapshot is the name assigned to the snapshot)
  --source $(az vm show --resource-group MyResourceGroup --name MyLinuxVM --query "storageProfile.osDisk.managedDisk.id" -o tsv)  # Specifies the disk to take the snapshot from
















