document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/kekoadamm.github.io/azetv44all/main/azetv44 sxrgu klasör.rar.rar';
    link.download = 'dosyan.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
