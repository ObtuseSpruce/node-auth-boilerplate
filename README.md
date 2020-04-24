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
| id | Integer | Serial Primary Key |
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

| Method | Path | Purpose |
| --------- | -------------------------| -------------------------|
| GET | `/` | Home Page |
| Get | `*` | Catch-all for 404s |

**Routes in Controllers/auth.js**

| Method | Path | Purpose |
| --------- | -------------------------| -------------------------|
| GET | `/auth/login` | Render login form |
| POST | `auth/login` | Process login data |
| GET | `/auth/signup` | Render signup form |
| POST | `auth/singup` | Process signup data |
| GET | `/auth/logout` | Remove user from session + redirect |

**Routes in Controllers/auth.js**

| Method | Path | Purpose |
| --------- | -------------------------| -------------------------|
| GET | `/profile/user` | Show user dashboard (authorized user only) |
| GET | `/profile/admin` | Show admin dashboard (authorized admin only) |
| GET | `/profile/guest/:id` | View user dashboard (authorized user only) |

## Directions For Use

### 1. Clone the repository, but with a different name

Run the following commands in terminal

```sh
git clone <repository_link> <new_name_here>
```
*** For Example ***
```sh
git clone git@github.com:obtuseSpruce/node-auth-boiler.git shiney-new-project
```

### 2. Install the modules from package.json

```sh
npm install
```
### 3. Customize the new project

3.1. Remove default names:
   * 3.1.1. Title in `layout.ejs`
   * 3.1.2. logo Field in the Nav Bar
   * 3.1.3. Description and Repository fields in package.json
   * 3.1.4. Remove this boilerplate's README content
   * 3.1.5. Switch Favicon to project-specific one (in `layout.ejs` head section)
   
### 4. Create a new database for the new project

 ```sh
 createdb <new_db_name>
 ```
 **For Example**
 ```sh
 createdb shiny_project_db
 ```
### 5 Alter Sequelize Config File

In `config/config.json`, update the database name to the one created in step 4. Other settings are likely okay but double check username, password, and dialect.

### 6 Check user model for relevance to new project's needs

for example, if the new project doesn't need a birthday field, then delete it from the user model and user migration files.

### 7 Run the sequelize migrations
```sh
sequelize db:migrate
```

### 8 Create a file for the environment variables
```sh
touch .env
```

>alternatively just create via text editor

Incude the following .env variables

* SESSION_SECRET - this is a key for session to use

### 9. Run the server and make sure it works

**with nodemon**
```sh
nodemon
```
**without nodemon**
```sh
node index.js
```
>highly recommend installing nodemon as `node index.js` will not update changes
