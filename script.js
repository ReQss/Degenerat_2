var lista = [
    'https://www.youtube.com/embed/k1BneeJTDcU'
   
  
  ];
function podmiana(n){document.getElementById("animo").src=lista[n]}function przypinka(){lista_strona=document.getElementById("lista").style.display,"none"==lista_strona?document.getElementById("lista").style.display="block":document.getElementById("lista").style.display="none",stream=document.getElementById("streamokno").style.display}function screenmax(){var n=document.getElementById("streamokno");"90%"!=n.style.height?(n.style.height="90%",n.style.width="250px"):(n.style.height="100%",n.style.width="320px")}function ep(){document.getElementById("animo").src=lista[0]}function change1(){document.getElementById("info").innerHTML="Film 1"}function change11(){document.getElementById("info").innerHTML=""}function change2(){document.getElementById("info").innerHTML="Film 2"}function change22(){document.getElementById("info").innerHTML=""}function change3(){document.getElementById("info").innerHTML="Film 3"}function change33(){document.getElementById("info").innerHTML=""}function change4(){document.getElementById("info").innerHTML="Film 4"}function change44(){document.getElementById("info").innerHTML=""}function change5(){document.getElementById("info").innerHTML="Film 5"}function change55(){document.getElementById("info").innerHTML=""}function change6(){document.getElementById("info").innerHTML="Film 6"}function change66(){document.getElementById("info").innerHTML=""}function author(){document.getElementById("info").innerHTML="®"}function author2(){document.getElementById("info").innerHTML=""}function size(){document.getElementById("info").innerHTML="Rozmiar"}function size2(){document.getElementById("info").innerHTML=""}function options(){document.getElementById("info").innerHTML="Ustawienia "}function options2(){document.getElementById("info").innerHTML=""}
function flushed(){
    var  change = document.getElementById("info").innerHTML = " &#128563";
    console.log('x')
}
function flushed2(){
    var  change = document.getElementById("info").innerHTML = "";
  
}
