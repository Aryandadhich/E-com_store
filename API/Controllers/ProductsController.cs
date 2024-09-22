using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext Context;
        public ProductsController(StoreContext context)
        {
            this.Context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await Context.Products.ToListAsync();
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Product>> GetProduct(int id)
        {
           var Product = await Context.Products.FindAsync(id);

           if(Product == null) return NotFound();

           return Product;
        }
        
    }
}