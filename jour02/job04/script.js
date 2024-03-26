const textarea = document.getElementById('keylogger');

document.addEventListener('keydown', function(event) {
    
    const keyPressed = event.key.toLowerCase();
    
   
    if (/^[a-z]$/.test(keyPressed)) {
       
        let repeatCount = 1;
        
        
        if (document.activeElement === textarea) {
            repeatCount = 1;
        }
        
       
        textarea.value += keyPressed.repeat(repeatCount).substring(0,2);
    }
});
