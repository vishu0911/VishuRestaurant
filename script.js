// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Page Navigation
const pageLinks = document.querySelectorAll('a[data-page]');
const pageContents = document.querySelectorAll('.page-content');

pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        // Hide all pages
        pageContents.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        document.getElementById(targetPage).classList.add('active');
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        
        // Update active nav link
        pageLinks.forEach(link => link.style.fontWeight = 'normal');
        link.style.fontWeight = 'bold';
    });
});

// Product Data with image URLs
const products = [
    { 
        id: 1, 
        name: "Gulab Jamun", 
        category: "sweets", 
        price: "₹450/kg", 
        description: "Soft, spongy balls soaked in sugar syrup, made with khoya and pure ghee.", 
        icon: "fa-candy-cane",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/gulab-jamun-recipe-01-500x500.jpg"
    },
    { 
        id: 2, 
        name: "Kaju Katli", 
        category: "sweets", 
        price: "₹900/kg", 
        description: "Thin diamond-shaped cashew fudge with silver leaf garnish.", 
        icon: "fa-gem",
        image: "https://www.orderyourchoice.com/117062-large_default/kaju-katli-shree-mithai-.jpg"
    },
    { 
        id: 3, 
        name: "Rasgulla", 
        category: "sweets", 
        price: "₹400/kg", 
        description: "Soft cottage cheese balls in light sugar syrup, spongy and juicy.", 
        icon: "fa-circle",
        image: "https://www.ramasrey.com/wp-content/uploads/2018/08/Rasgulla.jpg"
    },
    { 
        id: 4, 
        name: "Peda", 
        category: "sweets", 
        price: "₹500/kg", 
        description: "Traditional milk fudge flavored with cardamom and saffron.", 
        icon: "fa-cloud",
        image: "https://bgnaidusweets.com/cdn/shop/products/Milk-Peda-online-bgnaidusweets.com.jpg?v=1673520878"
    },
    { 
        id: 5, 
        name: "Samosa", 
        category: "namkeen", 
        price: "₹30/piece", 
        description: "Crispy pastry filled with spiced potatoes and peas.", 
        icon: "fa-drumstick-bite",
        image: "https://www.samosa-recipe.com/wp-content/uploads/2019/01/aloo-samosa.jpg"
    },
    { 
        id: 6, 
        name: "Kachori", 
        category: "namkeen", 
        price: "₹25/piece", 
        description: "Flaky pastry filled with spicy lentil mixture, deep fried.", 
        icon: "fa-circle-notch",
        image: "https://www.foodiaq.com/wp-content/uploads/2024/02/Khasta-Kachori-scaled.jpg"
    },
    { 
        id: 7, 
        name: "Bhujia", 
        category: "namkeen", 
        price: "₹300/kg", 
        description: "Crispy gram flour noodles with traditional spices.", 
        icon: "fa-wheat-awn",
        image: "https://www.govindam.co.in/wp-content/uploads/2025/01/bikaneri-bhujia-1.webp"
    },
    { 
        id: 8, 
        name: "Mathri", 
        category: "namkeen", 
        price: "₹350/kg", 
        description: "Flaky, crispy biscuits made with flour and spices.", 
        icon: "fa-cookie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjlAVo2o5qO2GEUvBO1aSPM5i_3vYPJgPzA&s"
    },
    { 
        id: 9, 
        name: "Diwali Special Box", 
        category: "special", 
        price: "₹1200/box", 
        description: "Assorted festive sweets for Diwali celebrations.", 
        icon: "fa-gift",
        image: "https://as1.ftcdn.net/jpg/14/35/00/66/1000_F_1435006638_rTRkqrT8hUpezbmXd6AIE11k3jk40ZCS.jpg"
    },
    { 
        id: 10, 
        name: "Fruit Platter", 
        category: "special", 
        price: "₹650/plate", 
        description: "Fresh seasonal fruits beautifully arranged for parties.", 
        icon: "fa-apple-alt",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNUP7gN_s_rgGOZnrtTmQ4Ol86SuVCA2A5Q&s"
    },
    { 
        id: 11, 
        name: "Veg Thali", 
        category: "special", 
        price: "₹250/thali", 
        description: "Complete vegetarian meal with breads, rice, dal, and vegetables.", 
        icon: "fa-utensils",
        image: "https://st.depositphotos.com/1778008/3945/i/950/depositphotos_39456313-stock-photo-indian-thali-food.jpg"
    },
    { 
        id: 12, 
        name: "Dry Fruit Mix", 
        category: "special", 
        price: "₹1500/kg", 
        description: "Assorted dry fruits and nuts for gifting.", 
        icon: "fa-apple-alt",
        image: "https://t4.ftcdn.net/jpg/16/70/94/39/360_F_1670943947_UuXc6VrjTFhhBobsS7TXjfZlUkglLK8I.jpg"
    }
];

// Load Products
const productsGrid = document.querySelector('.products-grid');
const categoryBtns = document.querySelectorAll('.category-btn');

function loadProducts(category = 'all') {
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&auto=format&fit=crop'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <p class="product-desc">${product.description}</p>
                <button class="order-btn" data-page="order">Order Now</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to order buttons in products
    document.querySelectorAll('.product-card .order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Hide all pages
            pageContents.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show order page
            document.getElementById('order').classList.add('active');
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        });
    });
}

// Load all products initially
loadProducts();

// Category filter
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active category button
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Load products for selected category
        const category = btn.getAttribute('data-category');
        loadProducts(category);
    });
});

// Order Form Submission
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    
    // In a real implementation, you would send this data to a server
    // For this example, we'll just show an alert
    alert(`Thank you ${name}! Your order for ${quantity} of ${item} has been received. We will call you at ${phone} shortly to confirm.`);
    
    // Reset form
    orderForm.reset();
});

// WhatsApp and Call buttons
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // In a real implementation, this would open WhatsApp with a pre-filled message
        window.open('https://wa.me/919876543210?text=Hello%20Vishu%20Sweets%2C%20I%20would%20like%20to%20place%20an%20order', '_blank');
    });
});

document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // In a real implementation, this would initiate a phone call
        window.location.href = 'tel:+919876543210';
    });
});