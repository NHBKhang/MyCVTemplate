async function exportToPDF() {
    if (confirm("Bạn có muốn in CV không?")){
        var table = document.querySelector('#cv');
        await table.classList.remove('fadeInDown');
        await table.classList.add('default');
        html2pdf(table, {
            margin: -2,
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
}

window.onscroll = function () {
    let r = document.getElementById("return")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        r.style.display = "block";
    } else {
        r.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}