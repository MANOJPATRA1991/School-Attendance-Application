

// CREATE MODEL
/* STUDENT APPLICATION */
$(function() {

    var model = {
        schoolDays: 12,
        data: [
            {
                name: "Slappy the Frog",
                daysMissed: 12
            },
            {
                name: "Lilly the Lizard",
                daysMissed: 12
            },
            {
                name: "Paulrus the Walrus",
                daysMissed: 12
            },
            {
                name: "Gregory the Goat",
                daysMissed: 12
            },
            {
                name: "Adam the Anaconda",
                daysMissed: 12
            }
        ]
    };

    var octopus = {
        init: function(){
            view.init();
        },
        getData: function(){
            return model.data;
        },
        incrementDaysMissed: function(i){
            model.data[i].daysMissed++;
        },
        decrementDaysMissed: function(i){
            model.data[i].daysMissed--;
        },
        getDaysMissed: function(i){
            return model.data[i].daysMissed;
        },
        getSchoolDays: function(){
            return model.schoolDays;
        }
    };

    var view = {
        init: function(){
            this.$tBody = $('tbody');
            this.render();
        },
        render: function(){   
            var tBody = this.$tBody;
            octopus.getData().forEach(function(data, index){
                tBody.append("<tr class='student' id='" + index+ "'><td class='name-col'>" + data.name + "</td></tr>");

                for(let i=0; i < octopus.getSchoolDays(); i++){
                    $('#'+index).append("<td class='attend-col'><input type='checkbox'></td>");
                }

                $('#'+index).append("<td class='missed-col'>" + octopus.getDaysMissed(index) + "</td>");
            });

            $('input').click(function(){
                var daysMissed = $(this).parent().siblings('.missed-col');
                var student = $(this).closest('tr').attr('id');
                // console.log(octopus.getDaysMissed(2));
                if(this.checked){
                    octopus.decrementDaysMissed(parseInt(student));
                    // console.log(octopus.getDaysMissed(student));
                }else{
                    octopus.incrementDaysMissed(parseInt(student));
                    // console.log(octopus.getDaysMissed(parseInt(student)));
                }
                daysMissed.text('');
                daysMissed.text(octopus.getDaysMissed(parseInt(student)));
            });
        }
    };
    octopus.init();
}());
