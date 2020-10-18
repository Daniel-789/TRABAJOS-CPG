 var material1 = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.5, roughness: 0.1 } );
        var material2 = new THREE.MeshStandardMaterial( { color: 0xCAC8C6, metalness: 0.5, roughness: 0.1 } );
function llanta (){
//CREAR LAS GEOMETRÍAS
			var cilindro1 = new THREE.CylinderGeometry( 4, 4, 1, 50 );
            var cilindro2 = new THREE.CylinderGeometry( 0.3, 0.3, 2, 50 );
            var cilindro3 = new THREE.CylinderGeometry( 3,3, 2, 50 );
            var cubo = new THREE.BoxGeometry( 0.2, 1, 1 );
            var esfera  = new THREE.SphereGeometry( 2.1, 32, 32,Math.PI );
            var esfera1  = new THREE.SphereGeometry( 0.9, 32, 32,Math.PI );
            var esfera2  = new THREE.SphereGeometry( 0.8, 32, 32,Math.PI );
            var llanta = new THREE.Mesh(cilindro1);
            var eje = new THREE.Mesh(cilindro2);
            var cuadrado1 = new THREE.Mesh(cubo);
            var cuadrado2 = new THREE.Mesh(cubo);
            var cuadrado3 = new THREE.Mesh(cubo);
            var cuadrado4 = new THREE.Mesh(cubo);
            var corasa = new THREE.Mesh(cilindro3);
            var ejeC1 = new THREE.Mesh(esfera1);
            var ejeC2 = new THREE.Mesh(esfera2);
            llanta.rotateX(Math.PI/2);
            eje.rotateX(Math.PI/2);
            corasa.rotateX(Math.PI/2);
            cuadrado1.translateY(1.7);
            cuadrado2.translateY(-1.7);
            cuadrado3.translateX(-1.7);
            cuadrado4.translateX(1.7);
            cuadrado3.rotateZ(Math.PI/2);
            cuadrado4.rotateZ(Math.PI/2);
            ejeC1.rotateX(Math.PI/2);
            ejeC2.rotateX(Math.PI/2);
            var CSGllantas = THREE.CSG.fromMesh( llanta );
			var CSGeje = THREE.CSG.fromMesh( eje );
            var CSGcorasa = THREE.CSG.fromMesh( corasa );
            var CSGe1 = THREE.CSG.fromMesh( ejeC1 );
            var CSGe2 = THREE.CSG.fromMesh( ejeC2 );
            var result1 = CSGllantas.subtract(CSGcorasa);
            llanta =  THREE.CSG.toMesh( result1 );
            llanta.material = material1;
            eje.material = material2;
             
            
            var ejes = CSGe1.subtract(CSGe2) ;
            ejeC1 =  THREE.CSG.toMesh( ejes );
            ejeC1.material = material1;
            ejeC2.material = material2;
             var base = [];
            base[0] = new THREE.Vector2( 0, 3.6);
            base[1] = new THREE.Vector2( 1.3, 1.3);
            base[2] = new THREE.Vector2( 3.6, 0 );
            base[3] = new THREE.Vector2(1.3, -1.3 );
            base[4] = new THREE.Vector2( 0, -3.6);
            base[5] = new THREE.Vector2( -1.3, -1.3);
            base[6] = new THREE.Vector2( -3.6,0);
            base[7] = new THREE.Vector2( -1.3, 1.3);
            base[8] = new THREE.Vector2( 0, 3.6);
            
            
            var shape = new THREE.Shape();
			shape.moveTo(0,0);
			shape.splineThru(base);
            
            var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
            var resolution = 100;
            var points = shape.getPoints( resolution );
            var geometry = new THREE.BufferGeometry().setFromPoints( points );
            // Create the final object to add to the scene
            var curveObject = new THREE.Line( geometry, material );
            
            var extrudeSettings = {
				steps: 4,
				amount: 0.45,
				bevelEnabled: false,
			};

			var geometryExt = new THREE.ExtrudeGeometry( shape, extrudeSettings );
			var mesh = new THREE.Mesh( geometryExt ) ;
			
            
			
            var CSGcurvas = THREE.CSG.fromMesh( mesh );
            var CSGc1 = THREE.CSG.fromMesh( cuadrado1);
            var CSGc2 = THREE.CSG.fromMesh( cuadrado2);
            var CSGc3 = THREE.CSG.fromMesh( cuadrado3);
            var CSGc4 = THREE.CSG.fromMesh( cuadrado4);
            var result2 = CSGcurvas.subtract(CSGeje).subtract(CSGc1).subtract(CSGc2).subtract(CSGc3).subtract(CSGc4).subtract(ejes);
            mesh =  THREE.CSG.toMesh( result2 );
            mesh.material = material2;
        
           mesh.add(llanta)
    
    return mesh;
}