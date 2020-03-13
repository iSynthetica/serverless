# Milkbox Funnels Backend

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
cd integration/azure
npm install
```

## Install Google
```
cd integration/google
npm install
```