document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'azetv44 sxrgu klasör.rar'; // kendi dosyanın adını buraya koy
    link.download = 'azetv44 sxrgu klasör.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


