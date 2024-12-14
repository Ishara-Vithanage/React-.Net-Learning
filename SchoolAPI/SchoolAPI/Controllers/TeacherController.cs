using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolAPI.Data;
using SchoolAPI.Models;

namespace SchoolAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TeacherController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Teacher
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeacherInfo>>> GetTeacherInfo()
        {
            return await _context.TeacherInfo.ToListAsync();
        }

        // GET: api/Teacher/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeacherInfo>> GetTeacherInfo(int id)
        {
            var teacherInfo = await _context.TeacherInfo.FindAsync(id);

            if (teacherInfo == null)
            {
                return NotFound();
            }

            return teacherInfo;
        }

        // PUT: api/Teacher/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeacherInfo(int id, TeacherInfo teacherInfo)
        {
            if (id != teacherInfo.teacher_id)
            {
                return BadRequest();
            }

            _context.Entry(teacherInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeacherInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Teacher
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TeacherInfo>> PostTeacherInfo(TeacherInfo teacherInfo)
        {
            _context.TeacherInfo.Add(teacherInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeacherInfo", new { id = teacherInfo.full_name }, teacherInfo);
        }

        // DELETE: api/Teacher/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacherInfo(int id)
        {
            var teacherInfo = await _context.TeacherInfo.FindAsync(id);
            if (teacherInfo == null)
            {
                return NotFound();
            }

            _context.TeacherInfo.Remove(teacherInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeacherInfoExists(int id)
        {
            return _context.TeacherInfo.Any(e => e.teacher_id == id);
        }
    }
}
