document.addEventListener("DOMContentLoaded", () => {
    const numberOfLeaves = 18; // Numero di foglioline
    const leafImage = "./foglia.png"; // Percorso immagine della foglia
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let leavesCreated = 0; // Conta le foglie create finora

    function createLeaf() {
        const leaf = document.createElement("img");
        leaf.src = leafImage;
        leaf.style.position = "absolute";
        leaf.style.width = "30px"; // Dimensione foglia
        leaf.style.top = "-50px"; // Inizia fuori dallo schermo
        leaf.style.left = Math.random() * (screenWidth * 0.8) + (screenWidth * 0.1) + "px"; // Posizione casuale orizzontale con margine
        document.body.appendChild(leaf);

        // Movimento zigzag alternato
        let x = parseFloat(leaf.style.left);
        let y = -50;
        const fallStep = 3; // Discesa ridotta a 1 pixel per passo
        const zigzagStep = 2; // Movimento costante di 3 pixel a destra/sinistra
        let direction = 1; // Inizia verso destra (1 per destra, -1 per sinistra)

        function animateLeaf() {
            y += fallStep; // Movimento verso il basso
            x += direction * zigzagStep; // Movimento alternato a destra/sinistra
            direction *= -1; // Inverte direzione per il prossimo movimento

            // Aggiorna posizione
            leaf.style.top = y + "px";
            leaf.style.left = x + "px";

            // Riavvia foglia se esce dallo schermo in basso
            if (y > screenHeight) {
                y = -50; // Torna in alto
                x = Math.random() * (screenWidth * 0.8) + (screenWidth * 0.1); // Nuova posizione casuale
                direction = 1; // Riparte verso destra
            }

            setTimeout(animateLeaf, 300); // Animazione lenta con intervalli di 100ms
        }

        animateLeaf();
    }

    function addLeavesSequentially() {
        if (leavesCreated < numberOfLeaves) {
            createLeaf();
            leavesCreated++;
            setTimeout(addLeavesSequentially, 3000); // Aggiunge una foglia ogni 2 secondi
        }
    }

    // Inizia ad aggiungere le foglie
    addLeavesSequentially();
});
