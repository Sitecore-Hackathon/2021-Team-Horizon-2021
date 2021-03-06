![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2021

- MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
- [Entry form template](ENTRYFORM.md)
- [Starter kit instructions](STARTERKIT_INSTRUCTIONS.md)
  

# Hackathon Submission Entry form

## Team name
Team Horizon 2021

## Category
Best use of Headless using JSS or .NET

## Description
Being a single member team, I took the challenge to attempt `Best use of Headless using JSS or .NET` and improve on my Front-End skills (i am primarily Back-End). It is an opportunity to also use Docker with latest Sitecore 10.1!

  - This module tries to make use of GraphQL endpoint to retrieve a list of Products that are managed in the Sitecore XM instance
  - Then we will render these products on a static ReactJS app which has a shopping basket /checkout experience
    - I have registed the required `sc_apikey` located at (`/sitecore/system/Settings/Services/API Keys`) 
    - I have added sample test Products on content tree at (`/sitecore/content/Home/ShopProducts`)
    - I have then mostly scaffolded a static ReactJS to consume the GraphQL API and list products on a page
    - The assumption is the end user will 'Add them to shopping bag' and checkout
    - The scope is wider for the Hackathon, so the functionality is mostly deficient in a completed application
    - However, this is my attempt to use JSS and GraphQL without support any from an experienced team of Front-End developers and other SMEs

Simply install the Sitecore Package which will create the required Products on the content tree. That is pretty much what I am using the Sitecore XM instance.
The ReactJS app has been configured using configuration settings contained within an `.env` file on the project directory. These settings have details of the XM instance and sc_apikey required for it to work.


## Video link
No video, sorry


## Pre-requisites and Dependencies

Used the  [Starter kit instructions](STARTERKIT_INSTRUCTIONS.md)
- Sitecore XM image
- Sitecore JSS image

## Installation instructions

1. Start docker environment using `.\Start-Hackathon.ps1`
2. Open solution in Visual Studio and run build
3. Use the Sitecore Installation wizard to install the [package](docs/TeamHorizon-SitecorePackage-1.zip)
    a. Logon to instance at `https://cm.teamhorizon.localhost/sitecore/` using admin / b
4. To run this React App, ensure you navigate to the project directory `\src\Project\horizonshop`
5. In the project directory, you can run:

### `npm start`
    
a. Access the ReactJS App Home at `https://cm.teamhorizon.localhost/sitecore/`. If GraphQL endpoint is working correctly, we expect products list on the shp 'http://localhost:3000/shop'
b. Access the shopping basket at `http://localhost:3000/cart`


6. profit


## Comments
The next logical step is for me to adapt the ReactJS app to use `Next.js` and possible use NextJS docker image as well.
Credits to CSN for the [app layout](https://github.com/DimiMikadze/create-social-network)