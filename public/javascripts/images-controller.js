$.ajax({

    url : 'http://localhost:3000/app.js',
    type : 'GET',
    data : {
        'numberOfWords' : 10
    },
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});