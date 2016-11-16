using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BooksApplication.Models
{
    public class Genre
    {
        public Genre()
        {
            Books = new List<Book>();
        }
        public int GenreID { get; set; }
        public string Name { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}