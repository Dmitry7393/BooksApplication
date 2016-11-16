using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BooksApplication.Models
{
    public class Book
    {
        public int BookID { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Year { get; set; }
        public string Publisher { get; set; }

        public int GenreId { get; set; }
        [ForeignKey("GenreId")]
        public Genre Genre { get; set; }
    }
}