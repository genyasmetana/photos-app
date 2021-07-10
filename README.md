# This project was bootstrapped with Create React App

1) You need node version > 10
2) you can use package manager npm or yarn

## Before start
You need to install dependencies via `npm install` or `yarn add`

### Scripts for bootstrapping project
1) start the project run
   `npm start` or `yarn start`
   

## Architecture:

Top-level project architecture (which is under src/ folder) should be organized by type.

- `src/main` For an application, we should have a place somewhere to put configuration 
  files related to our application logic
  
- `src/library` For an applications, we usually have common components, some functions or utilities

- `src/modules` App are separated on modules. Each page it's certain module represents a separate page. 
  Each page is a self-organized structure of components, logic and etc. The module can have access to the store. 
  
- `src/resources` All resources we should keep in a separate folder like this. 
  We could keep these files in certain modules, but this is not extensive and can bring some mess to our code
