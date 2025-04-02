import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award05,
    title: 'Ekene A',
    subtitle: 'Dyronn kitchen can always be trusted to make your kitchen experience great. Their meals are delicious and are always served fresh. What makes them unique is their high quality management style. Oge can go above and beyond to put a smile on your face. Their array of continental dishes and local African cuisine is next to none. They are the best!',
  },
  {
    imgUrl: images.award05,
    title: 'Lovelyn Odeh',
    subtitle: 'I love the entire staff of Dyronn kitchen. The food, the customer service is excellent. Everything is 10/10. I highly recommend their services.',
  },
  {
    imgUrl: images.award05,
    title: 'Kosisochukwu Obiechina',
    subtitle: 'I had a great experience with Dyronn kitchen.Their customer service was excellent, delivery was right on time and the food was absolutely delicious. Everyone loved it! Would definitely recommend',
  },
  {
    imgUrl: images.award05,
    title: 'Tomi Grant',
    subtitle: 'Outstanding culinary experience! The food is absolutely divine! Each dish was beautifully presented, fresh and bursting with flavor. The soups, rice, fish, beef, chicken, stew and moi-moi were cooked to perfection. Overall the meals exceeded my expectation in every way. If you’re looking for high quality food and exceptional service, Dyronn Kitchen is the place to go.',
  },
];

export default { wines, cocktails, awards };
