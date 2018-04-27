var helado, direccion;
var helado2
var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};
var carrox=500;
var carroy=0;
var libroy = 0
var libroy1 = 0
var libroy2 = 0
var libroy3 = 0
var bananas1 = 1 
var bananas2 = 1
var botetlla1 = 1
var botetlla2 = 1
var vida = 3
var mundo = 3   
var mundo33 = true
var librobolando = 3;
var librobolando1 = 3;
var librobolando2 = 3;
var librobolando3 = 3;
var progresss = 3
var libb1 = 1
var libb2 = 1
var libb3 = 1
var libb4 = 1
var libb5 = 1
//opstaculos del nivel 2 [x,y]
var barras = 0//varialbs carga de imagenes
/*/var alterna = {
    url = ["fondo1.jpg","fondo3.gif","fondo.png","liz.png","dianafrente4.png","dianaatras.png","dianade4.png","dianaiz4.png"],
    img = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
};/*/
 
var fondo ={
    imagenOK: false
};
var hh = {
    hhh: false
};
var jj = {
    jjj: false
};
var imagen = {
    ggg: false
};
var andrea = {
    freOK: false,
    atrOK: false,
    derOK: false,
    izOK: false,
    velocidad: 20,
    x: 0,
    y: 0,
 
};
var mala = {
    malaOK: false,
    x:450,
    y:449,
};
 
 
function inicio()
{
    var canvas = document.getElementById("dibujito");
    helado = canvas.getContext("2d");
 
    /*/ for (var i=0; i<=3; i++)
    {
        alterna.img[i].src = tifis.url[i];
        alterna.img[i].onload = confirmarImagen;
    }/*/
    fondo.imagen = new Image();
    fondo.imagen.src = "fondo1.jpg";
    fondo.imagen.onload = confirmarfondo;

    fondo4 = new Image();
    fondo4.src = "fondoooo.jpg";
    fondo4.onload = confirmarfondo;

    hh.imagen = new Image();
    hh.imagen.src = "fondo.pngs";
    hh.imagen.onload =confirmarfondo2;
 
    mala.malas = new Image();
    mala.malas.src = "liz.png";
    mala.malas.onload = confirmarmaldad;
 
    andrea.frente = new Image();
    andrea.frente.src = "dianafrente4.png";
    andrea.frente.onload = confirmarfrente;
 
    andrea.atrass = new Image();
    andrea.atrass.src = "dianaatras.png";
    andrea.atrass.onload = confirmaratrass;
 
    andrea.der = new Image();
    andrea.der.src = "dianade4.png";
    andrea.der.onload = confirmarder;
 
    andrea.izq = new Image();
    andrea.izq.src = "dianaiz4.png";
    andrea.izq.onload = confirmarizq;
 
    cc.imagen = new Image();
    cc.imagen.src = "carretera.jpg";
    cc.imagen.onload = confirmarfondo;
 
    carro = new Image();
    carro.src = "car.png";
    carro.onload = anim;
 
    carro2 = new Image();
    carro2.src = "car.png";
    carro2.onload = anim;
 
    carro3 = new Image();
    carro3.src = "car.png";
    carro3.onload = anim2;
 
    carro4 = new Image();
    carro4.src = "car.png";
    carro4.onload = anim2;
 
    banana = new Image();
    banana.src = "index.png";
    banana.onload = confirmarfondo;
 
    bote = new Image();
    bote.src = "botella.png";
    bote.onload = confirmarfondo;

    coco = new Image();
    coco.src = "coco.png";
    coco.onload = confirmarfondo; 
 
    libro = new Image();
    libro.src = "libro.gif";
    libro.onload = anim3; 

    libro1 = new Image();
    libro1.src = "libro.gif";
    libro1.onload = anim4;

    libro2 = new Image();
    libro2.src = "libro.gif";
    libro2.onload = anim5;

    libro3 = new Image();
    libro3.src = "libro.gif";
    libro3.onload = anim6;

    libroteca = new Image();
    libroteca.src = "girl-160172_640.png";
    libroteca.onload = confirmarfondo2;

    canecaaaa = new Image();
    canecaaaa.src = "liz.png";
    canecaaaa.onload = confirmarmaldad;

    var m = document.getElementById("mover");
    //m.addEventListener("click", movimiento)
    document.addEventListener("keydown", teclado);
}



