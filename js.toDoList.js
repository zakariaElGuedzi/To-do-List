    // Declaration of variables
    const inputBox = document.getElementById('input-box');
    const listcontainer = document.getElementById('list-container');

    // Take Data from input and add it into to do list
    function addTask() {
        if(inputBox.value === '') {
            alert("You need to write something");
        }
        else {
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listcontainer.appendChild(li);

            let span = document.createElement('span');
            span.innerHTML = '\u00d7' ;
            li.appendChild(span);

            let ol = document.createElement('ol');
            ol.innerHTML = 'Do it !' ;
            li.appendChild(ol);
            }
        inputBox.value = "" ;
    }
    
    // change icon from unchecked to checked & span x
    listcontainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            svData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            svData();
        }
    }, false);

    // save data until we refrech page
    function svData() {
        localStorage.setItem('data', listcontainer.innerHTML);
    }
    function showTask() 
    {listcontainer.innerHTML = localStorage.getItem("data");
    }
    showTask()