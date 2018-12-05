var app = new Vue({
    el: '#app',
    data: {
        people: [],
        info: [],
        contact: [],
    },

    created: function () {
        this.calljson();
    },

    methods: {

        calljson: function () {
            fetch("https://api.myjson.com/bins/k7iji", {
                method: "GET",

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }

            }).then(function (json) {

                app.people = json.people;

                console.log(app.people);
              


            }).catch(function (error) {
                console.log("Request failed: + error.message");
            })
        },
        
        modalbutton: function () {
//            var info = this.people[event.target.getAttribute("data-id")];
//            info = info[event.target.getAttribute("data-id")];
            
            this.info = this.people[event.target.getAttribute("data-id")];
//            this.info.style.display = "block";
            console.log(this.info);
            console.log(this.info.contact.realName);
            this.contact = this.info.contact;
            console.log(this.contact);
            
        }


    }

})
