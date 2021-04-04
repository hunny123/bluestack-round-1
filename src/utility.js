export const getDateObj=(time)=>{
    // This is utility function which handle all the date dependencies
    const today = new Date()
    const date = new Date(time)
    const month = date.toLocaleString('default',{ month:'short'})
    const day = date.getDate()
    const year = date.getFullYear()
    const value = (today - date);
    const diffTime= Math.abs(value)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const dateObj = {message:"",diffDays,type:"",date : `${month} ${year}, ${day}`,ddmmyy:[day,month,year]}
    //setting up a type and message according to date passed
    if (date.setHours(0,0,0,0)===today.setHours(0,0,0,0)) { 
       // for getting todays days 
        dateObj.type ='live' 
        dateObj.message = "Live"
    }
    else if(value>0){
        dateObj.type = "past"
        dateObj.message = `${diffDays} Days Ago`
    }
    else {
        dateObj.type ='future'
        dateObj.message = `${diffDays} Days Ahead`
    }
    // returning obj which contain message, date in required format and type 
    return {...dateObj}
     
}
export const getInDDMMYYYYFormat=(time)=>{
    // time to yyyy-mm-dd format i
    const today = new Date(time);
    let  dd = today.getDate();
    let  mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    
    const  dateFormat = yyyy+'-'+mm+'-'+dd;
    
    return dateFormat
}