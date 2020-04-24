# Node Auth Boilerplate

This is a boilerplate for an Express app with local user authentication.
It exists so I have a customized boilerplate and don't have to start from scratch on future projects.

## What It Includes

* Local Auth (email and password)
* Passport and passport local
* Sessions for saving user info and displaying flash messages
* Settings for PostgreSQL and Sequelize
* Hashed passwords
* EJS templating and EJS layouts
* Sequelize User model
* Materialize styling - nav and footer

## Included Models

**User Model**
| column | Type | Notes
| ----------- | ------------ | --------------------- |
| firstName | String | Required Length > 1 |
| lastName | String | - |
| email | String | Unique Login |
| password | String | Hash |
| birthday | Date | - |
| admin | Boolean | Defaulted to False |
| pic | String | - |
| bio | text | - |
| createdAt | Date | Automatically added by Sequelize |
| lastUpdated | Date | Automatically added by Sequelize |


## Included Routes

## Directions For Use
