ReadMe

Welcome to Know Your Greens! This project is intended to help you take care of your houseplants.
The website content is powered by scraping Bloomscape.com using Beautiful Soup. With a front end written in React,
Know Your Greens also gives you the ability to create your account and add your favorite plants to a 
Favorites list that can be kept up to date.

Technologies Used:
- Python
- Beautiful Soup
- Flask
- React
- Postgres
- Parcel 
- SQLAlchemy
- JSON

How to run Know Your Greens:

- Create and start a virtual environment by running virtualenv env.
- Run source env/bin/activate
- Run the following command to install dependencies:
Pip3 install -r requirements.txt
- Run the following command to set up a Postgres SQL: 
Createdb knowyourgreens
- Dump the db into the created database. 
psql knowyourgreens < knowyourgreens.sql
- From your terminal run the following from root
npm start
- From your python terminal, run the following from root:
python3 api/server.py

