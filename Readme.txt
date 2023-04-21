Note:- This Application uses prot 3000 and 4000 both of host machine so if any other application is running on these port please close that application before run this application.




Steps to run the application:-
1. Open root directory(BlackCoffer) in terminal
2. Run the command =>"cd server"
3. Run the command =>"npm install"      //to install all the dependencies
4. Run the command =>"npm start"        //server will be started


5. Again Open root directory(BlackCoffer) in terminal
6. Run the command =>"cd client"
7. Run the command =>"npm install"      // to install all the dependencies
8. Run the command =>"npm start"       //client development server will be started
=> application wll be started and it will redirect to the browser just close it.


***Make sure that the mongoDb has installed on the host machine since the application use local database(installed on host machine)***

9. Open browser and type "http://localhost:4000/insert-data" for the first time to insert data into the database
    => it will show you a message "data inserted successfully" with code:200

*** Step 9 will be followed only once, when the first time running the application on the machine***

10 Close this tab and open new tab and type "http://localhost:3000/" in browser's url box and press enter
11. Dashboard will be opened and some graphs will be displayed