jQuery(document).ready(function(){
   
    var dateElem = jQuery('div.date');
    var timeElem = jQuery('div.time');
   
    jQuery.ajax({
       url:'http://date.jsontest.com/' 
    })
     .done(function(response){
         console.log(response)
         dateElem.text(response.date);
         timeElem.text(response.time);
    });
    
    var userList = jQuery('.users');
    
    function getUsers(){
        jQuery.ajax({
            url: "http://localhost/CodersLab/POZ_PHP_W_01/POZ_PHP_W_01_JavaScript/REST/api/User.php"
        })
        .done(function(response){
//            console.log(response);
            response.forEach(function(user){
                var newLi = jQuery('<li>').text(user.userName);
                newLi.appendTo(userList);
            })
        })
        .fail(function(){
            alert('Błąd pobrania danych');
        })
    }
    getUsers();
    
    var form = jQuery('form');
    
    form.on('submit',function(event){
        event.preventDefault();
        var userName = form.find('input[name=username]').val();
        var password = form.find('input[name=password]').val();
        var dataToSend = {
            username: userName,
            password: password
        }
        
        jQuery.ajax({
            url: form.attr('action'),
            data: dataToSend,
            type: 'POST'
        })
        .done(function(response){
            if(response!==false){
                //wstawiam po zapisie do bazy ten nowy element do listy
                var newLi = jQuery('<li>').text(response.userName+"("+response.id+")" );
                newLi.appendTo(userList);
            }

        });
    })
    
    
    var dataToUpdate = {
        username: 'test',
        password: 'test2'
    }

    jQuery.ajax({
        url: form.attr('action'),
        data: dataToUpdate,
        type: 'PUT'
    })
    .done(function(response){
        if(response!==false){
            //wstawiam po zapisie do bazy ten nowy element do listy
            var newLi = jQuery('<li>').text(response.userName+"("+response.id+")" );
            newLi.appendTo(userList);
        }

    });
    
    
    //PRZYKŁAD Z NASA
    jQuery.ajax({
        //adres api, z którego pobieramy dane
        url: "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo"
    })
    .done(function(response){
        //sprawdzamy co nam zwróciło API
        console.log(response);
        //Tworzymy nowy obrazek 
        var newImg = jQuery('<img>').attr('src',response.hdurl);
        //Wstawiamy go do html-a
        newImg.appendTo(jQuery('div.nasa'));
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});