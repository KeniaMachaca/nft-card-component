export function createCard(item){
    const profileCard = document.createElement('div')
    profileCard.className = "nft-card"

    // PROFILE CARD TOP
    const profileCardTop = document.createElement('div')
    profileCardTop.className = "nft-card-top"

    profileCard.appendChild(profileCardTop)

    const imagen = document.createElement('img')
    imagen.src = item.img
    imagen.alt = "foto de perfil"
    profileCardTop.appendChild(imagen)

    // PROFILE CARD BOTTOM
    const profileCardBottom = document.createElement('div')
    profileCardBottom.className = "nft-card-bottom"

    profileCard.appendChild(profileCardBottom)

    const profileCardBottom_datos = document.createElement('div')
    profileCardBottom_datos.className = "nft-card-bottom_datos"

    profileCardBottom.appendChild(profileCardBottom_datos)

    const parrafo1 = document.createElement("p")
    parrafo1.className="parrafo1"
    parrafo1.textContent=item.parrafo1
    profileCardBottom_datos.append(parrafo1)

    const parrafo2 = document.createElement("p")
    parrafo2.className="parrafo2"
    parrafo2.textContent=item.parrafo2
    profileCardBottom_datos.append(parrafo2)

    const parrafo3 = document.createElement("p")
    parrafo3.className="parrafo3"
    parrafo3.textContent=item.parrafo3
    profileCardBottom_datos.append(parrafo3)

    //descripcion
    const profileCardBottom_descripcion = document.createElement('div')
    profileCardBottom_descripcion.className = "nft-card-bottom_descripcion"

    profileCardBottom.appendChild(profileCardBottom_descripcion)

    const profileCardBottom_descripcionhijo = document.createElement('div')
    profileCardBottom_descripcionhijo.className = "hijo"

    profileCardBottom_descripcion.appendChild(profileCardBottom_descripcionhijo)

    const eth = document.createElement('img')
    eth.src = item.eth
    eth.alt = "ethereum image"
    profileCardBottom_descripcionhijo.appendChild(eth)

    const ethletra = document.createElement('span')
    ethletra.textContent=item.ethletra
    profileCardBottom_descripcionhijo.appendChild(ethletra)

    const profileCardBottom_descripcionhijo2 = document.createElement('div')
    profileCardBottom_descripcionhijo2.className = "hijo2"

    profileCardBottom_descripcion.appendChild(profileCardBottom_descripcionhijo2)

    const clock = document.createElement('img')
    clock.src = item.clock
    clock.alt = "clock image"
    profileCardBottom_descripcionhijo2.appendChild(clock)

    const clockletra = document.createElement('span')
    clockletra.textContent=item.clockletra
    profileCardBottom_descripcionhijo2.appendChild(clockletra)

    // creacion

    const profileCardBottom__creacion = document.createElement('div')
    profileCardBottom__creacion.className = "nft-card-bottom__creacion"

    profileCardBottom.appendChild(profileCardBottom__creacion)

    const avatar = document.createElement('img')
    avatar.src = item.avatar
    avatar.alt = "avatar image"
    profileCardBottom__creacion.appendChild(avatar)    

    const creation = document.createElement('span')
    creation.className = "creacion"
    creation.textContent=item.creation
    profileCardBottom__creacion.appendChild(creation)

    const name = document.createElement('span')
    name.className = "name"
    name.textContent=item.name
    profileCardBottom__creacion.appendChild(name)















    const app = document.querySelector('#app')
    app.appendChild(profileCard)

    return profileCard
}