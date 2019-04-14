
        window.onscroll = function() {
            myFunction()
        };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        function myFunction1() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        function myFunction2() {
            document.getElementById("myDropdown2").classList.toggle("show");
        }
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        function myFunction3() {
            document.getElementById("myDropdown3").classList.toggle("show");
        }
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        function myFunction4() {
            document.getElementById("myDropdown4").classList.toggle("show");
        }
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        function validate() {
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var phone = document.getElementById("phone");
            var message = document.getElementById("message");
            var checked = document.getElementById("checked");
            var result1 = $("#result1");
            var result2 = $("#result2");
            var result3 = $("#result3");
            var result4 = $("#result4");
            var result5 = $("#result5");

            if (!name.value) {
                name.style.borderBottom = "2px solid red";
                result1.text("Privalomas laukas");
                result1.css("color", "red");
                return false;
            } else {
                name.style.borderBottom = "none";
                result1.style = "none";
                result1.text("");
            }
            if (!email.value) {
                email.style.borderBottom = "2px solid red";
                result2.text("Ivestas neteisingas el.paštas");
                result2.css("color", "red");
                return false;
            } else {
                email.style.borderBottom = "none";
                result2.style = "none";
                result2.text("");
            }

            if (!phone.value) {
                phone.style.borderBottom = "2px solid red";
                result3.text("Privalomas laukas");
                result3.css("color", "red");
                return false;
            } else {
                phone.style.borderBottom = "none";
                result3.style = "none";
                result3.text("");
            }
            if (!message.value) {
                message.style.borderBottom = "2px solid red";
                result4.text("Privalomas laukas");
                result4.css("color", "red");
                return false;
            } else {
                message.style.borderBottom = "none";
                result4.style = "none";
                result4.text("");
            }
            if (!checked.value) {
                checked.style.border = "2px solid red";
                result5.text("Privalomas laukas");
                result5.css("color", "red");
                return false;
            } else {
                checked.style.border = "none";
                result5.style = "none";
                result5.text("");

            }


            return true;
        }
