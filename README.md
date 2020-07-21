# prociv-server

## config

Add a config folder to the root directory with a .env file containing your PORT and MONGODB URI.

example:
/config/dev.env

## endpoints

/fetchAll -> fetch all occurrences from ANPC and save to DB  
/all -> get all occurrences from database  
/distrito/:distritoID -> get occurrences from distrito code (DI)  
/concelho/:concelhoID -> get occurrences from concelho code (DICO)  
/freguesia/:freguesiaID -> get occurrences from freguesia code (DICOFRE)

## test

For test run npm/yarn test.  
Testing framework used - JEST
