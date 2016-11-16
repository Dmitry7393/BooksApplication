using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BooksApplication.Models
{
    public class BooksApplicationContext : DbContext
    {
        public BooksApplicationContext() : base("name=BooksApplicationContext")
        {
        }

        public DbSet<Genre> Genres { get; set; }

        public DbSet<Book> Books { get; set; }
    }
}
