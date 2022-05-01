const dict = {
     '2020-01-01':4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2
    // '2020-01-01':6, '2020-01-04': 12,'2020-01-05': 14,'2020-01-06': 2, '2020-01-07':4
 }
 const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 const newdict = {
     "Mon" : 0, "Tue" : 0, "Wed" : 0, "Thu" : 0,  "Fri" : 0,  "Sat" : 0, "Sun" : 0
 }
 for (const key in dict){
     const d = new Date(`${key}`);
     let day = weekday[d.getDay()];
     newdict[day] += dict[key];
 }
 console.log(newdict);
 
 