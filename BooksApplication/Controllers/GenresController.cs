using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using BooksApplication.Models;

namespace BooksApplication.Controllers
{
    public class GenresController : ApiController
    {
        private BooksApplicationContext db = new BooksApplicationContext();

        // GET: api/Genres
        public IQueryable<Genre> GetGenres()
        {
            return db.Genres;
        }
        [HttpGet]
        public int GetGenreID(string genre)
        {
            return db.Genres.Where(n => n.Name == genre).Select(field => field.GenreID).SingleOrDefault();
        }
        // GET: api/Genres/5
        [ResponseType(typeof(Genre))]
        public async Task<IHttpActionResult> GetGenre(int id)
        {
            Genre genre = await db.Genres.FindAsync(id);
            if (genre == null)
            {
                return NotFound();
            }

            return Ok(genre);
        }

        // PUT: api/Genres/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGenre(int id, Genre genre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != genre.GenreID)
            {
                return BadRequest();
            }

            db.Entry(genre).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GenreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Genres
        [ResponseType(typeof(Genre))]
        public async Task<IHttpActionResult> PostGenre(Genre genre)
        {
            if (db.Genres.Any(o => o.Name == genre.Name))
            {
                System.Diagnostics.Debug.WriteLine("element already exist in table Genres");
            }
            else
            {
                db.Genres.Add(genre);
                await db.SaveChangesAsync();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            return CreatedAtRoute("DefaultApi", new { id = genre.GenreID }, genre);
        }

        // DELETE: api/Genres/5
        [ResponseType(typeof(Genre))]
        public async Task<IHttpActionResult> DeleteGenre(int id)
        {
            Genre genre = await db.Genres.FindAsync(id);
            if (genre == null)
            {
                return NotFound();
            }

            db.Genres.Remove(genre);
            await db.SaveChangesAsync();

            return Ok(genre);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GenreExists(int id)
        {
            return db.Genres.Count(e => e.GenreID == id) > 0;
        }
    }
}