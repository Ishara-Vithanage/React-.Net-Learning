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
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Student
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentInfo>>> GetStudentInfos()
        {
            return await _context.StudentInfo.ToListAsync();
        }

        // GET: api/Student/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentInfo>> GetStudentInfo(int id)
        {
            var studentInfo = await _context.StudentInfo.FindAsync(id);

            if (studentInfo == null)
            {
                return NotFound();
            }

            return studentInfo;
        }

        // PUT: api/Student/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentInfo(int id, StudentInfo studentInfo)
        {
            if (id != studentInfo.student_id)
            {
                return BadRequest();
            }

            _context.Entry(studentInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentInfoExists(id))
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

        // POST: api/Student
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentInfo>> PostStudentInfo(StudentInfo studentInfo)
        {
            _context.StudentInfo.Add(studentInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentInfo", new { id = studentInfo.student_id }, studentInfo);
        }

        // DELETE: api/Student/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentInfo(int id)
        {
            var studentInfo = await _context.StudentInfo.FindAsync(id);
            if (studentInfo == null)
            {
                return NotFound();
            }

            _context.StudentInfo.Remove(studentInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentInfoExists(int id)
        {
            return _context.StudentInfo.Any(e => e.student_id == id);
        }
    }
}
