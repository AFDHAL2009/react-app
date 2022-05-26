function ShoppingList(){
    const plantList = [
       
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale: true,
        water:"",
        light:""
    },
    {
        name: 'monsteraficus lyrata',
        category: 'classique',
        id: '2ed',
        isBestSale: false,
        water:"",
        light:""
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3ed',
        isBestSale: true,
        water:"",
        light:""
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4ed',
        isBestSale: false,
        water:"",
        light:""
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5ed',
        isBestSale: false,
        water:"",
        light:""
    },

  ];
return <ul>
 {plantList.map((plant,index)=>(<li  key={plant.id}>
 {plant.isBestSale?<span>{plant.name}  🔥</span>:<span>{plant.name} 👎</span>}
     
     </li>))
 }
</ul>




}
export default ShoppingList;