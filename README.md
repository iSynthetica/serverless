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
To deploy Azure functions we need to get Azure credentials

1. Install Azure locally
```
$ sudo apt-get update && sudo apt-get install ca-certificates curl apt-transport-https lsb-release gnupg
$ curl -sL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null
$ AZ_REPO=$(lsb_release -cs) && echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list
$ sudo apt-get update && sudo apt-get install azure-cli
$ az --version
```
2. Login with browser
```
$ az login
```
3. Close browser window. In terminal you will get something like this:
```
[
  {
    "cloudName": "<cloudName>",
    "homeTenantId": "<homeTenantId>",
    "id": "<subscription-id>",
    "isDefault": true,
    "managedByTenants": [],
    "name": "<name>",
    "state": "<state>",
    "tenantId": "<tenantId>",
    "user": {
      "name": "<user-name>",
      "type": "<user-type>"
    }
  }
]
```
4. Set Azure Subscription for which to create Service Principal and generate Service Principal for Azure Subscription
```
$ az account set -s <subscription-id>
$ az ad sp create-for-rbac
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