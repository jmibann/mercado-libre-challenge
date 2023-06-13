const itemsAPI = require('../service');

const getAuthor = () => ({
    name: "Juan Manuel",
    lastName: "Ibañez"
  });

const formatSearchResult = (data) => {
  const author = getAuthor();

  const categoriesArray = data.available_filters.find(filter => filter.id === 'category');
  const  categories = categoriesArray ? categoriesArray.values.map(value => value.name) : [];

  const items = data.results.map(result => {
    const conditionAttribute = result.attributes.find( attribute => attribute.id === 'ITEM_CONDITION');

    const item = {
      id: result.id,
      title: result.title,
      picture: result.thumbnail,
      condition: conditionAttribute?.value_name,
      free_shipping: result.shipping.free_shipping,
      price: {
        currency: result.currency_id,
        amount: result.price,
      },
    }
    
    return item;
  })

  return {
    author,
    categories,
    items,
  };
}

const searchItems = (req, res) => {
  const query = req.query.q;

  if(!query){
    return res.status(400).json({
      'message': `item : ${query} not found.`
    })
  };

  return itemsAPI.getPosts(query)
    .then(data => res.send(formatSearchResult(data)))
    .catch(error => res.status(500).send(error))
};


const formatDescription = (data) => {
  const author = getAuthor();
  const price= {
    currency: data?.currency_id,
    amount: Number(data.price),
    decimals: Number(data.price),
  };
  
  return {
    author,
    item: {
      id: data?.id,
      price,
      title: data?.title,
      picture: data?.pictures?.pop()?.secure_url,
      condition: data?.condition,
      free_shipping: data?.shipping?.free_shipping,
      sold_quantity: data?.sold_quantity,
      description: data?.title,
    }
  }
}

const searchItem = (req, res) => {
  const { id } = req.params;

  if(!id){
    return res.status(400).json({
      'message': `item : ${id} not found.`
    })
  } 
  
  return itemsAPI.getItem(id)
    .then(data => res.send(formatDescription(data)))
    .catch(error => res.status(500).send(error))
}

module.exports = {
  searchItem,
  searchItems,
}