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
- Go to Google console
- There is a dropdown near the top left of the screen (near the search bar that lists your projects). Click it and select "Create Project".
- Go to the API dashboard, select your project and enable the following APIs (if not already enabled):
    1. Google Cloud Functions
    2. Google Cloud Deployment Manager
    3. Google Cloud Storage
    4. Stackdriver Logging
- Get credentials & assign roles
    1. Go to the Google Cloud Console.
    2. Choose the project that you are working on from the top drop down
    3. Click IAM & admin menu on left-sidebar
    4. Then click Service accounts on left-sidebar
    5. Click CREATE SERVICE ACCOUNT button on the top
    6. Input Service account name and Service account ID will be generated automatically for you. Change it if you wish to.
    7. Click Create button
    8. Add Deployment Manager Editor, Storage Admin, Logging Admin, Cloud Functions Developer roles and click Continue
    9. Click +CREATE KEY button and select JSON key type and click Create button
    10. You will see a json (AKA keyfile) file downloaded
    11. Click Done button
    12. Save the keyfile somewhere secure. We recommend making a folder in your root folder and putting it there. Like this, ~/.gcloud/keyfile.json. You can change the file name from keyfile to anything. Remember the path you saved it to.
```
cd integration/google
npm install
```