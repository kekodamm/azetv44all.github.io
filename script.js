document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'azetv44 sxrgu klasör.zip'; // kendi dosyanın adını buraya koy
    link.download = 'dosyan.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
