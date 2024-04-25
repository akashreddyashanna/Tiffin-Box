document.addEventListener('DOMContentLoaded', function() {
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  const minusBtns = document.querySelectorAll('.minus');
  const plusBtns = document.querySelectorAll('.plus');
  const quantityDisplays = document.querySelectorAll('.quantity');
  const totalSelectedItemSpan = document.getElementById('total-selected-items');
  const totalPriceSpan = document.getElementById('total-price');

  // Array to store selected items as objects
  let selectedItems = [];

  // Prices for each item (replace with actual prices for your items)
  const prices = {
    "Paneer Paratha": 180,
    "Chana Masala": 190,
    "Channa Pav": 200,
    "Kachorii": 170,
    "Paneer Bhurji": 250,
    "Samosa Chaat": 280,
    "Uttapam": 310,
    "Aloo Posto":210,
    "Dhokar Dalna":250,
    "Adai": 280,
    "Appam with Stew": 380,
    "Rava Idli": 230,
    "Masala Dosa": 280,
    "Medu Vada": 200,
    "Pongal": 220,
    "Upma": 200,
    "Dosa": 240,
    "Idli Sambar": 220,
    "Paneer Tikka": 450,
    "Aloo Tikki": 350,
    "Papdi Chaat": 280,
    "Hara Bhara Kabab": 380,
    "Dahi Vada": 280,
    "Masala Vada": 230,
    "Chicken Tikka": 600,
    "Amritsari Fish Fry": 650,
    "Duck Roast": 700,
    "Kheema Pav": 450,
    "Sarson da Saag": 350,
    "Paneer Masala": 400,
    "Bisi Bele Bath": 350,
    "Undhiyu": 400,
    "Pongal": 300,
    "Baingan Bharta": 380,
    "Avial": 350,
    "Dal Baati Churma": 450,
    "Hyderabadi Biryani": 550,
    "Goan Fish Curry": 500,
    "Fish Curry": 480,
    "Chicken Curry": 500,
    "Chicken Korma": 550,
    "Butter Chicken": 600,
    "Duck Curry": 700,
    "Chettinad Chicken": 550,
    "Gujarati Undhiyu": 400,
    "Dal Tadka": 250,
    "Bharli Vangi": 280,
    "Gatte ki Sabzi": 300,
    "Dal Kachori": 250,
    "Coconut Chutney": 180,
    "Hyderabadi Bagara": 280,
    "Prawn Balchão": 500,
    "Kosha Mangsho": 550,
    "Parsi Sali Boti": 600,
    "Laal Maas": 550,
    "Royyala Iguru": 500,
    "Pork Shoots": 600,
    "Naan": 80,
    "Roti/Chapati": 60,
    "Paratha": 80,
    "Puri": 80,
    "Tandoori Roti": 90,
    "Missi Roti": 80,
    "Rumali Roti": 100,
    "Kulcha": 90,
    "Chitranna": 250,
    "Khichdi": 220,
    "Pulao": 250,
    "Tamarind Rice": 230,
    "Tomato Rice": 230,
    "Coconut Rice": 230,
    "Jeera Rice": 180,
    "Rasgulla": 40,
    "Jalebi": 50,
    "Mysore Pak": 60,
    "Rosogolla": 40,
    "Gulab Jamun": 50,
    "Peda": 60,
    "Ladoo": 40,
    "Sandesh": 60,
    "Halwa": 50,
    "Kaju Katli": 80,
    "Barfi": 60,
    "Pootharekulu": 80,
    "Rasmalai": 60,
    "Ghevar": 80,
    "Kalakand": 60,
    "Balushahi": 50,
    "Khaja": 50,
    "Rava Ladoo": 60,
    "Lassi": 80,
    "Chai (Masala Tea)": 40,
    "Buttermilk (Chaas)": 60,
    "Jal-jeera": 70,
    "Solkadhi": 70,
    "Thandai": 80,
    "Aam Panna": 70,
    "Bel Sharbat": 80,
    "Coconut Water": 50,
    "Neer Mor": 50,
    "Bael Sharbat": 80,
    "Chaang": 100,
    "Kokum Sherbet": 70,
    "Badam Milk": 80,
    "Falooda": 100,
    "Ragi Malt": 70,
    "Bhang Thandai": 100,
    "Barley Water": 70,
    "Rose Milk": 80,
    "Sharbat-e-Sandal": 70,
    "Badam Shake": 80
  };

  // Add to cart functionality
  addToCartBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      const itemName = document.querySelectorAll('.item-name')[index].textContent;
      const quantity = parseInt(quantityDisplays[index].textContent);

      // Calculate total item price based on current quantity and price from prices object
      const itemPrice = prices[itemName] * quantity;

      // Check if item already exists in selectedItems array
      const existingItemIndex = selectedItems.findIndex(item => item.name === itemName);

      if (existingItemIndex !== -1) {
        // Update quantity and price for existing item
        selectedItems[existingItemIndex].quantity += quantity;
        selectedItems[existingItemIndex].price += itemPrice;
      } else {
        // Add new item with quantity and price
        selectedItems.push({ name: itemName, quantity: quantity, price: itemPrice });
      }

      // Reset the quantity display to 0
      quantityDisplays[index].textContent = 0;

      // Update total selected items display
      updateTotalSelectedItemsDisplay();

      // Display informative message
      updateTotalPriceDisplay();
      alert(`"${quantity} ${itemName}" added to cart!`);

    });
  });

  // Increment quantity
  plusBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      let quantity = parseInt(quantityDisplays[index].textContent);
      quantity++;
      quantityDisplays[index].textContent = quantity;

      // Update total selected items and individual item quantity
      const itemName = document.querySelectorAll('.item-name')[index].textContent;
      updateSelectedItemsQuantity(itemName, quantity);
      updateTotalSelectedItemsDisplay();
      updateTotalPriceDisplay();
    });
  });

  // Decrement quantity
  minusBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      let quantity = parseInt(quantityDisplays[index].textContent);
      if (quantity > 0) { // Early return for quantity is 0
        quantity--;
        quantityDisplays[index].textContent = quantity;

        // Update total selected items and individual item quantity
        const itemName = document.querySelectorAll('.item-name')[index].textContent;
        updateSelectedItemsQuantity(itemName, quantity);
        updateTotalSelectedItemsDisplay();
        updateTotalPriceDisplay();
      }
    });
  });

  function updateSelectedItemsQuantity(itemName, newQuantity) {
    const existingItemIndex = selectedItems.findIndex(item => item.name === itemName);
    if (existingItemIndex !== -1) {
      selectedItems[existingItemIndex].quantity = newQuantity;

      // Remove item if quantity reaches 0
      if (newQuantity === 0) {
        selectedItems.splice(existingItemIndex, 1);
      }
    }
  }

  function updateTotalSelectedItemsDisplay() {
    let totalSelectedItemsText = "";
    if (selectedItems.length === 0) {
      totalSelectedItemsText = "No items selected";
    } else {
      totalSelectedItemsText = selectedItems.map(item => `${item.quantity} ${item.name} (₹${item.price})`).join(', ');
    }
    totalSelectedItemSpan.textContent = totalSelectedItemsText;
  }

  function updateTotalPriceDisplay() {
    const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);
    totalPriceSpan.textContent = `Total Price: ₹${totalPrice}`;
  }
});

function DisplayPrice(){
    document.getElementById("order-items").style.display="none";
    document.getElementById("Outputfinalprice").style.display="flex";
    document.getElementById("Outputfinalprice").style.marginBottom="30vh";

}
