# How to bind SQL Database to Pivot table

A quick start project for connecting a SQL Database to a Syncfusion Pivot Table. This repository includes a core Web API Controller (PivotController) for retrieving data from a SQL Database, as well as a quick start sample for the Angular platform that displays the retrieved data in a Pivot Table.

**Documentation:** https://ej2.syncfusion.com/angular/documentation/pivotview/getting-started/

## Project prerequisites

Before beginning work on the server and client projects, ensure the following software to be installed in the machine.

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Angular](https://angularjs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* Compatible versions of [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/ ) and [.NET Core SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) or later installed on your machine.

## How to run this application?

* To run this application, clone the `how-to-bind-SQL-database-to-pivot-table` repository and then open **PivotController** in Visual Studio 2022. Simply build and run your project in IIS Express, and it will host and display the URL `https://localhost:7139`.

*  Now open Angular sample in Visual Studio Code and and install the necessary npm packages using the following command.

```sh
npm install
```

* Initialize the Pivot Table, map the hosted URL, prepare and add a pivot report, and finally run your project using the following command to achieve the desired result.

```sh
ng serve --open
```