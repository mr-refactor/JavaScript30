document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let prevX = 0;
    let prevY = 0;
    let hue = 0
    let lineGrowing = true;

    setCanvasArea();
    setInitialContext();
    setCanvasEventListeners();

    function setCanvasArea() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
    }
    
    function setInitialContext(){
        ctx.strokeStyle = '#BADASS';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 0;
    }
    
    function setCanvasEventListeners(){
        canvas.addEventListener('mousedown', startDrawing)
        canvas.addEventListener('mouseup', stopDrawing)
        canvas.addEventListener('mousout', stopDrawing)
        canvas.addEventListener('mousemove', handleDraw);
    }

    
    function startDrawing(e) {
        isDrawing = true;
        setPosition(e);
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function handleDraw(e) {
        if(!isDrawing) return; //crash out if mouse is not clicked
        setStrokeStyle();
        draw(e);
        setUpForNextDraw(e)
    }

    function setStrokeStyle() {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    }

    function draw(e) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    function setUpForNextDraw(e) {
        setPosition(e)
        setHue()
        setLineWidth()
    }

    function setPosition(e) {
        [prevX, prevY] = [e.offsetX, e.offsetY];
    }

    function setHue() {
        hue++;
    }

    function setLineWidth() {
        if(ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
            lineGrowing = !lineGrowing
        }
        lineGrowing ? ctx.lineWidth++ : ctx.lineWidth--;
    }
})