
    const url = 'http://localhost:8081';

    export async function fetchAll(){

     try {
       const response = await fetch(url + '/data/all');
       const json = await response.json();
     return json;  
     } catch (error) {
    
      console.log("Error fetch haevaraukset()")
     }
}


//dds

export async function fetchUpcoming(){

  try {
    const response = await fetch(url + '/data/upcoming');
    const json = await response.json();
  return json;
    
  } catch (error) {
 
    console.log("Error fetch upcoming()")
  }
 

}

export async function fetchHotels(){

  try {
    const response = await fetch(url + '/data/hotels');
    const json = await response.json();
    return json;
   
  } catch (error) {
    console.log("Error fetch hotels()")
  }
}
