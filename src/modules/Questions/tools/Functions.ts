export function getText(text: string): void {
    let i: number = 0;
    const speed: number = 30; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("text-holder").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}