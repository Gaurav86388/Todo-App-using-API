
let URL = "https://jsonplaceholder.typicode.com/todos"
let fetch_todo = document.querySelector("#fetch_todos");
let show_todo = document.querySelector("#show_all");
let show_pending = document.querySelector("#show_pending")
let show_completed = document.querySelector("#show_completed")
let display = document.querySelector(".display");



function header_rendering(){
            // render heading rows

            let rows = document.createElement("div");
            rows.setAttribute("class", "rows");
    
                let id = document.createElement("div");
                id.setAttribute("id", "id");
    
                let userid = document.createElement("div");
                userid.setAttribute("id", "userid");
    
                let description = document.createElement("div");
                description.setAttribute("id", "description");
    
                let status= document.createElement("div");
                status.setAttribute("id","status");
    
                id.innerText = "Id";
                userid.innerText = "User Id";
                description.innerText = "Description";
                status.innerText = "Status"
       
    
                rows.append(id);
                rows.append(userid);
                rows.append(description);
                rows.append(status);
                display.append(rows);
               
}


    

fetch_todo.addEventListener("click", ()=>{
    
 
    fetch(URL)
    .then( (response)=>{
    
        return response.json()
    })
    .then( (data)=>{
        let todo_datas = data;
            display.innerHTML = ''
    
            header_rendering()
        // render rest of the data
            todo_datas.map((todo_data)=>{
        
                let rows = document.createElement("div");
                rows.setAttribute("class", "rows");
        
                
        
                    let id = document.createElement("div");
                    id.setAttribute("id", "id");
        
                    let userid = document.createElement("div");
                    userid.setAttribute("id", "userid");
        
                    let description = document.createElement("div");
                    description.setAttribute("id", "description");
        
                    let status= document.createElement("div");
                    status.setAttribute("id","status");
        
                    id.innerText = `${todo_data.id}`;
                    userid.innerText = `${todo_data.userId}`;
                    description.innerText = `${todo_data.title}`;
                    
        
                    let status_value = `${todo_data.completed}`;
                    if(status_value === "false"){
                        status.innerText = "Pending"
                    }
                    else if (status_value === "true"){
                        status.innerText = "Completed"
                    }
        
                    rows.append(id);
                    rows.append(userid);
                    rows.append(description);
                    rows.append(status);
    
                    if(status.innerText === "Pending"){
                        rows.childNodes.forEach(element=>{
                            element.style.background = "red"
                        })
                    }
                    else if(status.innerText === "Completed"){
                        rows.childNodes.forEach(element=>{
                            element.style.background = "green"
                        })
                    }
    
    
                    display.append(rows);
    
                    
                })
        
            })
        
       .catch(error=>{
            console.log("Error Fetching Todos...", error);
            })
})


show_todo.addEventListener("click", ()=>{
    
   
        display.childNodes.forEach(element=>{

            element.style.display = "flex"
        })

}); 

show_pending.addEventListener("click", () => {
    


    
    // Show only pending rows
    document.querySelectorAll("#status").forEach(element=> {
        const ele = element.parentElement
        if(element.innerText === "Pending" || element.innerText === "Status"){
            
            ele.style.display = "flex";

        }
        else{
            ele.style.display = "none";
        }
        
    });
});

show_completed.addEventListener("click", () => {
    
    
    // Show only completed rows
    document.querySelectorAll("#status").forEach(element=> {
        const ele = element.parentElement
        if(element.innerText === "Completed" || element.innerText === "Status"){
            
            ele.style.display = "flex";
        }
        else{
            ele.style.display = "none";
        }
        
    });
});