//function add(){num++; if(num==5) {dibujar()}}
function teclado(datos)
{ 
    var codigo = datos.keyCode;
    var xAnt = andrea.x;
    var yAnt = andrea.y;
    var xAnta = andrea.x;
    var yAnta = andrea.y;
//codigo de movimiento de andrea 
    if(codigo==teclas.DOWN){andrea.y += andrea.velocidad;if(andrea.y>455) //|| andrea.x<140 && andrea.y>155 && andrea.y<190 || andrea.y>300 && andrea.x<350 && andrea.x>110 && andrea.x<200)
        {andrea.y -= andrea.velocidad;}}
    if(codigo == teclas.UP){andrea.y -= andrea.velocidad;if(andrea.y<0)// || andrea.x<140 && andrea.y<250 && andrea.x<145 || andrea.x>175 && andrea.y<245  && andrea.x<225)// ||   andrea.y> 425 && andrea.y<400 && andrea.x<130)
        {andrea.y += andrea.velocidad;}}
    if(codigo == teclas.RIGTH){andrea.x += andrea.velocidad;if(andrea.x>475) //|| andrea.y<260 && andrea.x>160 && andrea.x<210)
        {andrea.x -= andrea.velocidad;}}
    if(codigo == teclas.LEFT){andrea.x -= andrea.velocidad;if(andrea.x<0)
        {andrea.x += andrea.velocidad;}}
 
       if (andrea.x >= 430 && andrea.y >= 400){
           hh =  confirmarfondo2();
           }

    //consi¿¿dicional de carga de optaculos mundo 2
    if (mala.x >=450 && mala.y <= 0) {
            for (var v = 0; v < 76; v++)
            {if (andrea.x == obstaculos[v][0] && andrea.y == obstaculos[v][1] )
            {andrea.x = xAnt;
            andrea.y = yAnt;}}
        }
   if (mala.x >=70 && mala.x <=90 && mala.y <= 0) {
            for (var v = 0; v < 51; v++)
            {if (andrea.x == obstaculosa[v][0] && andrea.y == obstaculosa[v][1] )
            {andrea.x = xAnta;
            andrea.y = yAnta;}}}
            direccion = codigo;
            dibujar();
}
//consi¿¿dicional de carga de optaculos mundo 3
function confirmarImagen()
    {
        dibujar();
    }
function cc (){
            dibujar();
}
 
function confirmarfondo()
    {
        fondo.imagenOK = true;
        carro.x += 1;
    }
    //carga dondos del mundo 2 y activa condicional de obstaculos
function confirmarfondo2()
    {         
    if (mundo == 3) {
        if (andrea.x >= 430 && andrea.y >= 400){
           if (bananas1 == 3 && bananas2 == 3 && botetlla1 == 3 && botetlla2 == 3) {
                alert("haz ayudado al planeta un poquitico");
                mundo2();
            }
     
        if (bananas1 == 0) {
            bananas1 = 3
        }
        if (bananas2 == 0) {
            bananas2 = 3
        }
        if (botetlla1 == 0) {
            botetlla1 = 3
        }
        if (botetlla2 == 0) {
            botetlla2 = 3
        }
        dibujar();             
        }
    };
    if (mundo == 2) {
        if (progresss == 10){
            mundo3();
    };    
    }
    dibujar()
    }
    //carga dondos del mundo 3 y activa condicional de obstaculos
function confirmarfondo3()
    {
        if ( andrea.x >= 430 && andrea.y <= 40  ) {
        alert("haz ganado");
        fondo.imagen = jj.imagen;
        andrea.x = 0;
        andrea.y = 0;
        mala.x =70;
        mala.y = 0;
        dibujar();}

    }
function confirmarfrente()
    {
        andrea.freOK = true;
        dibujar();
    }
function confirmaratrass()
    {
        andrea.atrOK = true;
        dibujar();
    }
