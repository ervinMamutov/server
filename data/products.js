import { v4 as newId } from 'uuid';

const products = [
  {
    id: newId(),
    category: 'electronic',
    name: 'HP Elite Dragonfly 13.5 G3',
    img: 'https://www.hp.com/be-nl/shop/media/catalog/product/c/0/c08145894.png?store=be-nl&image-type=image&auto=webp&format=pjpg&width=1600&height=2000&fit=bounds&dpr=1',
    price: 2149
  },
  {
    id: newId(),
    category: 'electronic',
    name: 'iPhone 15 Pro Max',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15promax-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081545199',
    price: 1400
  }
];

export default products;
