## **1. Azure Resource Organization**

### **1.1 Resources, Regions, Resource Groups, and Subscriptions**

- Every Azure resource (e.g., VMs, databases, networks) **must exist in a region** (physical location).
    
- Each resource **belongs to exactly one Resource Group (RG)**.
    
- Every Resource Group belongs to **one Subscription**.
    
- A **Subscription** determines:
    
    - Billing
        
    - Access control
        
    - Resource limits
        

### **1.2 Azure Accounts, Directories, and Subscriptions**

- An **Azure Account** (your identity) can be associated with **multiple Azure Active Directories (AADs)**.
    
- A **Directory (AAD tenant)** is a logical isolation boundary for:
    
    - Users
        
    - Groups
        
    - Applications
        
    - Subscriptions
        
    - Resources
        
- **Subscriptions are tied to a Directory**, not directly to your personal Microsoft account.
    
- One account can access multiple directories, and each directory can have multiple subscriptions.
    

---

## **2. Understanding System “Images” (Operating System Context)**

- In operating systems, an **image** refers to a complete copy of data.
    
- It can represent:
    
    - A file or program
        
    - A bootable OS image
        
    - A system state snapshot
        
- Common use cases:
    
    - VM images
        
    - Disk images (ISO)
        
    - Container images
        
- The key idea: **an image is a full snapshot that can be loaded, executed, or restored**.
    

---

## **3. How SSH Works (Public/Private Key Authentication)**

### **3.1 Key Pair Basics**

- **Private key** → kept securely on your machine.
    
- **Public key** → stored on the server (e.g., in `~/.ssh/authorized_keys`).
    

### **3.2 Authentication Flow**

1. The client connects to the server.
    
2. The server sends a **challenge encrypted with your public key**.
    
3. Only the client with the **matching private key** can decrypt it.
    
4. Successfully decrypting proves your identity → authentication complete.
    

### **3.3 Establishing Encrypted Communication**

- After authentication, the SSH server:
    
    - Generates a **symmetric session key**.
        
    - Encrypts it using your **public key**.
        
    - Sends it to the client.
        
- The client decrypts it using the **private key**.
    
- From this point onward:
    
    - **Symmetric encryption** is used for all communication (faster than public-key encryption).
        

### **3.4 Summary**

- **Public/Private Keys → Authentication**
    
- **Symmetric Key → Encrypted Data Transfer**
    
- Default SSH port: **22**
    

---

## **4. Azure Network Watcher and VNet Behavior**

- When you create or use a **Virtual Network (VNet)** in a region:
    
    - Azure automatically **enables Network Watcher** for that region (if not already enabled).
        
    - Azure may create a resource group (usually named `NetworkWatcherRG`) to store monitoring tools.
        
- Purpose:
    
    - Packet capture
        
    - Connection monitors
        
    - Diagnostics tools