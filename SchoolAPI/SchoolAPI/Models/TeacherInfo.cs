using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace SchoolAPI.Models
{
    public class TeacherInfo
    {
        [Key]
        public int teacher_id { get; set; }
        public string full_name { get; set; }
    }
}
