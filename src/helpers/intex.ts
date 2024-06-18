export function formatCurrency(quantity : number){
    return Intl.NumberFormat('en-Us', {
        style : 'currency', 
        currency: 'USD'
    }).format(quantity)
}