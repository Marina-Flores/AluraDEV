// Criando o input search // 

function mostrarInputPesquisa(){  

    var pesquisa = document.querySelector(".campo__busca");
    if(!pesquisa.classList.contains('display')){
        pesquisa.classList.add("display")        
    } else {
        pesquisa.classList.remove("display")        
    }    
}

var button = document.querySelector(".icone-pesquisar"); 
button.addEventListener("click", mostrarInputPesquisa);

// Criando o menu lateral //

function abrirMenu() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function fecharMenu() {
    document.getElementById("mySidenav").style.width = "0";
  }

var menu = document.querySelector(".icone-menu");
menu.addEventListener("click", abrirMenu);