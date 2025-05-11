function downloadVideo() {
    const quality = document.getElementById('quality').value;
    const fileName = `sample-${quality}.mp4`;
    const link = document.createElement('a');
    link.href = `videos/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  