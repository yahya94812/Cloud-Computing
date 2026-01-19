# **1. Virtual Machines**

## **1.1 What a Virtual Machine (VM) Is**

- A Virtual Machine is a set of virtualized compute resources, mainly:
    
    - **CPU**
        
    - **RAM**
        
    - **Storage (OS + Data disks)**
        
    - **Networking components**
        
- It behaves like a standalone computer but runs on shared physical hardware.
    

---

## **1.2 OS Disk vs Data Disk**

### **OS Disk**

- Contains the operating system.
    
- Automatically created when a VM is deployed.
    

### **Data Disk**

- Additional disk attached to the VM (not the OS disk).
    
- Used for storing:
    
    - Application data
        
    - Databases
        
    - Logs
        
    - Files
        
- Helps separate OS and data for improved performance and durability.
    

---

## **1.3 IOPS (Input/Output Operations Per Second)**

- IOPS measures **how fast the attached disks can perform read/write operations**.
    
- Higher IOPS → faster disk performance.
    
- Disk types (e.g., Standard HDD, Premium SSD) and VM size determine the IOPS limit.
    

---

## **1.4 Connecting to a VM (SSH)**

Example command:

`ssh -i ~/.ssh/my-vm_key.pem yahya@20.197.15.213`

Explanation:

- `ssh` → secure login command
    
- `-i` → specifies which private key to use for authentication (identity, private key)
    
- `~/.ssh/my-vm_key.pem` → your private key file
    
- `yahya@20.197.15.213` → username and public IP of the VM
    

---

## **1.5 Running Code Inside a VM**

Once connected:

### **Edit files**

`nano main.py`

### **Run Python programs**

`python3 main.py`

---

## **1.6 Exposing a Web App on Port 8080**

To access a web app from your browser:

### **Step 1 — Allow inbound traffic in Azure**

- Go to **VM → Networking → Inbound Port Rules**
    
- Add rule:
    
    - **Port:** 8080
        
    - **Protocol:** TCP
        
    - **Action:** Allow
        
    - **Source:** Any (or restrict as needed)
        

### **Step 2 — Allow firewall on the VM**

`sudo ufw allow 8080 sudo ufw reload sudo ufw status`

This ensures Linux firewall permits incoming traffic on port 8080.

