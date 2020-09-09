'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');
//THIS IS FROM THE DOCS, NOT YET CUSTOM
module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.products.search(ctx.query);
    } else {
      entities = await strapi.services.products.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.products }));
  },
};

// app.get('/', (req, res)=>{
//     strapi.query('product-type').find({}).then( //can't recognize strapi
//         (ProductType)=>{
//             console.log(ProductType);
//        return res.render('index',{ ProductType:ProductType});
//     })
// })

