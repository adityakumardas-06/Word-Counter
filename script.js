document.getElementById('textInput').addEventListener('input', function() {
    var text = this.value.trim();
    var wordCount = text ? text.split(/\s+/).length : 0;
    document.getElementById('wordCount').textContent = wordCount;
});
