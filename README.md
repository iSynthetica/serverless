# Milkbox Funnels Backend

## Settings for Travis

- 

## Install Serverless Framework
```
npm install -g serverless
```

## Install 

## Copy dependencies
```
rsync -r controllers/ integration/aws/dependencies/nodejs
rsync -r controllers/ integration/azure/controllers
rsync -r controllers/ integration/google/controllers
```

## Deploy AWS
```
cd integration/aws
serverless deploy
```

## Install Azure
```
curl -L https://aka.ms/InstallAzureCli | bash
az --version
az login
```
You will get something like this
```
[
  {
    "cloudName": ""<cloudName>"",
    "id": "<subscription-id>",
    "homeTenantId": "<homeTenantId>",
    "isDefault": true,
    "managedByTenants": [],
    "name": "<name>",
    "state": "<state>",
    "tenantId": "<tenantId>",
    "user": {
      "name": "<name>",
      "type": "<user>"
    }
  }
]
```
```
az account set -s <subscription-id>
cd integration/azure
npm install
```

## Install Google
```
cd integration/google
npm install
```