import React from "react";

function TodoHeader(){

  const d = new Date(),
        weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = weekDay[d.getDay()],
        month = months[d.getMonth()],
        date = d.getDate();

    return(
        <div className="header">
          <h2 className="date">
            {day + ', '} 
            {month +' '}
            {date}
          </h2>
        </div>
    )
}

export default TodoHeader;