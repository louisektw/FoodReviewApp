using System.ComponentModel.DataAnnotations;

namespace FoodReviewAPI.Models
{
    public class AppUser
    {
        [Key]
        public Guid Id { get; set; }
        public string? AppPassword { get; set; }
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}