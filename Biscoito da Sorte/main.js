        const screen1 = document.querySelector(".screen1");
        const screen2 = document.querySelector(".screen2");
        const cookie1 = document.getElementById("cookie1");
        let mensag = [
            "Acredite em você mesmo e tudo será possível.",
            "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
            "Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.",
            "A persistência é o caminho do êxito.",
            "O que você planta hoje, colhe amanhã.",
            "Nenhum obstáculo é tão grande se sua vontade de vencer for maior.",
            "A cada novo dia, uma nova oportunidade de ser feliz.",
            "Acredite em suas ideias e lute por seus sonhos, pois só assim eles se tornarão realidade.",
            "Nada é fácil, mas tudo é possível para quem tem determinação.",
            "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
            "A vida é uma jornada, não um destino.",
            "Seja a mudança que você deseja ver no mundo.",
            "O sucesso está além do medo.",
            "Boas coisas estão por vir.",
        ]
        const msg = document.getElementById("msg")
        const btnAgain = document.getElementById("btnAgain")
        
        cookie1.addEventListener('click', function() {
            toggleScreen();
        });
        
        btnAgain.addEventListener('click',function(){
            toggleScreen();

        });
        
        function toggleScreen() {
            screen1.classList.toggle("hide")
            screen2.classList.toggle("hide")
            let frasesAlet = mensag[Math.floor(Math.random() *mensag.length)]
            msg.textContent = frasesAlet
        }
    
        function TrocarMsg (){
            
            let frasesAlet = mensag[Math.floor(Math.random() *mensag.length)]
            msg.textContent = frasesAlet
        }