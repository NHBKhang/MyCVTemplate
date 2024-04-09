function exportToPDF() {
    var table = document.querySelector('#cv');
    html2pdf(table, {
        margin: 0,
        filename: 'NguyenHaBaoKhang_CV',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).then(function (canvas) {
        // Use jsPDF to save the canvas as a PDF
        var pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 210, 297);
        pdf.save('NguyenHaBaoKhang_CV.pdf');
    });
}

function changeColor(className) {
    var container = document.getElementsByTagName("body")[0];
    container.classList.remove('red-bg', 'blue-bg', 'green-bg');
    container.classList.add(className);
}