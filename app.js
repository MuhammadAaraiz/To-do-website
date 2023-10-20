function RemoveInp(){
        var Listremove = document.getElementById("itemList");
        
        Listremove.innerHTML="";
        
    }
    

 function addItem() {
      var userInput = document.getElementById("userInput").value;
      console.log(" The Value of Users Original Input is = "  + userInput)  

        var itemList = document.getElementById("itemList");
        var li = document.createElement("li");
        li.innerHTML = userInput;
        
    
        var editButton = document.createElement("button");
        editButton.innerText = "EDIT";
        editButton.classList.add("Editbtn");
        editButton.onclick = function() {
          var updatedText = prompt("Edit your input:");
            li.innerHTML = updatedText;
            console.log(" The Value of Users Updated  Input is = " + li.innerHTML)
        };
        


        
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";
        deleteButton.classList.add("Deletebtn");
       
        deleteButton.onclick = function() {
          itemList.removeChild(li);
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        itemList.appendChild(li);
        document.getElementById("userInput").value = "";
      
    }

