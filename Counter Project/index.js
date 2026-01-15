let count = 0;
    function updatecount(){
        document.getElementById("count").innerHTML = count;
    }

    function incriment(){
        count++;
        updatecount();
    }
    function decriment(){
        count--;
        updatecount();
    }
    function reset(){
        count = 0;
        updatecount();
    }
