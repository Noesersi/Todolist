const URL = "https://todolist-a460e-default-rtdb.europe-west1.firebasedatabase.app/NIT.json"
export const getTodos = () => {
    return fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((res) =>{
        return res }
      )
      .catch((err) => console.log(err));
}

export const modifyTodos = async (todos) =>  
{ return fetch(URL, {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
        return data
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    })
    
    ;}