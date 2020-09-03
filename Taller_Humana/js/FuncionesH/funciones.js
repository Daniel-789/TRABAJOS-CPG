
function esfera(radio){
    
    var geoEsfera = new THREE.Geometry();
            var zTemp = 0;
            var resXY = 20.0;
			var resZ = 20.0;
            var radio;
            for( var i = 0; i < resZ; i++){
                for( var j = 0; j < resXY; j++){
                    var punto = new THREE.Vector3();
                    punto.x = radio * Math.cos( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI )/ resZ) ;
                    punto.y = radio * Math.sin( ( j * 2 * Math.PI )/resXY) * Math.sin( ( i * Math.PI )/ resZ) ;
                    punto.z = radio * Math.cos( ( i * Math.PI )/resZ) ;
                    geoEsfera.vertices.push( punto );
                }
            }
    return geoEsfera;
     
} 
//FUNCION PARA GENERAR CUBOS
		function Cubo(ancho,alto,profundo){
			var geoCubo = new THREE.Geometry();
			var i = 0, j=0,k=0;
			for(i = 0; i<profundo;i=i+0.05 ){
				for(j=0;j<alto;j=j+0.05){
					for(k=0;k<ancho;k=k+0.05){
						var punto = new THREE.Vector3();
						punto.x = k;
						punto.y = j;
						punto.z = i;
						geoCubo.vertices.push(punto);
					}
				}
			}
			return geoCubo;
		}
function Cilindro(altura, ancho,resolucion){
		 var geoCilindro = new THREE.Geometry();
	        var res = resolucion;
            for( var i = 0; i < res; i++){
                for( var j = 0; j < res; j++){
                    var punto = new THREE.Vector3();
                    punto.x = ancho * Math.cos( ( j * 2 * Math.PI )/res);
                    punto.y = altura * i/res;
                    punto.z = ancho * Math.sin( ( j * 2 * Math.PI )/res);
                    geoCilindro.vertices.push( punto );
                }
            }
			return geoCilindro;
	    }
function fondo(){
    var size = 10;
			var arrowSize = 1;
			var divisions = size;
			var origin = new THREE.Vector3( 0, 0, 0 );
			var x = new THREE.Vector3( 1, 0, 0 );
			var y = new THREE.Vector3( 0, 1, 0 );
		  	var z = new THREE.Vector3( 0, 0, 1 );
			var color1 = new THREE.Color( 0xFFFFFF );
		  	var color2 = new THREE.Color( 0x333333 );
		  	var colorR = new THREE.Color( 0xAA3333 );
		  	var colorG = new THREE.Color( 0x33AA33 );
		  	var colorB = new THREE.Color( 0x333366 );
		  
		  	//CREAR LAS GRILLAS PARA EL ESCENARIO
		  	var axesHelper = new THREE.AxesHelper( size );
		  	var gridHelperXY = new THREE.GridHelper( size, divisions, color1, color1);
		  	var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2 );
		  	var gridHelperYZ = new THREE.GridHelper( size, divisions, color2, color2 );
            
            //ROTARLAS PARA QUE QUEDEN EN EL ESPACIO ADECUADO
            gridHelperXY.rotateOnWorldAxis ( x, THREE.Math.degToRad(90) );
            gridHelperXZ.rotateOnWorldAxis ( y, THREE.Math.degToRad(90) );
            gridHelperYZ.rotateOnWorldAxis ( z, THREE.Math.degToRad(90) );
            
            //CREAR LAS FLECHAS QUE INDICAN LOS EJES DE COORDENADAS 3D
            var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
            var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
            var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
    	    //scene.add( gridHelperXY );
            scene.add( gridHelperXZ );
		  	scene.add( arrowX );	
		  	scene.add( arrowY );	
		  	scene.add( arrowZ );	
}