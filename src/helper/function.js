const shorten=(title) =>{
    const newTitle = title.split(" ")
    const mytitle = `${newTitle[0]} ${newTitle[1]}`
    return mytitle
}
const isinCard =(state , id)=>{
    const resault = !!state.selectedItems.find(item => item.id ===id)
    return resault
}
const quantityCounter = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}
export{shorten , quantityCounter , isinCard}