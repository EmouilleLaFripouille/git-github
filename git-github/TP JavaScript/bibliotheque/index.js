// <section class="Contenu">
    //     <h2>Titre du livre : </h2>
    //     <h3>Auteur du livre : </h3>
    //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod fugiat iusto itaque quae veniam odio ratione, officia suscipit perferendis sunt eaque quibusdam dolor numquam nulla non! Consequuntur, odit tempora!
    //     </p>
    //     <h4>Disponible ?</h4>
    // </section>

    function creerlivre(titre, auteur){
        let dispo = "Indisponible";
        if( document.querySelector("#etat").checked){
            dispo = "Disponible";
        }
        document.querySelector(`#resultat`).innerHTML += `
        <div class="Contenu">
        <h2> ${titre.toUpperCase()} </h2> 
        <h3> ${auteur.toUpperCase()} </h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod fugiat iusto itaque quae veniam odio ratione, officia suscipit perferendis sunt eaque quibusdam dolor numquam nulla non! Consequuntur, odit tempora!
        </p>
        <h4>${dispo}</h4>
        </div>
        `;
    }

    document.forms.formulaire.addEventListener(
        `submit`,
        function(event){
            event.preventDefault();
            creerlivre(
                this.titre.value,
                this.auteur.value,
            );
        }   
    );



    