#create an IAM user with programtic access, call the user serverless-admin
#install serverless
npm i -global serverless
#save the configuration
serverless config credentials --provider aws --key AKIAIDM47PFALK3WPGSA --secret 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 --profile serverless-admin
#the previous command will create ~/.aws/credentials


#create a new project
sls create --template aws-nodejs --path packages/project1/hello-world


#set some information in serverless.yml
provider:
  name: aws
  runtime: nodejs8.10
  profile: serverless-admin
  region: ap-southeast-2



#deploy a stack
#will create S3 bucket, cloud formation stack, and IAM role.
sls deploy -v


#call function from command line
sls invoke -f hello -l


#Deploy just function not entire stack
sls deploy function -f hello


#fetch the log of a function 
sls logs -f hello -t


#remove stacks
sls remove


#if you need to access some resources, fill the iamRoleStatements in serverless.yml example
#  iamRoleStatements:
#    - Effect: "Allow"
#      Action:
#        - "s3:ListBucket"
#      Resource: { "Fn::Join" : ["", ["arn:aws:s3:::", { "Ref" : "ServerlessDeploymentBucket" } ] ]  }


#to add environment variables, fill the environment section in serverless.yml
#  environment:
#    variable1: value1

#if you wanna apply an environment variable for one function, do it like this
functions:
  hello:
    handler: handler.hello
    environment: 
        variable1: value1

#if you want your lambda to be deployed in a specific VPC, use this in serverless.yml
  vpc:
    subnetIds:
      - subnet-3d9f2b65


#you can add the event that the service is gonna lesson to like this
#    events:
#      - http:
#          path: users/create
#          method: get


#you can add plugins in the plugin section