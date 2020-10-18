function Carrito (){
    var Manzanota = [];
    var material_Rojo = new THREE.MeshStandardMaterial({Color:0xff0000,metalness: 0.5, roughness: 0.1});
    var material_Negro = new THREE.MeshStandardMaterial({Color:0x000000,metalness: 0.5, roughness: 0.1});
    var material_Violeta = new THREE.MeshStandardMaterial( { color: 0x05FDDB , metalness: 0.5, roughness: 0.1, opacity: 0.9 } );
     var material2 = new THREE.MeshStandardMaterial( { color: 0x55EBF2, roughness: 0.1 ,transparent:true, opacity: 0.5 } );
         Manzanota[0]  =  new THREE.Vector2(-14.3897472614293,-2.1311425965975);
           Manzanota[1]  =  new THREE.Vector2(-17.337578374688,-1.1460918802621);
            Manzanota[2]   =  new THREE.Vector2(-18.9926460530273,1.4911307069846);
            Manzanota[3]   =  new THREE.Vector2(-17.6573419423912,2.7803898482884);
            Manzanota[4]   = new THREE.Vector2 (-14.0157658217883,3.5803658352758);
         Manzanota[5]     =  new THREE.Vector2(-4.9454266812217,6.099699731253);
           Manzanota[6]   = new THREE.Vector2(0.1160162198676,6.2798075175414);
           Manzanota[7]   =   new THREE.Vector2(6.83858174238,3.6091992962694);
         Manzanota[8]      =  new THREE.Vector2(13.2704117960035,3.6650810948339);
           Manzanota[9]   =  new THREE.Vector2(19.8165485918215,2.017714605069);
           Manzanota[10]  = new THREE.Vector2(21.6093565690548,0.0567322428735);
          Manzanota[11]  = new THREE.Vector2(20.3875375655837,-1.5593633776175);
         Manzanota[12]   =  new THREE.Vector2(17.818087183654,-2.2311151114554);
         Manzanota[13]   = new THREE.Vector2(17.7295727723164,-0.0070151319459);
          Manzanota[14]  =  new THREE.Vector2(16.5008887439094,1.7838545871402);
          Manzanota[15]   = new THREE.Vector2(13.9656421837535,2.3373239066108);
          Manzanota[16]  =  new THREE.Vector2(11.5553725667039,1.4089237578213);
         Manzanota[17]  =  new THREE.Vector2(10.5555570218537,-0.0372380124084);
           Manzanota[18]   = new THREE.Vector2(10.1379257549678,-1.2749198597502);
           
             Manzanota[19] =  new THREE.Vector2(9.863364964386,-2.8399163660663);
             Manzanota[20] = new THREE.Vector2(-6.8299311029857,-2.8124602870081);
            Manzanota[21]  = new THREE.Vector2(-7.1594040516839,-1.2749198597502);
              Manzanota[22] = new THREE.Vector2(-8.1478228977782,1.2510394136022);
             Manzanota[23] = new THREE.Vector2(-11.1679915941777,2.2669143387547);
            Manzanota[24]   = new THREE.Vector2(-14.1881602905772,1.0313907811367);
              Manzanota[25] =   new THREE.Vector2(-14.7647379507989,-0.6983421995284);
              Manzanota[26]  = new THREE.Vector2(-14.3897472614293,-2.1311425965975);
   // ventana 
   var ventana = [];
          ventana  [0]  =    new THREE.Vector2(-4.859737692746,5.570850598049);
          ventana  [1]  =    new THREE.Vector2(0.2395414212756,5.606262258563);
          ventana  [2]  =    new THREE.Vector2(3.5328258490812,3.0920343620663);
          ventana  [3]  =    new THREE.Vector2(-4.2223278034933,3.3045043251505);
          ventana  [4]  =    new THREE.Vector2(-4.859737692746,5.570850598049);
   //Ventana
   var shap_ventana = new THREE.Shape();
    shap_ventana.moveTo(-4.859737692746,5.570850598049);
    shap_ventana.splineThru(ventana); 

    var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var resolution = 70;
    var points = shap_ventana.getPoints( resolution );
    var geometryVentana = new THREE.BufferGeometry().setFromPoints( points );
    // Create the final object to add to the scene
    var curveObjectVentana = new THREE.Line( geometryVentana, material2);
//scene.add(curveObjectVentana);
    var extrudeSettings1 = {
      steps: 6,
      amount: 10,
      bevelEnabled: false,
      };
      
      var geometryFinalVentana = new THREE.ExtrudeGeometry( shap_ventana, extrudeSettings1 );
      //scene.add(geometryFinalVentana);
      var RecorteVentana = new THREE.Mesh( geometryFinalVentana, material_Violeta ) ;
      RecorteVentana.applyMatrix( new THREE.Matrix4().makeTranslation(0.5,0,-5,0));
     // scene.add(RecorteVentana);
 
   //Carro 
    var shap_Manzana = new THREE.Shape();
    shap_Manzana.moveTo(-14.3897472614293,-2.1311425965975);
    shap_Manzana.splineThru(Manzanota);
    
    var material1 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var resolution = 70;
    var points = shap_Manzana.getPoints( resolution );
    var geometry1 = new THREE.BufferGeometry().setFromPoints( points );
    // Create the final object to add to the scene
    var curveObject1 = new THREE.Line( geometry1, material1 );
//scene.add(curveObject1);
    //EXTRUDE
    var material_Verde = new THREE.MeshStandardMaterial({Color:0x00ff00,metalness: 0.5, roughness: 0.5});
    var extrudeSettings1 = {
    steps: 6,
    amount: 10,
    bevelEnabled: false,
    };
    
    var geometryExt1 = new THREE.ExtrudeGeometry( shap_Manzana, extrudeSettings1 );
    var materialExt1= new THREE.MeshStandardMaterial( { 
    color: 0x00ff00, 
    metalness: 0.5, 
    roughness: 0.1,
    opacity: 0.75,
    transparent: true			
    } );
    
    var Manz = new THREE.Mesh( geometryExt1, material_Rojo ) ;
    var scr = 0.6;
var sm = new THREE.Matrix4();
  sm.set( 	  scr, 0, 0, 0,
              0, scr, 0, 0, 
              0, 0, scr, 0,
              0, 0, 0, 1 );
         
//Manz.applyMatrix(sm);
Manz.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,-5,0));
var cubo = new THREE.BoxGeometry( .7, 6, 9 );    
    var c = new THREE.Mesh( cubo, material_Rojo ) ;
   
    c.applyMatrix( new THREE.Matrix4().makeTranslation(4,4.4,0));
     c.rotateZ(1.16937);
  
  var cubo2 = new THREE.BoxGeometry( 10, 6, 2 );    
    var c2 = new THREE.Mesh( cubo2, material_Rojo ) ;
   
    c2.applyMatrix( new THREE.Matrix4().makeTranslation(11,8,3.3));
     c2.rotateZ(0.436332);  
   var cubo3 = new THREE.BoxGeometry( 10, 6, 2 );    
    var c3 = new THREE.Mesh( cubo3, material_Rojo ) ;
   
    c3.applyMatrix( new THREE.Matrix4().makeTranslation(11,8,-3.3));
     c3.rotateZ(0.436332); 

    
//
var C1 = THREE.CSG.fromMesh(Manz);
var R1 = THREE.CSG.fromMesh(RecorteVentana);
var C2  =    THREE.CSG.fromMesh(c);
    var C3  =    THREE.CSG.fromMesh(c2);
    var C4 =    THREE.CSG.fromMesh(c3);

// 
//a.union(b)	// a.subtract(b) //a.intersect(b)
//
var resul = C1.subtract(R1).subtract(C2).subtract(C3.union(C4));
//

var CarroFinal = THREE.CSG.toMesh(resul);
CarroFinal.material=material_Violeta;
//Mostrar
var geometry_PuntoCentro = new THREE.SphereGeometry( 0.1, 32, 32 );
var PuntoCentral = new THREE.Mesh(geometry_PuntoCentro,material_Violeta);
PuntoCentral.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0,0));
PuntoCentral.add(CarroFinal);
var cubo = new THREE.BoxGeometry( 0.2, 1, 1 );



return PuntoCentral;






}