function confirmarmaldad()
    {
        mala.malaOK = true;
        dibujar();
    }
function confirmarder()
    {
        andrea.derOK = true;
        dibujar();
    }
function confirmarizq()
    {
        andrea.izOK = true;
        dibujar();
    }
 
 
function prdiste(){

andrea.x =0
andrea.y =0
bananas1 = 1 
bananas2 = 1
botetlla1 = 1
botetlla2 = 1 
vida = vida -1
if (vida == -1) {
    alert("haz perdido")
location.reload();
};

}
function dibujar(){

    if (mundo == 3) {
     if(fondo.imagenOK) 
        if (andrea.x == carrox && andrea.y == 40 || andrea.x == carrox && andrea.y == 20) {
            prdiste()
        }
        if (andrea.x == carroy && andrea.y == 100 || andrea.x == carroy && andrea.y == 80) {
            prdiste()
        }
        if (andrea.x == carrox && andrea.y == 220 || andrea.x == carrox && andrea.y == 200) {
            prdiste()
        }
        if (andrea.x == carroy && andrea.y == 280 || andrea.x == carroy && andrea.y == 260) {
            prdiste()
        }
        if (andrea.x == 340 && andrea.y == 20) {
            bananas1 = 0
        }
        if (andrea.x == 60 && andrea.y == 260) {
            bananas2 = 0
        }
        if (andrea.x == 60 && andrea.y == 260) {
            bananas2 = 0
        }
        if (andrea.x == 200 && andrea.y == 20) {
            botetlla1 = 0
        }
        if (andrea.x == 200 && andrea.y == 260) {
            botetlla2 = 0
        }


    helado.drawImage(fondo.imagen, 0, 0);
// carretera arriba 
    helado.drawImage(cc.imagen,0,60,100,100 );
    helado.drawImage(cc.imagen,100,60,100,100 );
    helado.drawImage(cc.imagen,200,60,100,100 );
    helado.drawImage(cc.imagen,300,60,100,100 );
    helado.drawImage(cc.imagen,400,60,100,100 );
// carretera abajo 
    helado.drawImage(cc.imagen,0,240,100,100 );
    helado.drawImage(cc.imagen,100,240,100,100 );
    helado.drawImage(cc.imagen,200,240,100,100 );
    helado.drawImage(cc.imagen,300,240,100,100 );
    helado.drawImage(cc.imagen,400,240,100,100 );
    //dibuha basura
 
    if (bananas1 == 1) {
        helado.drawImage(banana,350 ,70,30,30 );
    }
    else if(bananas1 == 0){
        helado.drawImage(banana,480 ,5,20,20 );     
    }else{ }
 
    if (bananas2 == 1) {
        helado.drawImage(banana,60 ,300,30,30 );
    }
    else if(bananas2 == 0) {
        helado.drawImage(banana,460 ,5,20,20 );     
    }else{    }
 
    if (botetlla1 == 1) {
        helado.drawImage(bote,200 ,70,30,30 );
    }
    else if(botetlla1 == 0){
        helado.drawImage(bote,420 ,5,20,20 );     
    }else{ }
 
    if (botetlla2 == 1) {
        helado.drawImage(bote,200 ,300,30,30 );
    }
    else if(botetlla2 == 0){
        helado.drawImage(bote,400 ,5,20,20 );     
    }else{ }

 
    //dibuja carros mociendoce
    helado.drawImage(carro ,carrox ,60,105,70 );
    helado.drawImage(carro2 ,carroy ,110,105,70 );
    helado.drawImage(carro3 ,carrox ,240,105,70 );
    helado.drawImage(carro4 ,carroy ,290,105,70 );

 //   helado.fillText("Texto en el Canvas",50,15);
     }

////todo nivel 3
    if (mundo == 1) {
        if (bananas1 == 4 && bananas2 == 4 && botetlla1 == 4 && botetlla2 == 4 &&  libb3 == 3 && libb4 == 3 && libb5 == 3 ) {
            alert("haz ganado tines el potencial de salvar el mundo")
            location.reload();
        }

     if(fondo.imagenOK)
        if (andrea.x == carrox && andrea.y == 40 || andrea.x == carrox && andrea.y == 20) {
            prdiste()
        }
        if (andrea.x == carroy && andrea.y == 100 || andrea.x == carroy && andrea.y == 80) {
            prdiste()
        }
        if (andrea.x == carrox && andrea.y == 220 || andrea.x == carrox && andrea.y == 200) {
            prdiste()
        }
        if (andrea.x == carroy && andrea.y == 280 || andrea.x == carroy && andrea.y == 260) {
            prdiste()
        }
        if (andrea.x == 340 && andrea.y == 20) {
            bananas1 = 0
        }
        if (andrea.x == 60 && andrea.y == 260) {
            bananas2 = 0
        }
        if (andrea.x == 60 && andrea.y == 260) {
            bananas2 = 0
        }
        if (andrea.x == 200 && andrea.y == 20) {
            botetlla1 = 0
        }
        if (andrea.x == 200 && andrea.y == 260) {
            botetlla2 = 0
        }
        if (andrea.x == 200 && andrea.y == 0 || andrea.x == 220 && andrea.y == 0) {
            if (libb5 == 3) {

            }else{
                libb5 =0;                
            }
        }
        if (andrea.x == 200 && andrea.y == 160 || andrea.x == 220 && andrea.y == 160) {
            if (libb4 == 3) {

            }else{
                libb4 =0;                
            }
        }
        if (andrea.x == 200 && andrea.y == 340 || andrea.x == 220 && andrea.y == 340) {
            if (libb3 == 3) {

            }else{
                libb3 =0;                
            }

        }
        if (andrea.x == 460 && andrea.y == 440 || andrea.x == 440 && andrea.y == 440 || andrea.x == 440 && andrea.y == 440 || andrea.x == 460 && andrea.y == 400|| andrea.x == 440 && andrea.y == 400|| andrea.x == 460 && andrea.y == 400) {
              if (botetlla2 == 0) {
                botetlla2 = 4            }
            if (botetlla1 == 0) {
                botetlla1 = 4            }
            if (bananas2 == 0) {
                bananas2 = 4            } 
            if (bananas1 == 0) {
                bananas1 = 4            }
            if (libb3 == 0 || libb4 == 0 || libb5 == 0 ) {
               prdiste()
            }
        }; 
        if (andrea.x == 0 && andrea.y == 440 || andrea.x == 20 && andrea.y == 440 || andrea.x == 40 && andrea.y == 440 || andrea.x == 0 && andrea.y == 400|| andrea.x == 20 && andrea.y == 400|| andrea.x == 40 && andrea.y == 400) {
            if (libb3 == 0) {
                libb3 = 3            }
            if (libb4 == 0) {
                libb4 = 3            }
            if (libb5 == 0) {
                libb5 = 3            } 
            if (libb3 == 0) {
                libb3 = 3            }
            if (bananas1 == 0 || bananas2 == 0 || botetlla1 == 0 || botetlla2 == 0) {
               prdiste()
            }



        }


    helado.drawImage(fondo.imagen, 0, 0);
// carretera arriba 
    helado.drawImage(cc.imagen,0,60,100,100 );
    helado.drawImage(cc.imagen,100,60,100,100 );
    helado.drawImage(cc.imagen,200,60,100,100 );
    helado.drawImage(cc.imagen,300,60,100,100 );
    helado.drawImage(cc.imagen,400,60,100,100 );
// carretera abajo 
    helado.drawImage(cc.imagen,0,240,100,100 );
    helado.drawImage(cc.imagen,100,240,100,100 );
    helado.drawImage(cc.imagen,200,240,100,100 );
    helado.drawImage(cc.imagen,300,240,100,100 );
    helado.drawImage(cc.imagen,400,240,100,100 );
   //caneca
    helado.drawImage(libroteca,0 ,400,70,100 );
    //dibuha basura
 
    if (bananas1 == 1) {
        helado.drawImage(banana,350 ,70,30,30 );
    }
    else if(bananas1 == 0){
        helado.drawImage(banana,480 ,5,20,20 );     
    }else{ }
 
    if (bananas2 == 1) {
        helado.drawImage(banana,60 ,300,30,30 );
    }
    else if(bananas2 == 0) {
        helado.drawImage(banana,460 ,5,20,20 );     
    }else{    }
 
    if (botetlla1 == 1) {
        helado.drawImage(bote,200 ,70,30,30 );
    }
    else if(botetlla1 == 0){
        helado.drawImage(bote,420 ,5,20,20 );     
    }else{ }
 
    if (botetlla2 == 1) {
        helado.drawImage(bote,200 ,300,30,30 );
    }
    else if(botetlla2 == 0){
        helado.drawImage(bote,400 ,5,20,20 );     
    }else{ }



    if (libb5 == 1) {
        helado.drawImage(libro,200,20,50,30 );
    } else if(libb5 == 0){
        helado.drawImage(libro,2,2,30,20 );
    }else{}
 
    if (libb4 == 1) {
        helado.drawImage(libro,200,200,50,30 );
    } else if(libb4 == 0){
        helado.drawImage(libro,35,2,30,20 );
    }else{}

    if (libb3 == 1) {
        helado.drawImage(libro,200,400,50,30 );
    } else if(libb3 == 0){
        helado.drawImage(libro,65,2,30,20 );
    }else{}

    //dibuja carros mociendoce
    helado.drawImage(carro ,carrox ,60,105,70 );
    helado.drawImage(carro2 ,carroy ,110,105,70 );
    helado.drawImage(carro3 ,carrox ,240,105,70 );
    helado.drawImage(carro4 ,carroy ,290,105,70 );
    helado.drawImage(canecaaaa,460 ,460 , 70,70);
     }


//TODO LO DEL NIVEL 2
     else if(mundo == 2){
        if (progresss == 0) {
            prdiste();
        }



        var ss = document.getElementById('progress').style.display = "block";
        helado.drawImage(fondo4, 0, 0);  

            if (librobolando == 3) {
                helado.drawImage(libro,0,libroy,50,30 );
            }else{}
            if (librobolando1 == 3) {
                helado.drawImage(libro,300,libroy1,50,30 );
            }else{}
            if (librobolando2 == 3) {
                helado.drawImage(libro,400,libroy2,50,30 );
            }else{}
            if (librobolando3 == 3) {
                helado.drawImage(libro,200,libroy3,50,30 );
            }else{}

        teclas.UP = 0
        teclas.DOWN = 0
            if (mundo33 == true) {
                andrea.x = 240
                andrea.y = 440
                mundo33 = false
                mala.x= 501
                mala.y=501  
                };

     var sss = document.getElementById("progress").value = progresss;
    };



    
     

    //dibuja  vidas corazon

    if (vida == 3) {
    helado.drawImage(coco,160,460,30,30 );
    helado.drawImage(coco,140,460,30,30 ); 
    helado.drawImage(coco,120,460,30,30 );  
    }else if (vida == 2) {
    helado.drawImage(coco,160,460,30,30 );
    helado.drawImage(coco,140,460,30,30 ); 
    }else if (vida == 1) {
    helado.drawImage(coco,140,460,30,30 ); 
    };
    var andreaDibujo = andrea.frente;
    if (andrea.freOK && andrea.atrOK && andrea.derOK && andrea.izOK) 
        {
            if (direccion == teclas.UP)
            {
            andreaDibujo = andrea.atrass;
            }
            if (direccion == teclas.DOWN)
            {
                andreaDibujo = andrea.frente;
            }
            if (direccion == teclas.RIGTH)
            {
                andreaDibujo = andrea.der;
            }
            if (direccion == teclas.LEFT)
            {
                andreaDibujo = andrea.izq;
            }
        }
        helado.drawImage(andreaDibujo, andrea.x, andrea.y);     
if(mala.malaOK) 
    {
    helado.drawImage(mala.malas, mala.x, mala.y, 70,70);
    }
}     
 
