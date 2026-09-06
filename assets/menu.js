// ---------- MENU DATA (matches the printed JSR Cafeteria flyer) ----------
const MENU = [
  {
    id:"hot", label:"Beverages", flyerLabel:"Beverages \u2013 Hot",
    photo:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&q=75&auto=format&fit=crop",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8h14v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M7 2c0 1-1 1-1 2s1 1 1 2M11 2c0 1-1 1-1 2s1 1 1 2"/></svg>',
    items:[
      {no:1, name:"Chai", price:15, photo:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&q=75&auto=format&fit=crop"},
      {no:2, name:"Hot Milk Coffee", price:25, photo:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=75&auto=format&fit=crop"},
      {no:3, name:"Black Coffee with Honey", price:20, photo:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&q=75&auto=format&fit=crop"},
    ]
  },
  {
    id:"combos", label:"Combos", flyerLabel:"Combos",
    photo:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=75&auto=format&fit=crop",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10a8 5 0 0 1 16 0z"/><path d="M3 10h18"/><path d="M4 13h16"/><path d="M5 13c0 3 3 5 7 5s7-2 7-5"/></svg>',
    items:[
      {no:4, name:"Small Bun Makkhan + Chai", price:45, note:"Bun makkhan served with regular chai", photo:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=75&auto=format&fit=crop"},
      {no:5, name:"Big Bun Makkhan + Chai", price:65, note:"Bun makkhan served with regular chai", photo:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=75&auto=format&fit=crop"},
    ]
  },
  {
    id:"snacks", label:"South Indian Snacks", flyerLabel:"South Indian \u2013 Snacks",
    photo:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=900&q=75&auto=format&fit=crop",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/></svg>',
    items:[
      {no:6, name:"Idli (Per Piece)", price:25, photo:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=75&auto=format&fit=crop"},
      {no:7, name:"Medu Vada (Per Piece)", price:30, photo:"https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?w=500&q=75&auto=format&fit=crop"},
      {no:8, name:"Idli Pan Fry (Per Plate)", price:55, photo:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=75&auto=format&fit=crop"},
      {no:9, name:"Vegetable Uttappam (Per Plate)", price:55, photo:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=75&auto=format&fit=crop"},
      {no:10, name:"Vegetable Upma (Per Plate)", price:55, photo:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=75&auto=format&fit=crop"},
      {no:11, name:"Dahi Vada (Per Plate)", price:60, photo:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=75&auto=format&fit=crop"},
    ]
  },
  {
    id:"dosa", label:"South Indian Dosa", flyerLabel:"South Indian \u2013 Dosa",
    photo:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900&q=75&auto=format&fit=crop",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 20L12 4l9 16z"/></svg>',
    items:[
      {no:12, name:"Masala Dosa", price:55, note:"Crispy golden crepe with spiced aloo masala filling", photo:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=75&auto=format&fit=crop"},
      {no:13, name:"Onion Masala Dosa", price:60, note:"Stuffed with roasted chopped onions and potato masala", photo:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&q=75&auto=format&fit=crop"},
      {no:14, name:"Butter Masala Dosa", price:65, note:"Roasted in pure amul butter with spiced potato filling", photo:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=75&auto=format&fit=crop"},
      {no:15, name:"Onion Butter Masala Dosa", price:70, note:"Butter-roasted with caramelized crunchy onions & potato filling", photo:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=75&auto=format&fit=crop"},
      {no:16, name:"Cheese Butter Masala Dosa", price:75, note:"Loaded with shredded melted cheese, butter & spiced potato filling", photo:"https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500&q=75&auto=format&fit=crop"},
    ]
  },
  {
    id:"toasts", label:"Toasts & Sandwiches", flyerLabel:"Toasts &amp; Sandwiches",
    photo:"https://images.unsplash.com/photo-1528736235302-52922df5c122?w=900&q=75&auto=format&fit=crop",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 4l18 16M21 4L3 20"/></svg>',
    items:[
      {no:17, name:"Grilled Bread Butter", price:20, photo:"https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=500&q=75&auto=format&fit=crop"},
      {no:18, name:"Cheese Grilled Bread Butter", price:30, photo:"https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&q=75&auto=format&fit=crop"},
      {no:19, name:"Grilled Veggies Sandwich", price:55, photo:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=75&auto=format&fit=crop"},
      {no:20, name:"Grilled Cheese Sandwich", price:65, photo:"https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=500&q=75&auto=format&fit=crop"},
      {no:21, name:"Grilled Cheese Corn Sandwich", price:70, photo:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=75&auto=format&fit=crop"},
    ]
  },
  {
    id:"cold", label:"Cold Coffees", flyerLabel:"Cold Coffees",
    photo:"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=900&q=75&auto=format&fit=crop",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8h12l-1.2 11a2 2 0 0 1-2 1.8h-5.6a2 2 0 0 1-2-1.8L6 8z"/><path d="M4 8h16M9 8V5a3 3 0 0 1 6 0v3"/></svg>',
    items:[
      {no:22, name:"Cold Coffee Medium", price:40, photo:"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&q=75&auto=format&fit=crop"},
      {no:23, name:"Cold Coffee Large", price:60, photo:"https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500&q=75&auto=format&fit=crop"},
    ]
  },
];

const WHATSAPP_NUMBER = "917840029032";
const CART_KEY = "jsr_cart";

// ---------- STATE ----------
let cart = loadCart();
let orderType = "Dine-in";

function loadCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveCart(){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }catch(e){ /* ignore */ }
}

// ---------- RENDER MENU ----------
const catNav = document.getElementById('catNav');
const menuWrap = document.getElementById('menuWrap');

const FALLBACK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19h16M6 19V9a6 6 0 0 1 12 0v10"/><path d="M9 9h6"/></svg>';

MENU.forEach((cat, idx) => {
  const chip = document.createElement('button');
  chip.className = 'cat-chip' + (idx===0 ? ' active' : '');
  chip.textContent = cat.label;
  chip.onclick = () => {
    document.getElementById('cat-'+cat.id).scrollIntoView({behavior:'smooth', block:'start'});
  };
  catNav.appendChild(chip);

  const block = document.createElement('div');
  block.className = 'cat-block';
  block.id = 'cat-'+cat.id;
  menuWrap.appendChild(block);

  if(cat.photo){
    const banner = document.createElement('div');
    banner.className = 'cat-banner';
    banner.innerHTML = `<img src="${cat.photo}" alt="${cat.flyerLabel}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="banner-fallback" style="display:none;">${FALLBACK_ICON}</div><span class="cb-label">${cat.flyerLabel}</span>`;
    block.appendChild(banner);
  }

  const title = document.createElement('div');
  title.className = 'cat-title';
  title.innerHTML = `<span class="icon">${cat.icon}</span><h3>${cat.flyerLabel}</h3><span class="count">${cat.items.length} items</span>`;
  block.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'item-grid';
  block.appendChild(grid);

  cat.items.forEach(item => {
    item.photo = item.photo || cat.photo;
    const card = document.createElement('div');
    card.className = 'item-card';
    card.id = 'item-'+item.no;
    card.innerHTML = `
      <div class="item-left">
        <div class="item-thumb">
          <img src="${item.photo}" alt="${item.name}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="thumb-fallback" style="display:none;">${FALLBACK_ICON}</div>
        </div>
        <div class="item-info">
          <div class="num">${String(item.no).padStart(2,'0')}</div>
          <div class="item-name">${item.name}</div>
          ${item.note ? `<div class="item-note">${item.note}</div>` : ''}
          <div class="item-price">&#8377;${item.price}</div>
        </div>
      </div>
      <div class="item-add" id="add-${item.no}"></div>
    `;
    grid.appendChild(card);
    renderItemAdd(item);
  });
});

function renderItemAdd(item, justAdded){
  const holder = document.getElementById('add-'+item.no);
  const qty = cart[item.no] || 0;
  if(qty === 0){
    holder.innerHTML = `<button class="add-btn" aria-label="Add ${item.name}">+</button>`;
    holder.querySelector('button').onclick = () => { changeQty(item, 1); };
  } else {
    holder.innerHTML = `
      <div class="qty-stepper">
        <button aria-label="Remove one">&minus;</button>
        <span class="qty-val">${qty}</span>
        <button aria-label="Add one">+</button>
      </div>`;
    const btns = holder.querySelectorAll('button');
    btns[0].onclick = () => changeQty(item, -1);
    btns[1].onclick = () => changeQty(item, 1);
  }
  if(justAdded){
    const card = document.getElementById('item-'+item.no);
    if(card){
      card.classList.remove('just-added');
      void card.offsetWidth;
      card.classList.add('just-added');
    }
    const btn = holder.querySelector('button');
    if(btn){
      btn.classList.remove('pop');
      void btn.offsetWidth;
      btn.classList.add('pop');
    }
  }
}

function changeQty(item, delta){
  const current = cart[item.no] || 0;
  const next = Math.max(0, current + delta);
  if(next === 0){ delete cart[item.no]; } else { cart[item.no] = next; }
  saveCart();
  renderItemAdd(item, delta > 0);
  renderCart();
}

function allItems(){
  return MENU.flatMap(c => c.items);
}

function getCartLines(){
  const items = allItems();
  return Object.entries(cart).map(([no, qty]) => {
    const item = items.find(i => i.no === Number(no));
    return item ? {...item, qty} : null;
  }).filter(Boolean).sort((a,b) => a.no - b.no);
}

function cartTotalAmount(){
  return getCartLines().reduce((sum, l) => sum + l.price * l.qty, 0);
}

function cartItemCount(){
  return Object.values(cart).reduce((s,q) => s+q, 0);
}

// ---------- RENDER CART DRAWER ----------
const cartLinesEl = document.getElementById('cartLines');
const emptyCartEl = document.getElementById('emptyCart');
const drawerFoot = document.getElementById('drawerFoot');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const floatBar = document.getElementById('floatBar');
const floatTotal = document.getElementById('floatTotal');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

let lastCartCount = -1;

function renderCart(){
  const lines = getCartLines();
  const count = cartItemCount();
  const total = cartTotalAmount();

  cartCountEl.textContent = count;
  cartTotalEl.innerHTML = '&#8377;' + total;
  floatTotal.innerHTML = '&#8377;' + total;

  if(count !== lastCartCount){
    cartCountEl.classList.remove('bump');
    void cartCountEl.offsetWidth;
    cartCountEl.classList.add('bump');
    lastCartCount = count;
  }

  if(lines.length === 0){
    emptyCartEl.style.display = 'block';
    drawerFoot.style.display = 'none';
    cartLinesEl.innerHTML = '';
    floatBar.classList.remove('show');
    return;
  }

  emptyCartEl.style.display = 'none';
  drawerFoot.style.display = 'block';
  if(!drawer.classList.contains('show')) floatBar.classList.add('show'); else floatBar.classList.remove('show');

  cartLinesEl.innerHTML = lines.map(l => `
    <div class="cart-line">
      <div>
        <div class="cl-name">${l.name}</div>
        <div class="cl-price">&#8377;${l.price} each</div>
      </div>
      <div class="cl-right">
        <div class="qty-stepper" data-no="${l.no}">
          <button data-act="minus" aria-label="Remove one">&minus;</button>
          <span class="qty-val">${l.qty}</span>
          <button data-act="plus" aria-label="Add one">+</button>
        </div>
        <div class="cl-total">&#8377;${l.price * l.qty}</div>
      </div>
    </div>
  `).join('');

  cartLinesEl.querySelectorAll('.qty-stepper').forEach(stepper => {
    const no = Number(stepper.dataset.no);
    const item = allItems().find(i => i.no === no);
    stepper.querySelector('[data-act="minus"]').onclick = () => { changeQty(item, -1); };
    stepper.querySelector('[data-act="plus"]').onclick = () => { changeQty(item, 1); };
  });
}

// ---------- DRAWER OPEN/CLOSE ----------
function openDrawer(){
  drawer.classList.add('show');
  overlay.classList.add('show');
  floatBar.classList.remove('show');
}
function closeDrawer(){
  drawer.classList.remove('show');
  overlay.classList.remove('show');
  if(cartItemCount() > 0) floatBar.classList.add('show');
}

document.getElementById('cartOpenBtn').onclick = openDrawer;
const heroCartBtn = document.getElementById('heroCartBtn');
if(heroCartBtn) heroCartBtn.onclick = openDrawer;
document.getElementById('drawerClose').onclick = closeDrawer;
overlay.onclick = closeDrawer;
floatBar.onclick = openDrawer;

// ---------- ORDER TYPE TOGGLE ----------
document.getElementById('typeDine').onclick = function(){
  orderType = "Dine-in";
  this.classList.add('active');
  document.getElementById('typeTakeaway').classList.remove('active');
};
document.getElementById('typeTakeaway').onclick = function(){
  orderType = "Takeaway";
  this.classList.add('active');
  document.getElementById('typeDine').classList.remove('active');
};

// ---------- SEND ORDER ----------
document.getElementById('sendOrderBtn').onclick = function(){
  const lines = getCartLines();
  if(lines.length === 0) return;

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const note = document.getElementById('custNote').value.trim();

  if(!name){
    document.getElementById('custName').focus();
    document.getElementById('custName').style.outline = '2px solid #A85C3F';
    return;
  }

  const total = cartTotalAmount();
  const orderRef = Math.floor(1000 + Math.random()*9000);

  let msg = `Hello JSR Cafeteria! I would like to place an order (#${orderRef}).\n\n`;
  lines.forEach(l => {
    msg += `${l.qty} x ${l.name} - Rs ${l.price * l.qty}\n`;
  });
  msg += `\nTotal: Rs ${total}`;
  msg += `\nOrder type: ${orderType}`;
  msg += `\nName: ${name}`;
  if(phone) msg += `\nPhone: ${phone}`;
  if(note) msg += `\nNote: ${note}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  document.getElementById('orderRef').textContent = 'ORDER #' + orderRef;
  document.getElementById('successModal').classList.add('show');
};

document.getElementById('successCloseBtn').onclick = function(){
  document.getElementById('successModal').classList.remove('show');
  cart = {};
  saveCart();
  allItems().forEach(renderItemAdd);
  renderCart();
  closeDrawer();
  document.getElementById('custName').value = '';
  document.getElementById('custPhone').value = '';
  document.getElementById('custNote').value = '';
};

renderCart();

// ---------- SCROLL REVEAL for menu-specific pieces ----------
if('IntersectionObserver' in window){
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.cat-block, .section-head').forEach(el => revealObserver.observe(el));

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting){
        entry.target.style.animationDelay = (i % 6) * 0.05 + 's';
        entry.target.classList.add('in-view');
        cardObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.1, rootMargin:'0px 0px -30px 0px'});

  document.querySelectorAll('.item-card').forEach(el => cardObserver.observe(el));
} else {
  document.querySelectorAll('.cat-block, .section-head, .item-card').forEach(el => el.classList.add('in-view'));
}
