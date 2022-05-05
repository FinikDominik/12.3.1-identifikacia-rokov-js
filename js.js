for( c = 1990; c < 2031; c++ ){
    console.log( c )
    a = c % 10 
    b = c % 4 
    
    if( a == 0 && b == 0){
        console.log( 'P O ')
        continue;
    } else if( a == 0 ){
        console.log( 'O ')
        continue;
    } else if( b == 0 ){
        console.log( 'P ')
        continue;
    }
}