var dd =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};


/// aumento del%


//cambio de mundo
function mundo2(){
    teclas.UP = 0
    teclas.DOWN = 0 
    mundo = 2
}
function mundo3(){
    bananas1 = 1
    bananas2 = 1
    botetlla1 = 1
    botetlla2 = 1
    teclas.UP = 38
    teclas.DOWN = 40 
    var ss = document.getElementById('progress').style.display = "none";
    mundo = 1

}
//hace que los carros se muevanani
        function anim() {
        if (carrox == -40 ) {
            carrox =500;
            anim()
        }else{
            carrox -= 4;
            setTimeout(anim, 25);
            dibujar()
        }
        }
 
 
        function anim2() {
        if (carroy == 500 ) {
            carroy =0;
            anim2()
        }else{
            carroy += 4;
            setTimeout(anim2, 25);
            dibujar()
        }
    }

        function anim3() {
        if (mundo == 2) {
        if (libroy == 500) {
            libroy = 0;
             progresss = progresss-1
            anim3()
        }else if (andrea.x == 0 && andrea.y <= libroy+20 || andrea.x == 20 && andrea.y <= libroy+20 ) {
            progresss+=1
            librobolando = 2
            libroy == 0
            cambio3()
        }else{
            if (progresss == 10) {
             mundo3()
            }else{
            libroy += 4;
            setTimeout(anim3, 20 );
            dibujar()
        }
        }
        }else if(mundo == 1){
            setTimeout(anim3, 100000000);            
        }else {
            setTimeout(anim3, 100);
        }
        }

        function anim4() {
        if (mundo == 2) {
        if (libroy1 == 500) {
            libroy1 = 0;
            progresss = progresss-1
            anim4()
        }else if (andrea.x == 300 && andrea.y <= libroy1+20 || andrea.x == 320 && andrea.y <= libroy1+20 ) {
             progresss+=1
            librobolando1 = 2
            libroy1 == 0
            cambio4()

        }else{
            if (progresss == 10) {
                mundo3()
            }else{
            libroy1 += 4;
            setTimeout(anim4, 20);
            dibujar()}
        }}else if(mundo == 1){
            setTimeout(anim4, 100000000);            
        }else {
            setTimeout(anim4, 100);
        }
        }
        function anim5() {
        if (mundo == 2) {
        if (libroy2 == 500 ) {
            libroy2 = 0;
             progresss = progresss-1
            anim5()
        }else if (andrea.x == 400 && andrea.y <= libroy2+20 || andrea.x == 420 && andrea.y <= libroy2+20 ) {
             progresss+=1
            librobolando2 = 2
            libroy2 == 0
            cambio5()
        }
        else{
            if (progresss == 10) {
                mundo3()
            }else{
            libroy2 += 4;
            setTimeout(anim5, 22);
            dibujar()}
        }
        }else if(mundo == 1){
            setTimeout(anim5, 100000000);            
        }else {
            setTimeout(anim5, 100);
        }}
        function anim6() {
        if (mundo == 2) {
        if (libroy3 == 500) {
            libroy3 = 0;
            progresss = progresss-1
            anim6()
        }else if (andrea.x == 200 && andrea.y <= libroy3+20 || andrea.x == 220 && andrea.y <= libroy3+20 ) {
             progresss+=1  
            librobolando3 = 2
            libroy3 == 3
            cambio6()
        }
        else{
            if (progresss == 10) {
                mundo3()
            }else{
            libroy3 += 4;
            setTimeout(anim6, 18);
            dibujar()
        }
        }
        }else if(mundo == 1){
            setTimeout(anim6, 100000000);            
        }else {
            setTimeout(anim6, 100);
        }}
        function cambio3() {
            if (mundo == 2) {
        if (librobolando == 2 ) {
            librobolando = 3;
            libroy = 0
            anim3()
        }}}
        function cambio4() {
        if (mundo == 2) {
        if (librobolando1 == 2 ) {
            librobolando1 = 3;
            libroy1 = 0
            anim4()
        }}}
        function cambio5() {
        if (mundo == 2) {
        if (librobolando2 == 2 ) {
            librobolando2 = 3;
            libroy2 = 0
            anim5()
        }}}
        function cambio6() {
            if (mundo == 2) {
        if (librobolando3 == 2 ) {
            librobolando3 = 3;
            libroy3 = 0
            anim6()
        }}}


        // lorna 