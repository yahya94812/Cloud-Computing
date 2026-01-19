* azure storage account
* azure storage container
* azure storage blob

access azure blob storage via azure sdk in any language or with azure cli
* two types of auth for blob storage account 1. account key 2. connect string (full access to storage account (Disk))
Storage Account
│
└── Blob Service
    │
    └── Container
        │
        ├── Blob
        ├── Blob
        └── Virtual Directory
            └── Blob

Security & Access Boundaries (Very Important)
| Level           | Can Control Access       |
| --------------- | ------------------------ |
| Storage Account | Keys, firewall, Azure AD |
| Container       | RBAC, SAS, public access |
| Blob            | SAS, RBAC (fine-grained) |

8. Comparison with Traditional File Systems
| File System | Azure Blob Storage |
| ----------- | ------------------ |
| Disk        | Storage Account    |
| Partition   | Container          |
| Folder      | Virtual Directory  |
| File        | Blob               |
