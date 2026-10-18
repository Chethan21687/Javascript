let age=26;

let goa_trip=(age>=18)?(age>=21)?"Goa_trip and Drink":"No Drink":"No Goa";
console.log(`Chethan can do this ${goa_trip}`);

let statuscode=404;

let result_status=
    statuscode<300? "Success" :
    statuscode<400? "Redirect" :
    statuscode<500? "Client Error" :"Server Error" ;
console.log(`Status code ${statuscode} is ${result_status}`);

let drive_age=21;

let can_drive=(drive_age>=18)?(drive_age>=21)?"Can Drive and Drink":"Can Drive but No Drink":"Cannot Drive";
console.log(`Chethan can do this ${can_drive}`);

let temp=35
let feel=(temp>=40)?"VeryHot":
          (temp>=30)?"Hot":
            (temp>=20)?"warm":
                (temp>=10)?"Cool":"Cold";
console.log(`Temperature is ${temp} and it feels ${feel}`);