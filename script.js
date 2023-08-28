function scrollToElement(elementSelector, instance = 0){
    //selecione todos os elementos que correspondem ao seletor fornecido
    const elements = document.querySelectorAll(elementSelector);
    //se o elemento existir, role para ele
    if (elements.length > instance) { 
    //rolar para o elemento{
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
 }

 const link1 = document.getElementById('.link1');
 const link2 = document.getElementById('.link2');
 const link3 = document.getElementById('.link3');

 link1.addEventListener('click', () =>{
     scrollToElement('.header')
 });
