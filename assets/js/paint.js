function configureListeners() {
    let images = document.querySelectorAll('img'); 


     for (var i = 0; i < images.length; i++) {        
        images[i].addEventListener('mouseover', addOpacity);
        images[i].addEventListener('mouseout', removeOpacity);     
    } 
}

function addOpacity(event) {
    event.target.classList.add('dim');
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    event.target.classList.remove('dim');
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
            price = 14.99
            colorName = 'Green';      
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = 11.14
            colorName = 'Brown';
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = 22.99
            colorName = 'Blue';
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = 4.99
            colorName = 'Black';
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = 8.22
            colorName = 'Cyan';
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = 11.99
            colorName = 'Purple';
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = 13.42
            colorName = 'Red';
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = 21.98
            colorName = 'White';
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = 14.99
            colorName = 'Yellow';
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:  
          console.log('Invalid paint color selected');
          return;            
    }
    
    updatePrice(colorName, price)

    }


    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = 'Price: $' + price;
   
        
        let color = document.getElementById('color-name');
        color.textContent = 'Color Name: ' + colorName;
  
    }
    

