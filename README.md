# Milkbox Funnels Backend

## Install Serverless Framework
```
npm install -g serverless
```

## Copy dependencies
```
cp -a controllers/. integration/aws/dependencies/nodejs/
cp -a controllers/. integration/azure/dependencies/nodejs/
cp -a controllers/. integration/google/dependencies/nodejs/


rsync -r controllers/ integration/aws/dependencies/nodejs
rsync -r controllers/ integration/azure/dependencies/nodejs
rsync -r controllers/ integration/google/dependencies/nodejs
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