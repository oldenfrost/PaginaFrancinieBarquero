const misObras=document.querySelector("#mis-obras");
const imagen=document.querySelector(".card-img-top");
const titulo=document.querySelector(".card-title");
const descripcion=document.querySelector(".card-text");
const boton = document.querySelector("#musica");
const estiloModal = document.querySelector(".modal");
const modalcontent = document.querySelector(".modal-content");



const images = document.querySelectorAll(".myImg");
const modal = document.getElementById('popUp');

const miAudio=document.querySelector("#miAudio");

miAudio.volume = 0.1;








const templateObras = document.querySelector(
    "#template"
).content;

const arrayObras = [];


class Obra {

    constructor(imagen,  descripcion) {
        
        this.imagen = imagen;

        this.descripcion = descripcion;

    };


    pintarObras() {

        const clone = templateObras.cloneNode(true);

     
        const cardImg = clone.querySelector(".myImg");
       
        cardImg.src = this.imagen;
        cardImg.alt = this.descripcion;
        cardImg.dataset.imgSrc = this.imagen;

        clone.querySelector(".card-text").textContent = this.descripcion;
        cardImg.onclick = function() {
     
            let imgSrc = this.dataset.imgSrc;
           let imgAlt = this.alt;
        
           if(imgSrc==="../assets/imagenes/2.jpg" || imgSrc==="../assets/imagenes/3.jpg" || imgSrc==="../assets/imagenes/8.jpg" || imgSrc==="../assets/imagenes/9.jpg" || imgSrc==="../assets/imagenes/12.jpg" ){
          
            estiloModal.style.paddingTop="100px";
           
            }else{
            estiloModal.style.paddingTop="10px";
            }

           
            if((imgSrc==="../assets/imagenes/2.jpg" || imgSrc==="../assets/imagenes/3.jpg" || imgSrc==="../assets/imagenes/8.jpg" || imgSrc==="../assets/imagenes/9.jpg" || imgSrc==="../assets/imagenes/12.jpg") && window.innerWidth>=1024  ){
          
                modalcontent.style.maxWidth = "50vw";
               
            }else{
                modalcontent.style.maxWidth = "30vw";
            }



            if( window.innerWidth<1024 ){
                modalcontent.style.maxWidth = "400px";
            }
          
         
               
       

     
 
          
            let modalImg = document.getElementById("img01");
           let captionText = document.getElementById("caption");

            modal.style.display = "block";
            modalImg.src = imgSrc;
            captionText.innerHTML = imgAlt;
        };

        const span = document.getElementsByClassName("close")[0];

        span.onclick = function() { 
        modal.style.display = "none";
        }


        

        
        return clone;

    }

    static agregarObrasPintadas(obras){
        const fragment = document.createDocumentFragment();
        obras.forEach((item) => {
            fragment.appendChild(item.pintarObras());
            
        });
        misObras.appendChild(fragment);
    }

}


boton.addEventListener("click", function() {
    if(boton.classList.contains("play")){
        boton.classList.remove("play");
        boton.classList.add("stop");
        miAudio.play();
      
    }else{
        boton.classList.remove("stop");
        this.classList.add("play");
        miAudio.pause();
    }
});







const obra1=new Obra("../assets/imagenes/1.jpg","Técnica Oleo");
arrayObras.push(obra1);


const obra2=new Obra("../assets/imagenes/2.jpg","Técnico lápiz de color ");
arrayObras.push(obra2);

const obra3=new Obra("../assets/imagenes/3.jpg","Técnico lápiz de color ");
arrayObras.push(obra3);

const obra4=new Obra("../assets/imagenes/4.jpeg","Técnico lápiz de color ");
arrayObras.push(obra4);

const obra5=new Obra("../assets/imagenes/5.jpg","Técnico lápiz de dibujo ");
arrayObras.push(obra5);


const obra6=new Obra("../assets/imagenes/6.jpg","lapiz de dibujo");
arrayObras.push(obra6);

const obra7=new Obra("../assets/imagenes/7.jpg","descripcion3");
arrayObras.push(obra7);

const obra8=new Obra("../assets/imagenes/8.jpg","Técnico lápiz de color");
arrayObras.push(obra8);

const obra9=new Obra("../assets/imagenes/9.jpg","Técnico Mural");
arrayObras.push(obra9);

const obra10=new Obra("../assets/imagenes/10.jpeg","Técnica Oleo");
arrayObras.push(obra10);

const obra11=new Obra("../assets/imagenes/11.jpg","Técnica Acrílico");
arrayObras.push(obra11);

const obra12=new Obra("../assets/imagenes/12.jpg","Técnica lápiz de color");
arrayObras.push(obra12);








Obra.agregarObrasPintadas(arrayObras);


var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('youtube-audio', {
        height: '0', // Establece la altura en 0 para ocultar el reproductor de video
        width: '0',  // Establece el ancho en 0 para ocultar el reproductor de video
        videoId: 'v=DuVUZqdIQoE', // Reemplaza con tu ID de video de YouTube
        playerVars: {
          autoplay: 1, // Reproducir automáticamente el audio
          controls: 0, // Ocultar los controles del reproductor de video
          showinfo: 0, // Ocultar información del video
          loop: 1, // Repetir el audio si es necesario
          mute: 0 // No silenciar el audio
        },
        events: {
          'onReady': function(event) {
            event.target.playVideo(); // Comienza la reproducción del audio
          }
        }
      });
    }
