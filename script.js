function exportToPDF() {
    var table = document.querySelector('#cv');
    html2pdf(table, {
        margin: -2,
        filename: 'NguyenHaBaoKhang_CV',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
    }).then(function (canvas) {
        // Use jsPDF to save the canvas as a PDF
        var pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 210, 297);
        pdf.save('NguyenHaBaoKhang_CV.pdf');
    });
}