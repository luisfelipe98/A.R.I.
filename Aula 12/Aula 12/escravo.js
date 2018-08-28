onmessage = function (event){
	
	var mensagem = event.data;
	var i = 2;
	
    for (var count = 1; count <= mensagem; ) {
        for (var c = 2 ; c <= i - 1 ; c++ ) {
            if ( i%c == 0 ){
                break;
        }}
        if (c == i) {
            postMessage(i);
            count++;
        }
        i++;
    }
	
}