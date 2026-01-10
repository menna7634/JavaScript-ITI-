 document.getElementById("numOnly").onkeypress = function(e) {
            if (e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault(); 
                return false;
            }
        };