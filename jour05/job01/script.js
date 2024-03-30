document.getElementById("formulaire").addEventListener('submit', function(e){
    e.preventDefault();
    
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpassword = document.getElementById("confpassword").value;

    if(prenom.trim() === ''){
        document.querySelector(".erreur").innerHTML+='Placer un prenom<br>';
    }
    if(prenom.length < 2){
        document.querySelector(".prenom>span").innerHTML+='La taille de votre prénom est trop petit<br>';
    }
    if(nom.trim() === ''){
        document.querySelector(".erreur").innerHTML+='Placer un nom<br>';
    }
    if(nom.length <2){
        document.querySelector(".erreur").innerHTML+='La taille de votre nom est trop petit<br>'
    }
    if(email.trim() === ''){
        document.querySelector(".erreur").innerHTML+='Placer une adresse mail<br>';
    }
    if(password.trim() === ''){
        document.querySelector(".erreur").innerHTML+='veillez entrée votre mot de passe<br>';
    }
    if(confpassword !== password){
        document.querySelector(".erreur").innerHTML+='Le mot de passe ne correspond pas<br>';
    }
    var codemdp = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if(!codemdp.test(password)){
        document.querySelector(".confirm-mdp>span").innerHTML+='Assurez-vous que le mot de passe a au moins 8 caractères, contient une majuscule, une minuscule, un chiffre et un caractère spécial';
        document.querySelector(".mdp>span").innerHTML+='Assurez-vous que le mot de passe a au moins 8 caractères, contient une majuscule, une minuscule, un chiffre et un caractère spécial';
    }
    
    var codemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if(!codemail.test(email)){
        document.querySelector(".mail>span").innerHTML+='veuillez entrer un adresse mail valide'
    }
});