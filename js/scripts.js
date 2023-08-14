window.addEventListener("load", htmlModifier);

function htmlModifier() {
    const body = document.querySelector("body");
    const removeH1 = document.querySelector("h1");
    removeH1.remove();

    const h1Element = document.createElement("h1");
    h1Element.append("Webpage Recreation Practice");

    const pFirst = document.createElement("p");
    pFirst.append("The HTML of this webpage was created with JavaScript.");

    const img = document.createElement("img");
    img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
    img.setAttribute("style", "width:50%");
    
    const ul = document.createElement("ul");
    const liOne = document.createElement("li");
    const liTwo = document.createElement("li");
    liOne.append("It is endemic to the mountains of Colombia.");
    liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

    const h1ElementTwo = document.createElement("h1");
    h1ElementTwo.append("Facts about the Multicolored Tanager");

    const h2Element = document.createElement("h2");
    const aTag = document.createElement("a");
    aTag.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager")
    

    body.prepend(h1Element);
    h1Element.after(pFirst);
    pFirst.after(img);
    img.after(h1ElementTwo);
    h1ElementTwo.after(ul);
    ul.append(liOne);
    liOne.after(liTwo);
    h2Element.append("Source");
    ul.after(h2Element);
    aTag.append("Wikipedia");
    h2Element.after(aTag);
}