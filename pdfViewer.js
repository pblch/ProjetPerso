// pdfviewer.js

// Emplacement du fichier PDF (changez-le selon votre structure de répertoire)
const pdfUrl = 'chemin/vers/votre-fichier.pdf';

// Fonction pour initialiser le lecteur PDF
function initPDFViewer() {
    pdfjsLib.getDocument(pdfUrl).then(pdf => {
        // Vous pouvez ajouter d'autres logiques ici, par exemple pour afficher une page spécifique.
        pdf.getPage(1).then(page => {
            const canvas = document.getElementById('pdfCanvas');
            const context = canvas.getContext('2d');

            const viewport = page.getViewport({ scale: 1.5 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext);
        });
    });
}

// Appel de la fonction d'initialisation
initPDFViewer();
