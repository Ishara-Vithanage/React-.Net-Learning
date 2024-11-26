using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace SchoolAPI.Models
{
    public class StudentInfo
    {
        [Key]
        public int student_id { get; set; }
        public string full_name { get; set; }
    }
}
