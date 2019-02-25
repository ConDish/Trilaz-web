document.addEventListener('DOMContentLoaded', () => {

    const linkElement = document.getElementsByTagName("a")




    if(linkElement){
        let elemento = [...linkElement]
        
        elemento.map((r) => {

            if(r.pathname == location.pathname){
                
                if(r.parentElement.tagName == "LI"){

                    return r.parentElement.classList.add("active")
                }
            }

        })
    }

})